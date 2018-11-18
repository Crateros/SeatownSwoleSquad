import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workout-display',
  templateUrl: './workout-display.component.html',
  styleUrls: ['./workout-display.component.scss']
})
export class WorkoutDisplayComponent implements OnInit {

  // Input variables
  @Input()
  workout: Object = {};

  constructor() { }

  ngOnInit() {
    console.log(this.workout);
  }

}
