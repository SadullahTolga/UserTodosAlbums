import { Component, OnInit } from '@angular/core';
import { Favorite } from './favorite';
import { FavoriteServiceService } from './favorite-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favorites:Favorite[]=[]
  constructor(private favoriteService:FavoriteServiceService) { }

  ngOnInit(): void {
    this.favorites=this.favoriteService.getFavorite()
  }

}
