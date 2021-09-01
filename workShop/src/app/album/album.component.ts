import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FavoriteServiceService } from '../favorite/favorite-service.service';
import { AlbumService } from '../services/album.service';
import { Album } from './album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums: Album[] = []
  constructor(private albumService: AlbumService, private favoriteService: FavoriteServiceService,

    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAlbums();
    this.activatedRoute.params.subscribe(params => {
      if (params["userId"]) {
        this.getAlbumsByUserId(params["userId"])
      }
    })
  }
  getAlbums() {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data
    })

  }
  getAlbumsByUserId(userId: number) {
    this.albumService.getAlbumsByUserId(userId).subscribe(data => {
      this.albums = data
    })
  }
  addToFavorite(album: Album) {
    
    this.favoriteService.addToFavorite(album);

  }
}
