import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProtectedRoutingModule } from "./protected-routing.module";
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';

@NgModule({
  declarations: [
    GalleryComponent,
    FileUploadComponent,
    GalleryItemComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
