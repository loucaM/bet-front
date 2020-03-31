import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddAthleteComponent } from './athletes/athlete-to-add/add-athlete.component';


const routes: Routes = [{path: 'add-athlete', component: AddAthleteComponent},
                        {path: '', component: AdminComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class adminRoutingModule {
}
