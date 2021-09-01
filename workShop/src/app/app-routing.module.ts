import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { FavoriteComponent } from './favorite/favorite.component';



import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:TodosComponent},
  {path:"todos",component:TodosComponent},
  {path:"todos/users/:userId",component:TodosComponent},
  {path:"album",component:AlbumComponent},
  {path:"album/users/:userId",component:AlbumComponent},
  {path:"favorite",component:FavoriteComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
