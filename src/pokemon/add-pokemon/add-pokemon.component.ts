import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';

@Component({
    selector: 'app-add-pokemon',
    template: `
    <div class="flex justify-center font-sans text-xl" style="font-family:'Apple Color Emoji'">Ajouter un pokémon</div>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
    standalone: true,
    imports: [PokemonFormComponent],
})
export class AddPokemonComponent {

  pokemon: Pokemon | undefined = undefined;

  ngOnInit() {
    this.pokemon = new Pokemon();
  }

}
