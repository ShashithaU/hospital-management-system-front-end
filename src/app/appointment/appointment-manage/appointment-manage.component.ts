import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-appointment-manage',
  standalone: true,
  imports: [NgFor],
  templateUrl: './appointment-manage.component.html',
  styleUrl: './appointment-manage.component.css'
})
export class AppointmentManageComponent {

 public appointmentsList:any = [];
  constructor(private http:HttpClient){
    this.loadtable();
    console.log(this.appointmentsList);
  }
  
loadtable(){
  this.http.get('http://localhost:8080/appointment/view-all-appointments').subscribe((data)=>{
    this.appointmentsList=data;
});



  }


}


