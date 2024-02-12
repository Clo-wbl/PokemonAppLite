import { Routes } from "@angular/router";
import { PokemonService } from "./pokemon.service";

export const pokemonRoutes: Routes = [
  {
    path: '',
    providers: [PokemonService],
    children: [
      {
        path: 'edit/pokemon/:id',
        loadComponent: () => import('./edit-pokemon/edit-pokemon.component').then(module => module.EditPokemonComponent)
      },
      {
        path: 'pokemon/add',
        title: 'Add pokemon',
        loadComponent: () => import('./add-pokemon/add-pokemon.component').then(module => module.AddPokemonComponent)
      },
      {
        path: "pokemons",
        title: 'Pokedex',
        loadComponent: () => import('./pokemon-list/pokemon-list.component').then(module => module.PokemonListComponent)
      },
      {
        path: 'pokemon/:id',
        loadComponent: () => import('./pokemon-details/pokemon-details.component').then(module => module.PokemonDetailsComponent)
      }]
  }
];