import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProtectedRoutingModule } from "./protected-routing.module";
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { SharedModule } from "../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GalleryComponent,
    FileUploadComponent,
    GalleryItemComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProtectedModule { }
