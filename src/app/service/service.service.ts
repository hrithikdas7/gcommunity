import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public api:HttpClient) { }




//userdefined
// to make an api call
getDetails(){
  return this.api.get('http://localhost:3000/users')
}

//2. to get each user details
  
viewProfile(userId:any){
  return this.api.get('http://localhost:3000/users/'+userId)
 
}
}
