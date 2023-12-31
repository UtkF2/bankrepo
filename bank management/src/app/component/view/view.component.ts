import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';
import {employee} from '../employeemodel'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public loading:boolean = false;
  public empy:employee={} as employee;
  myemployee:any;
  constructor(private employeeservice:MyserviceService) { }

  ngOnInit(): void {
    this.getmyuser();
  }

  getmyuser(){
    this.employeeservice.getuser().subscribe(res=>{
      setTimeout(()=>{
        this.myemployee = res;
         //console.log(res);
      },2000)
      setTimeout(()=>{
        this.loading=true;
         //console.log(res);
      },1500)
   
    })
  }

  deleteuser(user:any){
    if(confirm('Are you sure to delete?'))
    this.employeeservice.delete(user).subscribe(() =>{
   this.getmyuser();
  })
}


}
