import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @ViewChild('uploadIcon', { static: false }) uploadIcon: ElementRef
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef
  @Output() onFilesUploaded: EventEmitter<File> = new EventEmitter<File>()
  constructor() { }

  ngOnInit() {
  }

  uploadEvent(event: File[]) {
    if (event && event.length > 0) {
      this.onFilesUploaded.emit(event[event.length - 1])
    }
  }
}
