import { Commit } from './../../core/model/dtos/commits.dto';
import { Component, OnInit } from '@angular/core';
import { CommitsDTO } from 'src/app/core/model/dtos/commits.dto';
import { COMMITS_MOCK } from 'src/app/mocks/commits.mock';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  commits: Commit[] = [];

  constructor() { }

  ngOnInit(): void {
    this.commits = COMMITS_MOCK.commits;
  }

}
