import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { Routes, RouterModule } from '@angular/router';
 

const routes: Routes = [
  { path:"", component: HeaderComponent }
]; 

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HeaderModule { }
