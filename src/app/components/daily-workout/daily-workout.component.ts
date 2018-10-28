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
  isWod: Boolean = false;
  editingWodSection: Boolean = false;
  editingSkillSection: Boolean = false;
  wod: Object = {};
  wodDescriptionArray = [];
  skillDescriptionArray = [];

  constructor() { }

  ngOnInit() {
    this.getMockWorkout();
    this.getMockSkill();
  }

  getMockWorkout() {
    fetch('assets/mock-data/wod.json').then((response) => {
      return response.json();
    }).then((data) => {
      this.wod = data;
      this.isWod = Object.keys(this.wod).length > 0;
      this.wodDescriptionArray = data.description.split('\n');
    });
  }

  getMockSkill() {
    fetch('assets/mock-data/skill.json').then((response) => {
      return response.json();
    }).then((data) => {
      this.skillDescriptionArray = data.description.split('\n');
    });
  }

  updateWodDescription(description) {
    this.wodDescriptionArray = description.split('\n');
  }

  updateSkillDescription(description) {
    this.skillDescriptionArray = description.split('\n');
  }



}
