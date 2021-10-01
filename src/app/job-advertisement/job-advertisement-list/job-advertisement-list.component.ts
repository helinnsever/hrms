import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement/job-advertisement.service';
import { Store } from '@ngrx/store';
import * as AllFavoriteActions from "../../store/actions/favorite-action";
import { FavoriteItem } from 'src/app/models/state/favoriteItem';
import { FavoriteService } from 'src/app/services/favorite/favorite.service';
import { Favorites } from 'src/app/models/favorite/favorites';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-job-advertisement-list',
  templateUrl: './job-advertisement-list.component.html',
  styleUrls: ['./job-advertisement-list.component.css']
})
export class JobAdvertisementListComponent implements OnInit {

  jobAdvertisements: JobAdvertisement[] = []
  page: number = 1;
  itemsPerPage: number = 10;
  filterText: String = "";
  favoriteItem: FavoriteItem
  user:any;
  constructor(private jobAdvertisementService: JobAdvertisementService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<any>,
    private favoriteService: FavoriteService,
    private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getActiveJobAdvertisementsByEmployer(params["employerId"])
    })
    this.getActiveJobAdvertisement();

    this.getUserId();
  }

  getActiveJobAdvertisement() {
    this.jobAdvertisementService.getActiveJobAdvertisements().subscribe((data: any) => {
      this.jobAdvertisements = data.data;
      console.log(data.data)

    })
  }

  changeStatus(jobAdvertisement: JobAdvertisement) {

    this.jobAdvertisementService.closeJobAdvertisement(jobAdvertisement).subscribe((data: any) => {
      this.jobAdvertisements = data.data
      this.toastrService.success("İlan pasif hale getirildi")
      setTimeout(() => window.location.reload(), 100);
    })
  }


  SortByCreatedDate() {
    this.jobAdvertisementService.getActiveJobAdvertisementsByDate(1).subscribe((data: any) => {
      this.jobAdvertisements = data.data
      console.log(this.jobAdvertisements)
    })

  }

  getActiveJobAdvertisementsByEmployer(employerId: number) {
    return this.jobAdvertisementService.getActiveJobAdvertisementsByCompany(employerId).subscribe((data: any) => {
      this.jobAdvertisements = data.data
      console.log(data.data);


    });
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

  changeVerificationToUnverified(jobAdvertisement: JobAdvertisement) {
    this.jobAdvertisementService.makeUnverified(jobAdvertisement).subscribe((response: any) => {
      this.toastrService.success("Verification changed successfully.")

    })
  }

  // addToFavorite(jobAdvertisement: JobAdvertisement) {

  //   this.store.dispatch(new AllFavoriteActions.AddToFavorite(jobAdvertisement))
  //   this.toastrService.success('Favorilere başarıyla eklediniz.')
  // }

  addToFavorite(jobAdvertisement: JobAdvertisement) {
    console.log("calişti")
    this.candidateService.addToFavorites(this.getUserId(),jobAdvertisement).subscribe((response: any) => {
      
        console.log("calişti")
          
         this.toastrService.success(response.message, 'Favorilere eklendi');
       },
       (responseError) => {
         this.toastrService.error(
           JSON.stringify(responseError.error.data.errors),
           'İki kere Favorilere eklenemez');

    })
      
 
  }

  getUserId(): number {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.data.id;
  }

  changeVerification(jobAdvertisement: JobAdvertisement) {
    this.jobAdvertisementService.changeVerificationOfJob(jobAdvertisement).subscribe((response:any)=>{
      this.toastrService.success("Verification changed successfully.")
     
    })
  }

}


