import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';//will be used in service class, allows us to talk to server via http calls
import { ReactiveFormsModule } from '@angular/forms';//to use reactive forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BikeService } from './services/bike.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';//import bike services

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  //imported above and add to imports
    ReactiveFormsModule //imported above and add to imports
  ],
  providers: [BikeService], //add bike service to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
