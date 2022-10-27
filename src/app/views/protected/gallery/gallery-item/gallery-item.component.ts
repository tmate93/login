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

  public saveFile() {
    let downloadLink = document.createElement("a");
    downloadLink.href = this.file.fileData;
    downloadLink.download = this.file.fileName;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  deleteFile() {

  }
}
