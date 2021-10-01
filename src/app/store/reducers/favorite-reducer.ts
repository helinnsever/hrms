import { FavoriteItem } from "src/app/models/state/favoriteItem";
import { FavoriteActions, FavoriteActionTypes } from "../actions/favorite-action";

export let initialState: FavoriteItem[] = [];

export function favoriteReducer(state = initialState, action: FavoriteActions) {
  switch (action.type) {
    case FavoriteActionTypes.ADD_TO_FAVORITE:

      let item = state.find((f) => f.jobAdvertisement.id === action.payload.id);
       if (!item) {
        let favoriteItem: FavoriteItem = { jobAdvertisement: action.payload };
        console.log(state);
         return [...state, favoriteItem];
      } else {
          
        return [...state]
      }

    case FavoriteActionTypes.REMOVE_FROM_FAVORITE:
      return state.filter(f => f.jobAdvertisement.id !== action.payload.id)

    default:
      return state;
  }
}
