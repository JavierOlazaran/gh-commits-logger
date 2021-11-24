import { Commit } from './../model/dtos/commits.dto';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllCommits(owner: string, repo: string): Observable<Commit[]> {
    const URL = `${environment.commitLoggerEndpoints.getAllCommits}/${owner}/${repo}`;

    return this.http.get<any>(URL);
  }
}
