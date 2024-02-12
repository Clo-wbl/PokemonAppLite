import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    template: `
    <div class='center'>
      <img src="https://imagetolink.com/ib/YSlw2AJZoP.jpg" style="height: 300px;"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `,
    styles: ``,
    standalone: true,
    imports: [RouterLink]
})
export class PageNotFoundComponent {

}