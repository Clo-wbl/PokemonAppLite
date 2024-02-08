//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { FormsModule } from '@angular/forms';

//Material
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

//Components
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

//Pipes
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

//Services
import { PokemonService } from './pokemon.service';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailsComponent,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
  providers: [PokemonService]
})
export class PokemonModule {

  constructor() { }

}
