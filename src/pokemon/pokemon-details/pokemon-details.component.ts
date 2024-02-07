import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
})
export class PokemonDetailsComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

}
