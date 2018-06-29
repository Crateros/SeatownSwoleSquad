import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-workout',
  templateUrl: './daily-workout.component.html',
  styleUrls: ['./daily-workout.component.scss']
})
export class DailyWorkoutComponent implements OnInit {

  options: Object = { weekday: 'long', month: 'long', day: 'numeric' };
  today: String = new Date().toLocaleDateString('en-us', this.options);
  isWod: Boolean = true;

  constructor() { }

  ngOnInit() {
    console.log(this.today);
  }

}
