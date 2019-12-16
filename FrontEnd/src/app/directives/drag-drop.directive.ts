import { Directive, Output, HostBinding, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {
  @Output() onFileDropped = new EventEmitter<any>();
  @HostBinding('style.background-color') private backgroundColor;
  @HostBinding('style.color') private color;
  @HostBinding('style.border-color') private borderColor;
  @HostBinding('style.cursor') private cursor;
  @HostListener('dragover', ['$event']) onDragOver(event: Event) {
    this.activate(event);
  }
  @HostListener('dragleave', ['$event']) public onDragLeave(event: Event) {
    this.deactivate(event);
  }
  @HostListener('mouseover', ['$event']) public onMouseOn(event: Event) {
    this.activate(event);
  }
  @HostListener('mouseout', ['$event']) public onMouseOut(event: Event) {
    this.deactivate(event);
  }
  @HostListener('drop', ['$event', '$event.dataTransfer']) public onDrop(event: Event, data: DataTransfer) {
    this.activate(event);
    let files = data.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }

  constructor() {
    this.backgroundColor = null;
    this.borderColor = 'rgba(100, 148, 237, 0.5)'
    this.color = 'rgba(100, 148, 237, 0.5)';
    this.cursor = null;
  }

  private activate(event: Event){
    this.backgroundColor = 'rgba(211, 211, 211, 0.5)';
    this.borderColor = 'rgba(100, 148, 237, 1)'
    this.color = 'rgba(100, 148, 237, 1)';
    this.cursor = 'pointer';
    event.preventDefault();
    event.stopPropagation();
  }

  private deactivate(event: Event){
    this.backgroundColor = null;
    this.borderColor = 'rgba(100, 148, 237, 0.5)'
    this.color = 'rgba(100, 148, 237, 0.5)';
    this.cursor = null;
    event.preventDefault();
    event.stopPropagation();
  }
}
