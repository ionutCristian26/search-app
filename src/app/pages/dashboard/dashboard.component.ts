import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../service/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public data;
  public showSpinner = false;

  constructor(private service: SearchService) { }

  ngOnInit() {
  }

  getSearch($event: any) {
    if ($event.searchMode) {
      this.showSpinner = true;
      this.service.customSearch($event.value).subscribe(res => {
        this.showSpinner = false;
        this.data = res;
        console.log(res);
      }, err => {
        this.showSpinner = false;
        console.log(err);
      });
    } else {
      this.showSpinner = true;
      this.service.mapSearch($event.value).subscribe(res => {
        this.showSpinner = false;
        this.data = res;
        console.log(res);
      }, err => {
        this.showSpinner = false;
        console.log(err);
      });
    }
  }
}
