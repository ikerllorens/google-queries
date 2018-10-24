import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) { }

  public searchFor(search: string): Observable<any> {
    const query = 'https://www.headlightlabs.com/api/assessment_search_wrapper?query=' + search;

    return this.http.get(query);
  }
}
