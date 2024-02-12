import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { NgIf } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="flex justify-center ">Editer {{pokemon?.name}}</h2>
    <p *ngIf="pokemon" class="flex justify-center " >
      <img [src]="pokemon.picture">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  standalone: true,
  imports: [NgIf, PokemonFormComponent],
})
export class EditPokemonComponent implements OnInit {

  pokemon?: Pokemon;

  //activated route parce qu'on a besoin de l'id du pokemon courant
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private title: Title
  ) { }

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => 
          {
            this.pokemon = pokemon;
            this.initTitle(pokemon);
          });
    } else {
      this.pokemon = undefined;
    }
  }

  initTitle(pokemon: Pokemon | undefined) {
    if (!pokemon) {
      this.title.setTitle('Pokemon not found');
      return;
    } else if(pokemon.name) {
      this.title.setTitle(pokemon.name)
    }
  }

}
