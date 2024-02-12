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
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './login/login.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

// Seulement pour le lazy loading --> on déclare les routes directement ici, et on ne charge le composant que si on en a besoin
export const appRoutes: Route[] = [
  /*{
    path : 'pokemons',

    // Seulement pour le lazy loading --> on déclare les routes directement ici, et on ne charge le composant que si on en a besoin
    loadChildren: () => import('../pokemon/pokemon.module').then(m => m.PokemonModule),
  }*/
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

/*export const publicRoutes : string[] = [
    '/login',
    '/reset-password'
];*/

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    BrowserAnimationsModule,
    FormsModule,
    PokemonModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
