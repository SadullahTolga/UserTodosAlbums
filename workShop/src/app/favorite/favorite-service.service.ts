import { Injectable } from '@angular/core';
import { Album } from '../album/album';
import { Favorite } from './favorite';
import { ToastrService } from 'ngx-toastr';


import { Favorites } from './favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {

  constructor(private toastrService: ToastrService) { }

  getFavorite() {
    return Favorites;
  }
  addToFavorite(album: Album) {
    let item = Favorites.find((c) => c.album.id == album.id);

    if (item) {
      this.toastrService.error("Albüm sepette var!", album.title);

    } else {
      this.toastrService.success(" Ürün sepete eklendi !", album.title);
      let _favorite: Favorite = { album: album, quantity: 1 };
      Favorites.push(_favorite);

      console.log(_favorite)
    }



  }
  removeFromFavorite(album:Album){
    let item = Favorites.find(
      c=>c.album.id==album.id)
      if(item){
      Favorites.splice(Favorites.indexOf(item),1)}
      }
  }

