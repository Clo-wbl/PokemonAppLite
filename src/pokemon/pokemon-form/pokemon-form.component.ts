import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon'
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon?: Pokemon;

  types: string[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean {
    let typeBool: boolean | undefined = false;
    if (this.pokemon && this.pokemon.types) {
      typeBool = this.pokemon.types.includes(type);
    }
    return typeBool;
  }

  /**
   * 
   * @param $event : événement de click, cocher décocher une case
   * @param type 
   * @returns 
   */
  selectType(event: boolean, type: string) {
    const isChecked: boolean = event;

    if (isChecked) {
      this.pokemon?.types?.push(type);
    } else {
      const index = this.pokemon?.types?.indexOf(type);
      if (index) this.pokemon?.types?.splice(index, 1);
    }
  }

  /**
   * 
   * @param type entre 1 et 3
   */
  isTypesValid(type: string): boolean {
    if (this.pokemon) {
      if (this.pokemon.types) {

        // Si le pokemon n'a qu'un seul type et qu'on intéragit avec, on veut pas qu'il soit enlevé
        if (this.pokemon.types.length == 1 && this.hasType(type)) { 
          return false;
          
        // Si le pokemon a déjà 3 types et qu'il intéragit avec un 4ème différent, on veut pas qu'il ait trois types
        } else if (this.pokemon.types.length > 2 && !this.hasType(type)) { 
          return false;
        }

      }
    }
    return true;
  }

  onSubmit() {
    console.log('Submit form !')
    if (this.pokemon) {
      this.router.navigate(['/pokemon', this.pokemon.id]);
    }
  }

}
