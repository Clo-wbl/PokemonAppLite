import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthGuard } from './app/auth.guard';
import { provideRouter, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { InMemoryDataService } from './app/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pokemon/pokemon.routes').then(module => module.pokemonRoutes)
    },
    {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('./app/login/login.component').then(module => module.LoginComponent)
    },
    {
        path: '**',
        title: 'Page not found',
        loadComponent: () => import('./app/page-not-found/page-not-found.component').then(module => module.PageNotFoundComponent)
    }
];

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(CommonModule, BrowserModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }), FormsModule, MatFormFieldModule, MatCardModule, MatInputModule),
        provideAnimationsAsync(),
        provideAnimations(),
        provideRouter(appRoutes)
    ]
})
  .catch(err => console.error(err));
