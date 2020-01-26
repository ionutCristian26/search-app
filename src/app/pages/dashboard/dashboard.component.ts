import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../service/search.service';
import {AlertService} from 'ngx-alerts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public data;
  public showSpinner = false;

  constructor(private service: SearchService,
              private alertService: AlertService) {
  }

  ngOnInit() {
  }

  async getSearch($event: any) {
    this.showSpinner = true;
    this.data = [];
    for (const el of $event) {
      await this.service.mapSearch(el).subscribe(res => {
        const localData = res;
        // @ts-ignore
        localData.forEach(item => {
          item.search = el
          this.data.push(item);
        })
        this.showSpinner = false;
        console.log(res);
      }, err => {
        this.alertService.danger(err.message);
        this.showSpinner = false;
      });
    }
  }
}
