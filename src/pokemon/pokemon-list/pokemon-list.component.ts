import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { MatFabButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { NgFor, DatePipe } from '@angular/common';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    standalone: true,
    imports: [
        SearchPokemonComponent,
        NgFor,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatFabButton,
        RouterLink,
        RouterLinkActive,
        DatePipe,
        PokemonTypeColorPipe,
    ],
})
export class PokemonListComponent implements OnInit {

  pokemonList: Pokemon[] = [];

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemonList()
    .subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }

}
