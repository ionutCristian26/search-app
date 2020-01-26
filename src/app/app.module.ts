import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import { NotificationComponent } from './components/notification/notification.component';
import {SearchService} from './service/search.service';
import {HttpClientModule} from '@angular/common/http';
import {AlertModule} from "ngx-alerts";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    TableComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
