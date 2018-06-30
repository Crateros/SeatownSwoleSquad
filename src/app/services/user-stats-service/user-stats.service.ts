import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable({
  providedIn: 'root'
})
export class UserStatsService {

  getURL = 'https://dlt8hc5cfl.execute-api.us-west-2.amazonaws.com/beta/user/Talia';

  constructor(
    private api: ApiService
  ) { }

  getUserStats() {
    return this.api.get(this.getURL);
    // .subscribe(data => {
      // console.log('data in service: ', data);
      // return data;
  }
}
