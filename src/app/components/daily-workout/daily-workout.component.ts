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
  wod: Object = {};

  constructor() { }

  ngOnInit() {
    this.getMockWorkout();
  }

  getMockWorkout() {
    fetch('assets/mock-data/wod.json').then((response) => {
      return response.json();
    }).then((data) => {
      this.wod = data;
      console.log(this.wod);
    });
  }

}
