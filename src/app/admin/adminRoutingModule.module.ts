import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AthleteComponent } from './athlete/athlete.component';


const routes: Routes = [{ path: 'athlete', component: AthleteComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class adminRoutingModule {
}
