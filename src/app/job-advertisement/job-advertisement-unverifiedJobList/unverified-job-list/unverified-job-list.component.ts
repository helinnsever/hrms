import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement/job-advertisement.service';

@Component({
  selector: 'app-unverified-job-list',
  templateUrl: './unverified-job-list.component.html',
  styleUrls: ['./unverified-job-list.component.css']
})
export class UnverifiedJobListComponent implements OnInit {

  unverifiedJobAdvertisements: JobAdvertisement[]=[]
  page: number = 1;
  itemsPerPage:number=10;
  constructor(private jobAdvertisementService: JobAdvertisementService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getActiveUnverifiedJobAdvertisement();
  }

  getActiveUnverifiedJobAdvertisement(){
    this.jobAdvertisementService.getUnverifiedJobList(1).subscribe((data:any)=>{
      this.unverifiedJobAdvertisements=data.data;
      console.log(data.data)
  })
  }

  changeVerification(jobAdvertisement: JobAdvertisement) {
    this.jobAdvertisementService.changeVerificationOfJob(jobAdvertisement).subscribe((response:any)=>{
      this.toastrService.success("Verification changed successfully.")
     
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

 

}
