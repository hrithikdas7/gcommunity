import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userId:any;
userDetails:any;
  constructor(public activatedRoute:ActivatedRoute, public services:ServiceService) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .subscribe(result=>{
      // console.log(result['id']);
      this.userId=result['id']
      
    })

    this.services.viewProfile(this.userId)
    .subscribe((result:any)=>{
      console.log(result);
      this.userDetails=result
    })

  }

}
