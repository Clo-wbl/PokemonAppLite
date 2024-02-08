import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let bckgnd: string;
  
    switch (type) {
      case 'Feu':
        bckgnd = 'bg-red-500';
        break;
      case 'Eau':
        bckgnd = 'bg-blue-500';
        break;
      case 'Plante':
        bckgnd = 'bg-green-500';
        break;
      case 'Insecte':
        bckgnd = 'bg-brown-500';
        break;
      case 'Normal':
        bckgnd = 'bg-gray-300';
        break;
      case 'Vol':
        bckgnd = 'bg-blue-300';
        break;
      case 'Poison':
        bckgnd = 'bg-purple-100';
        break;
      case 'Fée':
        bckgnd = 'bg-pink-100';
        break;
      case 'Psy':
        bckgnd = 'bg-purple-900';
        break;
      case 'Electrik':
        bckgnd = 'bg-lime-200';
        break;
      case 'Combat':
        bckgnd = 'bg-orange-500';
        break;
      default:
        bckgnd = 'bg-gray-500';
        break;
    }
  
    return `inline-flex items-center rounded-md ${bckgnd} px-2 py-1 text-xs font-medium text-white-600 ring-1 ring-inset ring-gray-500/10 mr-2`; // Add 'text-white' class to make text white for better contrast
  }

}
