import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-daily-workout',
  templateUrl: './daily-workout.component.html',
  styleUrls: ['./daily-workout.component.scss']
})
export class DailyWorkoutComponent implements OnInit {

  // Input variables
  @Input()
  enableEditing: Boolean = false;

  // Local variables
  recentWorkouts: any = [];
  workoutDisplayIndex = 0;
  currentWorkoutDisplay = '0';
  workoutDisplayArray: Array<string> = ['0', '1', '2', '3', '4', '5', '6'];
  wod: any = {};

  constructor() {
    const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };

    // Get the past week as date strings
    for (let i = 0; i <= 6; i++) {
      const dateInfo = {};
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateDisplay = date.toLocaleDateString('en-us', dateOptions);
      dateInfo['formattedDate'] = dateDisplay;
      this.recentWorkouts.push(dateInfo);
    }
  }

  ngOnInit() {
    // this.getDailyWorkout();
  }

  getDailyWorkout() {
    const pathParameter = new Date().toISOString().slice(0, 10);
    const url = 'https://dlt8hc5cfl.execute-api.us-west-2.amazonaws.com/Devo/workout/' + pathParameter;

    // fetch(url, {
    //   method: 'GET',
    //   mode: 'no-cors',
    //   cache: 'no-cache',
    //   credentials: 'omit',
    //   headers: {
    //     'Content-Type': 'application/x-amz-json-1.0; charset=utf-8',
    //   },
    //   redirect: 'follow',
    //   referrer: 'no-referrer',
    // })
    // .then(response => response.json())
    // .then(data => {
    //   this.formatWorkout(data);
    // })
    // .catch(error => console.error('Error getting daily workout: ', error));

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        this.formatWorkout(myJson);
      });
  }

  slideWorkoutDisplay(direction) {
    if (direction === 'left') {
      this.workoutDisplayIndex += 1;
    } else if (direction === 'right') {
      this.workoutDisplayIndex -= 1;
    }
    this.currentWorkoutDisplay = this.workoutDisplayArray[this.workoutDisplayIndex];
  }

  formatWorkout(workout) {
    this.wod = (<any>Object).assign(this.wod, workout);
    this.wod.workoutDescriptionArray = this.wod.workoutDescription.split(/\n/);
    this.wod.skillDescriptionArray = this.wod.skillDescription.split(/\n/);
  }
}
