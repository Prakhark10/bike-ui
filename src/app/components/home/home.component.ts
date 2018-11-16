import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service'; //import
import { FormGroup, FormControl, Validators } from '@angular/forms'; //import
import { throwError } from 'rxjs';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[]=[            //
    'Model 101',  
    'Model 102',
    'Model 103'
  ];
  bikeform: FormGroup;
  validMessage: string="";      //

  constructor(private bikeService: BikeService) { } //add parameter to constructor

  ngOnInit() //define the entire function
  {
    this.bikeform = new FormGroup
    ({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration() //what happens after submission
  {
    if(this.bikeform.valid)
    {
      this.validMessage="Registration Successfull. Thank You!";
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe
      (
        data=>
        {
          this.bikeform.reset();
          return true;
        },
        error=> 
        {
          //return Observable.throw(error);
          return throwError(error);
        }
      )
    }
    else
    {
      this.validMessage="Please fill complete form.";
    }
  }

}
