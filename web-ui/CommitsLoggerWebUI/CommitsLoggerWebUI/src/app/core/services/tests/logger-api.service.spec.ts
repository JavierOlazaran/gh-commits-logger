import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../../environments/environment';

import { LoggerApiService } from '../logger-api.service';

describe('LoggerApiService', () => {
  let service: LoggerApiService;
  const httpClientMock = {
    get: jest.fn()
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: httpClientMock}
      ]
    });
    service = TestBed.inject(LoggerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http client GET method with the correct URL', () => {
    const baseURL = `${environment.commitLoggerEndpoints.getAllCommits}/`;

    service.getAllCommits('firstOwner', 'firstRepo');
    expect(httpClientMock.get).toHaveBeenCalledWith(`${baseURL}firstOwner/firstRepo`);

    service.getAllCommits('secondOwner', 'secondRepo');
    expect(httpClientMock.get).toHaveBeenCalledWith(`${baseURL}firstOwner/firstRepo`);
  });
});
