import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @ViewChild('uploadIcon', { static: false }) uploadIcon: ElementRef
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef
  files: Array<any>
  constructor() { }

  ngOnInit() {
    this.files = [];
  }

  uploadEvent(event){
    for (let index = 0; index < event.length; index++){
      const element = event[index];
      this.files.push(element.name)
    }
  }

  deleteAttachment(index){
    this.files.splice(index, 1)
  }
}
