import { Action } from "@ngrx/store";
import { JobAdvertisement } from "src/app/models/job-advertisement/job-advertisement";

 
export enum FavoriteActionTypes{
    ADD_TO_FAVORITE="ADD_TO_FAVORITE",
    REMOVE_FROM_FAVORITE="REMOVE_FROM_FAVORITE"
}

export class AddToFavorite implements Action{

     type: string = FavoriteActionTypes.ADD_TO_FAVORITE;
    constructor(public payload:JobAdvertisement){
     }
}

export class RemoveFromFavorite implements Action{
    type: string = FavoriteActionTypes.REMOVE_FROM_FAVORITE;
    constructor(public payload:JobAdvertisement){
    }
}

export type FavoriteActions = AddToFavorite | RemoveFromFavorite;