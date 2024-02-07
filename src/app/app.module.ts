import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonModule } from '../pokemon/pokemon.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Seulement pour le lazy loading --> on déclare les routes directement ici, et on ne charge le composant que si on en a besoin
/*export const appRoutes: Route[] = [
    {
      path : 'pokemons',
      loadChildren: () => import('../pokemon/pokemon.module').then(m => m.PokemonModule),
    }
];*/

export const publicRoutes : string[] = [
    '/login',
    '/reset-password'
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    PokemonModule
  ],
  bootstrap : [
    AppComponent
  ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
