import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { MyPartiesComponent } from './my-parties/my-parties.component';


const routes: Routes = [{path: '', component: PublicComponent},
                        { path: 'parties', component: MyPartiesComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class publicRoutingModule {
}
