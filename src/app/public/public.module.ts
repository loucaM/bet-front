import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPartiesComponent } from './my-parties/my-parties.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { publicRoutingModule } from './publicRoutingModule.module';

@NgModule({
  declarations: [MyPartiesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    publicRoutingModule
  ]
})
export class PublicModule { }
