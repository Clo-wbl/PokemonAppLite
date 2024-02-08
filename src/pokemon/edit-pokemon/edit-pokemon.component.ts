import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="flex justify-center ">Editer {{pokemon?.name}}</h2>
    <p *ngIf="pokemon" class="flex justify-center " >
      <img [src]="pokemon.picture">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
})
export class EditPokemonComponent implements OnInit {

  pokemon?: Pokemon;

  //activated route parce qu'on a besoin de l'id du pokemon courant
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    } else {
      this.pokemon = undefined;
    }
  }

}
