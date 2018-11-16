import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentRefresh } from '@angular/core/src/render3/instructions';
import { AdminComponent } from './components/admin/admin.component'; //
import { HomeComponent } from './components/home/home.component';   //
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';

const routes: Routes = [ //from top priority to low

  {
    path: '',              //add
    component: HomeComponent   //add
  },

  {
    path: 'admin/view/:id',
    component: ViewRegistrationComponent
  },

  {
    path: 'admin',              //add
    component: AdminComponent   //add
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
