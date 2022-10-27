import { Component } from '@angular/core';
import { FileData } from "../../../core/models/file/file.model";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  testFiles: FileData[];

  constructor() {
    this.testFiles = [
      {
        fileName: 'testFile',
        fileSize: 1234,
        fileData: 'data',
        uploadDate: new Date()
      },
      {
        fileName: 'testFile2',
        fileSize: 1234,
        fileData: 'data',
        uploadDate: new Date()
      },
      {
        fileName: 'testFile3',
        fileSize: 1234,
        fileData: 'data',
        uploadDate: new Date()
      }
    ];
  }
}

