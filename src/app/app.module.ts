// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { DailyWorkoutComponent } from './components/daily-workout/daily-workout.component';
import { UserAlertsComponent } from './components/user-alerts/user-alerts.component';
import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

// Services
import { ApiService } from './api.service';
import { UserStatsService } from './services/user-stats-service/user-stats.service';

@NgModule({
  declarations: [
    AppComponent,
    DailyWorkoutComponent,
    UserAlertsComponent,
    UserStatsComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
