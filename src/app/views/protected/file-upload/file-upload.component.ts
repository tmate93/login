import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FileService } from "../../../core/services/file-service/file.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  @ViewChild('fileInput', {static: true}) fileInput!: ElementRef<HTMLInputElement>;

  uploadForm: FormGroup;

  constructor(private router: Router, private fileService: FileService) {
    this.uploadForm = new FormGroup({
      file: new FormControl(null, [Validators.required]),
    });
  }

  submit() {
    const input = this.fileInput.nativeElement;
    if (!input.files || input.files.length === 0) {
      return;
    }
    const fileData = input.files[0];
    if (!fileData) {
      return;
    }
    this.fileService.storeFile(fileData);
    this.router.navigate(['../../protected/gallery']);
  }

}
