import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  @ViewChild('fileInput', {static: true}) fileInput!: ElementRef<HTMLInputElement>;

  uploadForm: FormGroup;

  constructor() {
    this.uploadForm = new FormGroup({
      file: new FormControl(null, [Validators.required]),
    });
  }

  submit() {
  }

}
