import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddAthleteComponent } from './athletes/athlete-to-add/add-athlete.component';
import { adminRoutingModule } from './adminRoutingModule.module';
import { AthleteListComponent } from './athletes/athlete-list/athlete-list.component';
import { AdminComponent } from './admin.component';
import { AthleteDetailComponent } from './athletes/athlete-detail/athlete-detail.component';

@NgModule({
  declarations: [AdminComponent, AddAthleteComponent, AthleteListComponent, AthleteDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    adminRoutingModule
  ],
  providers: []
})

export class AdminModule { }
