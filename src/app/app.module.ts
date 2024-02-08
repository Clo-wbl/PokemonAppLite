import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonModule } from '../pokemon/pokemon.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

// Seulement pour le lazy loading --> on déclare les routes directement ici, et on ne charge le composant que si on en a besoin
export const appRoutes: Route[] = [
    /*{
      path : 'pokemons',

      // Seulement pour le lazy loading --> on déclare les routes directement ici, et on ne charge le composant que si on en a besoin
      loadChildren: () => import('../pokemon/pokemon.module').then(m => m.PokemonModule),
    }*/
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

export const publicRoutes : string[] = [
    '/login',
    '/reset-password'
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    PokemonModule,
    RouterModule.forRoot(appRoutes),
  ],
  bootstrap : [
    AppComponent
  ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
