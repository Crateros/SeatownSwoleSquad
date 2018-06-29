import { Component, OnInit } from '@angular/core';
import { UserStatsService } from './../../services/user-stats-service/user-stats.service';


@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss']
})
export class UserStatsComponent implements OnInit {

  constructor(
    private userStatsService: UserStatsService
  ) { }

  ngOnInit() {
    this.getUserStats();
  }

  getUserStats() {
    const serviceResponse = this.userStatsService.getUserStats();
    console.log(serviceResponse);
    // this.http.get(this.getURL).subscribe(
    //   response => this.data = response,
    //   error => console.log('Error: ', error)
    // );
    // console.log(this.data);
  }

}
