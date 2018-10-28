import { Component, OnInit } from '@angular/core';
import { UserStatsService } from './../../services/user-stats-service/user-stats.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss']
})
export class UserStatsComponent implements OnInit {

  user: Object = {};

  constructor(
    private userStatsService: UserStatsService
  ) { }

  ngOnInit() {}

  getUserStats() {
    this.userStatsService.getUserStats()
    .subscribe(data => {
      this.user = data;
    });
  }
}
