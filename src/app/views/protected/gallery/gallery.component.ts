import { Component } from '@angular/core';
import { FileData } from "../../../core/models/file/file.model";
import { FileService } from "../../../core/services/file-service/file.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  orderBy: keyof FileData;
  ascending: boolean;

  constructor(public fileService: FileService) {
    this.orderBy = "uploadDate";
    this.ascending = true;
  }

  public sortFiles(order: keyof FileData): void {
    if (this.orderBy !== order) {
      this.orderBy = order;
      this.ascending = true;
    } else {
      this.ascending = !this.ascending;
    }
  }
}

