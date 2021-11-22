import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CommitItemComponent } from './components/commit-item/commit-item.component';


@NgModule({
  declarations: [
    MainComponent,
    CommitItemComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
