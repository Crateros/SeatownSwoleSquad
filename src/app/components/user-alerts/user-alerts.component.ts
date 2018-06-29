import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-alerts',
  templateUrl: './user-alerts.component.html',
  styleUrls: ['./user-alerts.component.scss']
})
export class UserAlertsComponent implements OnInit {

  alert: String = 'No afternoon or evening classes July 4th!';
  alertStatus: Boolean = false;

  constructor() { }

  ngOnInit() {
    this.getAlerts();
  }

  getAlerts() {
    // TODO: Request alert from api and set boolean accordingly

    if (this.alert) {
      this.alertStatus = true;
    }
  }

}
