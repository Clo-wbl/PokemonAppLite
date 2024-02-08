//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';

//Material
import { MatCardModule } from '@angular/material/card'; 

//Components
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

//Pipes
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

//Services
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailsComponent,
    PokemonTypeColorPipe,
    PokemonFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule,
    MatCardModule,
  ],
  providers: [PokemonService]
})
export class PokemonModule {

  constructor() { }

}
