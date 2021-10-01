import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Employer } from 'src/app/models/employer/employer';
import { Favorite } from 'src/app/models/favorite/favorite';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { Position } from 'src/app/models/position/position';
import { FavoriteItem } from 'src/app/models/state/favoriteItem';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import * as AllFavoriteActions from "../../store/actions/favorite-action"


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favorites: JobAdvertisement[] = []
  user:any;

  constructor(

    private toastrService: ToastrService, private store: Store<any>,
    private candidateService: CandidateService,
    private router: Router
    

  ) { }

  ngOnInit(): void {
    this.getFavorite();
    this.getUserId();
    this.getFavoriteJobAdvertisements();
    
  }

  removeFromFavorite(jobAdvertisement: JobAdvertisement) {
    this.candidateService.removeFromFavorites(jobAdvertisement,this.getUserId()).subscribe((response: any) => 
    
    {this.router.navigate(["favorites"])
      this.toastrService.success("Favorilerden kaldırıldı")
      setTimeout(() => window.location.reload(), 1400);

      
     })
  }

 
  // removeFromFavorite(jobAdvertisement: JobAdvertisement) {
  //   this.store.dispatch(new AllFavoriteActions.RemoveFromFavorite(jobAdvertisement))
  //   this.toastrService.error("Silindi", jobAdvertisement.employer.companyName)
  // }

  getFavorite() {
    this.store.select("favoriteReducer").subscribe(state => this.favorites = state)
  }

  getFavoriteJobAdvertisements(){
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
        
      this.favorites=response.data.favoriteJobAdvertisements
          console.log("Favoriler",this.favorites)   
          
      });
     
  }



  getUserId(): number {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user.data.id;
  }
}




