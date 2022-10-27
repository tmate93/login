import { Component, Input } from '@angular/core';
import { FileData } from "../../../../core/models/file/file.model";

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss'],
})
export class GalleryItemComponent {

  @Input() file!: FileData;

  constructor() { }

  saveFile() {

  }

  deleteFile() {

  }
}
