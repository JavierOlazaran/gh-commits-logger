import { ComponentFixture, TestBed } from '@angular/core/testing';
import { COMMIT_ELEMENT_MOCK } from '../../../../shared/mocks/commits.mock';
import { SharedModule } from '../../../../shared/shared.module';

import { CommitItemComponent } from './commit-item.component';

describe('CommitItemComponent', () => {
  let component: CommitItemComponent;
  let fixture: ComponentFixture<CommitItemComponent>;

  const commitMock = COMMIT_ELEMENT_MOCK;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitItemComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitItemComponent);
    component = fixture.componentInstance;
    component.commit = commitMock;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
