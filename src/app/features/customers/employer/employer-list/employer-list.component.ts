import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/employer/employer';
import { BaseListResponse } from 'src/app/models/listResponse/listResponse';
import { EmployerService } from 'src/app/services/employer/employer.service';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent implements OnInit {

  employers: Employer[]=[]
  employer:Employer
  page: number = 1;
  itemsPerPage:number=10;
  constructor(private employerService : EmployerService,
    private toastrService: ToastrService) { }
  
  ngOnInit(): void {
    this.getEmployers();
  }

  getEmployers(){
    this.employerService.getEmployer().subscribe((data:any)=>{
      this.employers=data.data;
      console.log(data.data)
    
  })
  }

  checkUser(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

  checkSystemEmployee(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let value = user.message;
      if (value.includes("systemEmployee")) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  ApplyChanges(employer:Employer) {
    this.employerService.ApplyChanges(employer).subscribe((response: any) => {
      this.toastrService.success("Changes are applied successfully")

    })
  }

}
