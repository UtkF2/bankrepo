import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/service/myservice.service';
import {employee} from '../employeemodel'
interface gender{
  value:string;
  viewvalue:string;
}
interface userposition{
  value:string;
  viewvalue:string;
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public empy:employee={} as employee;
 usergender:gender[] =[
  
    {value:'male',viewvalue:'male'},
    {value:'female',viewvalue:'female'}
  
 ]

 position:userposition[] =[
  
  {value:'Angular developer',viewvalue:'Angular developer'},
  {value:'React developer',viewvalue:'React developer'},
  {value:'java developer',viewvalue:'java developer'},

]
  constructor(private employeeservice:MyserviceService,private router:Router) { }

  ngOnInit(): void {
  }
   add(){
    this.employeeservice.createuser(this.empy).subscribe((data:employee)=>{
   //   console.log(data)
      alert("data added sucessfully")
    this.router.navigate(['/view'])
    },
    err=>{
      alert("something went wrong")
      this.router.navigate(['/'])
    })
   }
}
