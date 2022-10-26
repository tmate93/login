import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProtectedRoutingModule } from "./protected-routing.module";

@NgModule({
  declarations: [
    GalleryComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
