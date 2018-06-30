import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  data = {};
  title = 'app';

  get(url) {
    return this.http.get(url);
  }
}
