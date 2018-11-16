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
  dateOptions: Object = { weekday: 'long', month: 'long', day: 'numeric' };
  today: String = new Date().toLocaleDateString('en-us', this.dateOptions);
  editingWodSection: Boolean = false;
  editingSkillSection: Boolean = false;
  wod: any = {};

  constructor() {}

  ngOnInit() {
    this.getDailyWorkout();
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
