import { Component } from '@angular/core';

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

  constructor() { }

  getUserStats() {}
}
