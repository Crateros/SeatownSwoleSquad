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
  getURL = 'https://dlt8hc5cfl.execute-api.us-west-2.amazonaws.com/dev/user/Talia';

// this.http.get(this.getURL).subscribe(
//   response => this.data = response,
//   error => console.log('Error: ', error)
// );
// console.log(this.data);
}
