import { Injectable } from '@angular/core';
import { FileData } from "../../models/file/file.model";

const localStorageName = 'files';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  files: FileData[];

  constructor() {
    this.files = this.getFilesFromStorage();
  }

  storeFile(uploadedFile: File) {

    const reader = new FileReader();

    reader.readAsDataURL(uploadedFile);

    reader.addEventListener('load', () => {
      if (typeof reader.result !== "string") {
        return;
      }
      this.addFile(uploadedFile.name, reader.result, uploadedFile.size)
    });
  }

  private addFile(fileName: string, fileData: string, fileSize: number) {
    this.files = [
      ...this.files,
      {
        fileName,
        fileData,
        fileSize,
        uploadDate: new Date()
      }
    ];
    this.setFilesToStorage(this.files);
  }

  private getFilesFromStorage(): FileData[] {
    const rawFileData = localStorage.getItem(localStorageName);
    if (!rawFileData) {
      return [];
    }
    return JSON.parse(rawFileData, parseObject);
  }

  private setFilesToStorage(files: FileData[]): void {
    localStorage.setItem(localStorageName, JSON.stringify(files));
  }
}

function parseObject<T>(key: string, value: T): T | Date {
  if (typeof value !== 'string') {
    return value;
  }
  if (value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)) {
    return new Date(value);
  }
  return value;
}
