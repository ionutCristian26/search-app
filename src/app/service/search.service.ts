import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private mapUrl = 'https://bdndev.com/~devbdn/customSearch/maps';

  constructor(private http: HttpClient) { }

  mapSearch(value) {
    return this.http.get(this.mapUrl + `?_search=${ value }`);
  }
}
