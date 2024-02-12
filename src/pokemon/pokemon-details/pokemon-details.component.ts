import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    LoaderComponent,
    DatePipe,
    PokemonTypeColorPipe,
  ],
})
export class PokemonDetailsComponent implements OnInit {

  pokemonList: Pokemon[] = [];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,
    private title: Title) { }

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => {
          this.pokemon = pokemon;
          this.initTitle(pokemon);
        });
    }
  }

  initTitle(pokemon: Pokemon | undefined) {
    if (!pokemon) {
      this.title.setTitle('Pokemon not found');
      return;
    } else if (pokemon.name) {
      this.title.setTitle(pokemon.name)
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }

  deletePokemon(pokemon: Pokemon) {
    if (pokemon.id) {
      this.pokemonService.deletePokemonById(pokemon.id)
        .subscribe(() => this.goToPokemonList());
    }
  }

}
