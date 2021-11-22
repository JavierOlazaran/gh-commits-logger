import { Commit } from './../../../../core/model/dtos/commits.dto';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'logger-commit-item',
  templateUrl: './commit-item.component.html',
  styleUrls: ['./commit-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitItemComponent implements OnInit {

  @Input() commit!: Commit;

  constructor() { }

  ngOnInit(): void {
  }

}
