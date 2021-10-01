import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employer } from 'src/app/models/employer/employer';
import { EmployerService } from 'src/app/services/employer/employer.service';

@Component({
  selector: 'app-navi-employer-info',
  templateUrl: './navi-employer-info.component.html',
  styleUrls: ['./navi-employer-info.component.css']
})
export class NaviEmployerInfoComponent implements OnInit {
  
  value:any;
  employeeLogged:boolean;
  employer:Employer;
  constructor(private router: Router,
    private employerService:EmployerService) { }

  ngOnInit(): void {
    this.getEmployerInfo();
  }

  signOut(){
    localStorage.clear()
    this.router.navigate(['home']);
  }

  getEmployerInfo():any{
    this.value = JSON.parse(localStorage.getItem('user'));
    if (this.value.message === "employer Logged in"){
      this.employerService.getEmployerById(this.value.data.id).subscribe((response: any)=>{
        this.employer = response.data;
      });
      this.employeeLogged = true;
    } else{
      this.employeeLogged = false;
    }
    return this.value.data;
      }
 
}
