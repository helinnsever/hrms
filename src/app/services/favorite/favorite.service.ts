import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Favorites } from 'src/app/models/favorite/favorites';
import { JobAdvertisement } from 'src/app/models/job-advertisement/job-advertisement';
import { FavoriteItem } from 'src/app/models/state/favoriteItem';
import * as AllFavoriteActions from "../../store/actions/favorite-action";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/models/candicated/candidate/candidate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  apiUrl=""
  favorites: FavoriteItem[] = []
  constructor( private toastrService:ToastrService,
    private store: Store<any>,
    private httpClient: HttpClient

    ) { }
  

  
    
  getFavorite() {
    this.store.select("favoriteReducer").subscribe(state => this.favorites = state)
  }


  // getFavorite(): FavoriteItem[]{
  //   return Favorites;
  // }

  // addToFavorite(jobAdvertisement: JobAdvertisement){
  //   let item = Favorites.find(f => f.jobAdvertisement.id === jobAdvertisement.id)

  //   if (!item) {  
  //     let favorite: FavoriteItem = { jobAdvertisement: jobAdvertisement}
  //     Favorites.push(favorite)
  //    this.toastrService.success("Favorilere eklendi", jobAdvertisement.employer.companyName)
  //   } else {
  //    this.toastrService.error("Zaten eklendi", jobAdvertisement.employer.companyName)
  //    }
  //  }

  // removeFromFavorite(jobAdvertisement:JobAdvertisement){
  //   let item = Favorites.find(f=>f.jobAdvertisement.id===jobAdvertisement.id)
  //   if(item){
  //     this.store.dispatch(new AllFavoriteActions.RemoveFromFavorite(jobAdvertisement))
  //     this.toastrService.success("Favoriler'den çıkarıldı", jobAdvertisement.employer.companyName)
  //   }else{
  //     this.toastrService.error("Daha önce sildiniz", jobAdvertisement.employer.companyName)
  //   }
  //  }
}
