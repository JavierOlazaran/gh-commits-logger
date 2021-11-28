import { Observable } from 'rxjs';
import { LoggerApiService } from './../../core/services/logger-api.service';
import { Commit } from './../../core/model/dtos/commits.dto';
import { Component, OnInit } from '@angular/core';
import { COMMITS_MOCK } from 'src/app/shared/mocks/commits.mock';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  commits$!: Observable<Commit[]>;

  constructor(
    private loggerSvc: LoggerApiService
  ) { }

  ngOnInit(): void {
    this.commits$ = this.loggerSvc.getAllCommits('JavierOlazaran', 'gh-commits-logger');
  }

}
