import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/employer/employer';
import { EmployerService } from 'src/app/services/employer/employer.service';

@Component({
  selector: 'app-employer-info',
  templateUrl: './employer-info.component.html',
  styleUrls: ['./employer-info.component.css']
})
export class EmployerInfoComponent implements OnInit {


  user:any;
  employer: Employer;
  constructor(private employerService: EmployerService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getUserId();
    this.getEmployer();
  }

  getUserId(): number {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.data.id;
  }

  getEmployer() {
    this.employerService.getEmployerById(this.getUserId()).subscribe((data: any) => {
      this.employer = data.data;
      console.log(data.data)

    })
  }



}
