import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { GalleryComponent } from "./gallery/gallery.component";


const routes: Routes = [
  {
    path: 'file-upload',
    component: FileUploadComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
