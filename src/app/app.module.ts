import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DeclareVarDirective } from './declare-var.directive';
import { SpinnerComponent } from './spinner/spinner.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { TimerComponent } from './timer/timer.component';
import { RandomNumberComponent } from './random-number/random-number.component';
import { VowelsComponent } from './vowels/vowels.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { NavComponent } from './nav/nav.component';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [ 
    AppComponent, 
    NavComponent,
    HelloComponent, 
    GeolocationComponent,
    TimerComponent,
    RandomNumberComponent,
    VowelsComponent,
    PokemonComponent,
    SpinnerComponent,
    DeclareVarDirective ],
  providers: [httpInterceptorProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
