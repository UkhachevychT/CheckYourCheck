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

  constructor(private CheckService: CheckService) { }

  ngOnInit() {
    this.loadData();
    this.isRaw = false;
  }

  loadData() {
    this.CheckService.getCheck().subscribe((data) => {
      this.lastCheck = data;
    });
  }

  toggleView(e: MatSlideToggleChange) {
    this.isRaw = e.checked;
  }

  getJsonValue(item) {
    return JSON.stringify(item, null, 2);
  }

  checkYourCheck(event: File){
    debugger;
    this.CheckService.postImage(event).subscribe((data)=>{
      this.lastCheck = data;
    });
  }
}