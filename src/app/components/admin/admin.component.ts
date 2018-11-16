import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service'; //import BikeService by going up in directory

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public bikes; // to store all bikes

  constructor(private bikeService : BikeService) { }//add parameter to constructor

  ngOnInit() 
  {
    this.getBikes(); //to call the getBikes() method defined below
  }

  //we create a method to get all bikes
  getBikes()
  {
    this.bikeService.getBikes().subscribe
    (
      data=> { this.bikes = data },
      err => console.error(err),
      ()=> console.log('bikes loaded')
    )
  }

}
