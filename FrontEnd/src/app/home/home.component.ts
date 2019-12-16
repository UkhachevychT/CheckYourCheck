import { Component, OnInit, ViewChild } from '@angular/core';
import { Check } from '../shared/models/check';
import { CheckService } from '../shared/services/check.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'quantity', 'price'];
  lastCheck: Check
  isRaw: boolean;
  loadingFile: boolean;
  constructor(private CheckService: CheckService) { }

  ngOnInit() {
    //this.loadData();
    this.isRaw = false;
    this.loadingFile = false;
  }

  loadData(id:number) {
    this.CheckService.getCheck(id).subscribe((data) => {
      this.lastCheck = data;
      this.loadingFile = false;
    });
  }

  toggleView(e: MatSlideToggleChange) {
    this.isRaw = e.checked;
  }

  getJsonValue(item) {
    return JSON.stringify(item, null, 2);
  }

  checkYourCheck(event){
    this.loadingFile = true;
    var check = new Check();
    check.image = event;
    check.id = 1;
    check.upload_date = '2019-12-16T00:23:55Z';
    this.CheckService.postImage(check).subscribe(
      (data) => {
      this.lastCheck = data;
    }, null, () => { 
      this.loadingFile = false; 
    }
    );
  }
}