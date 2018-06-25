import { Component } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';

interface UserStats {
  userName: string;
  WoD: Object;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private http: HttpClient) { }

  data = {};
  title = 'app';
  getURL = 'https://dlt8hc5cfl.execute-api.us-west-2.amazonaws.com/dev/user/Talia';

  getUserStats() {
    this.http.get(this.getURL).subscribe(
      response => this.data = response,
      error => console.log('Error: ', error)
    );
    console.log(this.data);
  }
}
