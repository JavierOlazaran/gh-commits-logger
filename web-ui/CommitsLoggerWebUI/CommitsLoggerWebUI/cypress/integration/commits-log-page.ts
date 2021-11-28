import { COMMITS_MOCK } from '../../src/app/shared/mocks/commits.mock';

describe('Open log page', () => {

  describe('Real api call', () => {

    beforeEach(() => {
      cy.visit('/');
    });

    it('Visits the initial project page', () => {
      cy.contains('Commits Log');
    });

    it('should display list of commits', () => {
      cy.get('logger-commit-item')
      .should('have.length.greaterThan', 0);
    });

    it('every commit should have data', () => {
      cy.get('logger-commit-item')
      .each((element) => {
        expect(element).to.contain('Message')
        expect(element).to.contain('Author')
        expect(element).to.contain('View Commit')
      });

      cy.get('.commit__message')
      .each((element) => {
        expect(element[0].innerText.split(': ').length).to.equal(2);
        expect(element[0].innerText.split(': ')[1]).not.to.equal('');
        expect(element[0].innerText.split(': ')[1]).not.to.be.undefined;
      });

      cy.get('.commit__author')
      .each((element) => {
        expect(element[0].innerText.split(': ').length).to.equal(2);
        expect(element[0].innerText.split(': ')[1]).not.to.equal('');
        expect(element[0].innerText.split(': ')[1]).not.to.be.undefined;
      });

      cy.get('.commit__view__link')
      .each((element) => {
        expect(element.attr('href')).to.contain('https://');
        expect(element.attr('target')).to.equal('blank');
      });
    });
  });

  describe('Mocked API calls', () => {

    beforeEach(() => {
      cy.intercept('GET', `https://localhost:5001/api/v1/commits/JavierOlazaran/gh-commits-logger`, COMMITS_MOCK).as('GetAllCommitsEndpointCall');
      cy.visit('/');
    });

    it('should get the commits', () => {
      console.log('here');
      cy.wait('@GetAllCommitsEndpointCall');

      cy.get('logger-commit-item')
      .should('have.length', 10);
    });

    it('Commit items should have the correct data', () => {
     cy.wait('@GetAllCommitsEndpointCall');

      cy.get('logger-commit-item')
      .each((element) => {
        expect(element).to.contain('Message')
        expect(element).to.contain('Author')
        expect(element).to.contain('View Commit')
      });

      cy.get('.commit__message')
      .each((element, index) => {
        expect(element[0].innerText.split(': ').length).to.equal(2);
        expect(element[0].innerText.split(': ')[1]).to.equal(COMMITS_MOCK[index].message);
      });

      cy.get('.commit__author')
      .each((element, index) => {
        expect(element[0].innerText.split(': ').length).to.equal(2);
        expect(element[0].innerText.split(': ')[1]).to.equal(COMMITS_MOCK[index].author);
      });

      cy.get('.commit__view__link')
      .each((element, index) => {
        expect(element.attr('href')).to.equal(COMMITS_MOCK[index].url);
        expect(element.attr('target')).to.equal('blank');
      });
    });
  });
})
