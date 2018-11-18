import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-daily-workout',
  templateUrl: './daily-workout.component.html',
  styleUrls: ['./daily-workout.component.scss']
})
export class DailyWorkoutComponent implements OnInit, OnChanges {

  // Input variables
  @Input()
  enableEditing: Boolean = false;

  // Local variables
  recentWorkouts: any = [];
  editingWodSection: Boolean = false;
  editingSkillSection: Boolean = false;
  currentWorkoutDisplay = 0;
  wod: any = {};

  constructor() {
    const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };

    // Get the past week as date strings
    for (let i = 0; i <= 6; i++) {
      const dateInfo = {};
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateDisplay = date.toLocaleDateString('en-us', dateOptions);
      const dateString = date.toISOString().slice(0, 10);
      dateInfo['formattedDate'] = dateDisplay;
      dateInfo['dateParam'] = dateString;
      this.recentWorkouts.push(dateInfo);
    }
    console.log(this.recentWorkouts);
  }

  ngOnInit() {
    // this.getDailyWorkout();
  }

  ngOnChanges() {}

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

  updateCurrentWorkoutDisplay(direction) {
    if (direction === 'left') {
      this.currentWorkoutDisplay += 1;
    } else if (direction === 'right') {
      this.currentWorkoutDisplay -= 1;
    }
    console.log(this.currentWorkoutDisplay);
  }

  createDailyWorkout() {
    const url = 'https://dlt8hc5cfl.execute-api.us-west-2.amazonaws.com/Devo/workout/';
    const data = {
      'workoutDate': new Date().toISOString().slice(0, 10),
      'skillDescription': '5x5 Bench\n1RM Bench\n10 Jump Squats',
      'workoutDescription': 'Pushups\nPullups\nSitups Bitch!',
      'workoutName': 'Zach Gets Jacked',
      'isWod': false
    };

    return fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/x-amz-json-1.0; charset=utf-8'
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => console.error('Error creating workout: ', error));
  }

  formatWorkout(workout) {
    this.wod = (<any>Object).assign(this.wod, workout);
    this.wod.workoutDescriptionArray = this.wod.workoutDescription.split(/\n/);
    this.wod.skillDescriptionArray = this.wod.skillDescription.split(/\n/);
  }

  updateWodDescription(description) {
  }

  updateSkillDescription(description) {
  }
}
