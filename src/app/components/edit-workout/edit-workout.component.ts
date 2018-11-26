import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-workout',
  templateUrl: './edit-workout.component.html',
  styleUrls: ['./edit-workout.component.scss']
})
export class EditWorkoutComponent implements OnInit {

  // Local variables
  activeEditOption = 'today';
  previewEdits = false;
  isPanelExpanded = false;
  editedWorkouts: Array<object> = [];
  currentEdits: Array<any> = [];

  constructor(public snackBar: MatSnackBar) {
    const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };

    // Get the past week as date strings
    for (let i = 0; i <= 7; i++) {
      const workout = {};
      const date = new Date();
      date.setDate(date.getDate() + i);
      const dateDisplay = date.toLocaleDateString('en-us', dateOptions);
      const dateString = date.toISOString().slice(0, 10);
      workout['formattedDate'] = dateDisplay;
      workout['dateParam'] = dateString;
      workout['skillEditText'] = '';
      workout['workoutEditText'] = '';
      this.editedWorkouts.push(workout);
    }
    // Default to editing today's workout
    this.currentEdits.push(this.editedWorkouts[0]);
  }

  ngOnInit() {}

  createWorkouts(day) {
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

  setActiveEditOption(option) {
    this.currentEdits = [];
    if (option === 'today') {
      this.currentEdits.push(this.editedWorkouts[0]);
    } else if (option === 'tomorrow') {
      this.currentEdits.push(this.editedWorkouts[1]);
    } else {
      this.currentEdits = this.editedWorkouts.slice(1);
    }

    this.activeEditOption = option;
  }

  clearEdits() {
    this.currentEdits.forEach((item: any) => {
      item.skillEditText = '';
      item.workoutEditText = '';
    });
  }

  saveEdits() {
    this.snackBar.open('Workouts Saved');
  }

  previewText() {
    this.currentEdits.forEach(item => {
      item.skillEditDisplay = item.skillEditText.split(/\n/);
      item.workoutEditDisplay = item.workoutEditText.split(/\n/);
    });
  }

}
