import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement/job-advertisement.service';
  @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobAdvertisements: JobAdvertisement[] = []
  constructor( 
    private jobAdvertisementService: JobAdvertisementService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
     this.getActiveJobAdvertisement();
   }

   getActiveJobAdvertisement() {
    this.jobAdvertisementService.getActiveJobAdvertisements().subscribe((data: any) => {
      this.jobAdvertisements = data.data;
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

  checkEmployer(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let value = user.message;
      if (value.includes("employer")) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  checkCandidate(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let value = user.message;
      if (value.includes("candidate")) {
        return true;
      } else {
        return false;
      }
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