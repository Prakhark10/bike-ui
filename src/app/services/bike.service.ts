import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //responsible for making calls out 
import { Observable } from 'rxjs/Observable'; //the above calls will return a observable, with info from server

//to tell that all the calls are with application/json 
const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type':'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) //add the parameter to constructor
  { 
  }

  getBikes()
  {
    return this.http.get('/server/api/v1/bikes'); // will return from this url
  }

  getBike(id: number) //to get a particular bike
  {
    return this.http.get('/server/api/v1/bikes' + id);
  }

  createBikeRegistration(bike) //to create a bike
  {
    let body = JSON.stringify(bike); //to pass as the request body
    return this.http.post('/server/api/v1/bikes', body, httpOptions);
  }

}
