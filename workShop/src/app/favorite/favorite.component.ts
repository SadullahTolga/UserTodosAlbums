import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../album/album';
import { Favorite } from './favorite';
import { FavoriteServiceService } from './favorite-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favorites:Favorite[]=[]
  constructor(private favoriteService:FavoriteServiceService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.favorites=this.favoriteService.getFavorite()
  }

  removeFromFavorite(album:Album){
    this.favoriteService.removeFromFavorite(album)
    this.toastrService.error("Silindi",album.title)
  }
}
