import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Pokemon } from '../pokemon';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit{

  // {..."a".."ab..."abz".."ab"..."abc"........}
  searchItems = new Subject<string>();
  //On fait correspondre ce flux de données en string à nos données objet qu'on veut récupérer
  // {...pokemonList(a)..pokemonList(ab)...pokemonList(abz)..pokemonList(ab)...pokemonList(abc)........}
  pokemons$: Observable<Pokemon[]> | undefined= undefined;

  constructor(private router: Router, private pokemonService: PokemonService){}

  ngOnInit(): void {

    // Au lieu de faire ça, avec une liste de pokemons en attribut:
    // this.pokemons$?.subscribe(pokemons => this.pokemons = pokemons);
    // le pipe async dans le template nous permet d'éviter ce subscribe

    this.pokemons$=this.searchItems.pipe(

      // {...."ab"..."abz"."ab"...."abc"......}
      debounceTime(300),
      // {......"ab"...."ab"...."abc"......}
      distinctUntilChanged(),
      // {......"ab"..........."abc"......}
      switchMap((term)=>this.pokemonService.searchPokemonList(term))
      // {.....pokemonList(ab)............pokemonList(abc)......}
    );
  }

  search(term: string){
    this.searchItems.next(term);
  }

  goToDetail(pokemon: Pokemon){
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
