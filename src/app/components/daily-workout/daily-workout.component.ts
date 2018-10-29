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
    // this.createDailyWorkout()
    // .then(data => console.log(JSON.stringify(data)))
    // .catch(error => console.log(error));
  }

  formatWorkout(workout) {
    this.wod = (<any>Object).assign(this.wod, workout);
    this.wod.workoutDescriptionArray = this.wod.workoutDescription.split(/\n/);
  }

  getDailyWorkout() {
    const pathParameter = new Date().toISOString().slice(0, 10);
    const url = 'https://dlt8hc5cfl.execute-api.us-west-2.amazonaws.com/Devo/workout/' + pathParameter;

    // return fetch(url, {
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
    // .then((data) => {
    //   console.log('this is data: ', data);
    // });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.formatWorkout(data);
      });

    // fetch('https://dlt8hc5cfl.execute-api.us-west-2.amazonaws.com/Devo/workout/10-28-2018).then((response) => {
    //   return response.json();
    // }).then((data) => {
    //   this.wod = data;
    //   this.isWod = Object.keys(this.wod).length > 0;
    //   this.wodDescriptionArray = data.description.split('\n');
    // });
  }


  getMockSkill() {
    fetch('assets/mock-data/skill.json').then((response) => {
      return response.json();
    }).then((data) => {
      this.skillDescriptionArray = data.description.split('\n');
    });
  }

  createDailyWorkout() {
    const url = 'https://dlt8hc5cfl.execute-api.us-west-2.amazonaws.com/Devo/workout/';
    const data = {
      'workoutDate': new Date().toISOString().slice(0, 10),
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
    .then(response => response.json());
  }

  updateWodDescription(description) {
    this.wodDescriptionArray = description.split('\n');
  }

  updateSkillDescription(description) {
    this.skillDescriptionArray = description.split('\n');
  }



}
