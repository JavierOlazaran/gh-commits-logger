import { SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SanitizeUrlPipe } from '../sanitize-url.pipe';

export class DomSanitizerMock extends DomSanitizer {
  sanitize = jest.fn();
  bypassSecurityTrustHtml = jest.fn();
  bypassSecurityTrustStyle = jest.fn();
  bypassSecurityTrustScript = jest.fn();
  bypassSecurityTrustUrl = jest.fn();
  bypassSecurityTrustResourceUrl = jest.fn();
}

describe('SanitizeUrlPipe', () => {
  const domSanitizerMock = new DomSanitizerMock();
  const pipe = new SanitizeUrlPipe(domSanitizerMock);

  beforeEach(() => {
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should URL sanitizer', () => {
    const mockURL = 'http://someUrl.com';
    pipe.transform(mockURL);

    expect(domSanitizerMock.bypassSecurityTrustResourceUrl).toHaveBeenCalled();
    expect(domSanitizerMock.sanitize).toHaveBeenCalledWith(SecurityContext.URL, mockURL);
  });
});
