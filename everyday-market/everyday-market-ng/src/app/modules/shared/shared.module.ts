import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input/search-input.component';
import { BusyComponent } from './busy/busy.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SearchInputComponent,
    BusyComponent,
  ],
  exports: [
    SearchInputComponent,
    BusyComponent,
  ],
})
export class SharedModule { }
