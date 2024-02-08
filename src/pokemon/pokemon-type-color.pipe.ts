import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;

    switch(type) {
      case 'Feu':
        color = 'red lighten-1';
        break;
      case 'Eau':
        color = 'blue lighten-1';
        break;
      case 'Plante':
        color = 'green lighten-1';
        break;
      case 'Electrik':
        color = 'yellow lighten-1';
        break;
      case 'Glace':
        color = 'cyan lighten-1';
        break;
      default:
        color = 'grey lighten-1'; // Couleur par défaut pour les types inconnus
        break;
    }
    return color;
  }

}
