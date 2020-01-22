import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private mapUrl = 'https://shipments-api.osc-fr1.scalingo.io/customSearch/maps';
  private customUrl = 'https://shipments-api.osc-fr1.scalingo.io/customSearch';

  constructor(private http: HttpClient) { }

  mapSearch(value) {
    return this.http.get(this.mapUrl + `?_search=${ value }`);
  }

  customSearch(value: any) {
    return this.http.get(this.customUrl + `?_search=${ value }`);
  }
}
