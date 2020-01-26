import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchEmitter: EventEmitter<any> = new EventEmitter<any>();

  public searchMode = false;

  constructor() {
  }

  ngOnInit() {
  }

  search(value) {
    let search;
    search = value.split('\n');
    if (search.length > 0) {
      this.searchEmitter.emit(search);
    }
  }
}
