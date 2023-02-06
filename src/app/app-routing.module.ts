import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RandomNumberComponent } from './random-number/random-number.component';
import { TimerComponent } from './timer/timer.component';
import { VowelsComponent } from './vowels/vowels.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'timer', component: TimerComponent },
      { path: 'geolocation', component: GeolocationComponent },
      { path: 'pokemon', component: PokemonComponent },
      { path: 'random-number', component: RandomNumberComponent },
      { path: 'vowels', component: VowelsComponent },
      { path: '', redirectTo: '/timer', pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }