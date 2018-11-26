import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  imports: [
  CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatTreeModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatTreeModule,
  ],
  declarations: []
})
export class MaterialModule { }
