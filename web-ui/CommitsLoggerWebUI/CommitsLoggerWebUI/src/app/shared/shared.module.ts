import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    SanitizeUrlPipe,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SanitizeUrlPipe,
    LoaderComponent
  ]
})
export class SharedModule { }
