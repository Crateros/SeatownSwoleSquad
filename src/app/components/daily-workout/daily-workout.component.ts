import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-workout',
  templateUrl: './daily-workout.component.html',
  styleUrls: ['./daily-workout.component.scss']
})
export class DailyWorkoutComponent implements OnInit {

  options: Object = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  today: String = new Date().toLocaleDateString('en-us', this.options);

  constructor() { }

  ngOnInit() {
    console.log(this.today);
  }

}
