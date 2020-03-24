import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AthleteComponent } from './athlete/athlete.component';
import { adminRoutingModule } from './adminRoutingModule.module';
import { AthletesService } from './athlete/athlete.service';

@NgModule({
  declarations: [AthleteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    adminRoutingModule
  ],
  providers: [AthletesService]
})

export class AdminModule { }
