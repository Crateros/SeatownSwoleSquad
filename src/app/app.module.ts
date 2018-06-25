import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';

// Components
import { AppComponent } from './app.component';
import { DailyWorkoutComponent } from './components/daily-workout/daily-workout.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyWorkoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
