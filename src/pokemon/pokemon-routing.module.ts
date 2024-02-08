import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const routes: Routes = [
  { 
    path: 'edit/pokemon/:id', 
    component: EditPokemonComponent
  },
  {
    path : "pokemons",
    component : PokemonListComponent
  },
  { 
    path: 'pokemon/:id', 
    component: PokemonDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PokemonRoutingModule { }
