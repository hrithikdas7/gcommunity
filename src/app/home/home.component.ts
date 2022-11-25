import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
individualDetails:any=[]
  constructor(public apiservice:ServiceService) { }

  ngOnInit(): void {
    this.apiservice.getDetails()
    .subscribe((result)=>{
      this.individualDetails=result
      console.log(this.individualDetails);
      
    })
  }

}
