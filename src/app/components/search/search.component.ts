import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {fakeAsync} from "@angular/core/testing";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchEmitter: EventEmitter<any> = new EventEmitter<any>();

  public searchMode = false;

  constructor() { }

  ngOnInit() {
  }

  search(value) {
    if (value.length > 0) {
      const data = {
        value,
        searchMode: this.searchMode,
      };
      this.searchEmitter.emit(data);
    }
  }

  changeMode() {
    this.searchMode = !this.searchMode;
  }
}
