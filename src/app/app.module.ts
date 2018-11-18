// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { DailyWorkoutComponent } from './components/daily-workout/daily-workout.component';
import { WorkoutDisplayComponent } from './components/daily-workout/workout-display/workout-display.component';
import { UserAlertsComponent } from './components/user-alerts/user-alerts.component';
import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PodiumComponent } from './components/podium/podium.component';
import { TransitionSliderComponent } from './components/transition-slider/transition-slider.component';

// Services
import { ApiService } from './api.service';
import { UserStatsService } from './services/user-stats-service/user-stats.service';

@NgModule({
  declarations: [
    AppComponent,
    DailyWorkoutComponent,
    UserAlertsComponent,
    UserStatsComponent,
    UserProfileComponent,
    PodiumComponent,
    TransitionSliderComponent,
    WorkoutDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    UserStatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
