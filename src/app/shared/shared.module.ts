import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSizePipe } from './pipes/filesize.pipe';


@NgModule({
  declarations: [
    FileSizePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FileSizePipe
  ]
})
export class SharedModule { }
