import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TodosComponent } from './todos/todos.component';
import { NaviComponent } from './navi/navi.component';
import { AlbumComponent } from './album/album.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxPaginationModule} from 'ngx-pagination';
import { FavoriteDetailComponent } from './favorite-detail/favorite-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TodosComponent,
    NaviComponent,
    AlbumComponent,
    FavoriteComponent,
    FavoriteDetailComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"}),
    NgxPaginationModule,
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
