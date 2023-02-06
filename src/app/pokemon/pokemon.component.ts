import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, Pokemon } from '../data.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  bulbasaur$: Observable<Pokemon> = this.dataSerice.bulbasaur$;

  pikachu$: Observable<Pokemon> = this.dataSerice.pikachu$;

  constructor(private dataSerice: DataService) {}

  // In this component we use a data service to fetch data from an api using the observable creation function `fromFetch()` that we've written. Creating our own observables helps us understand how observables work. 
  
  // However, please note that in a real-life Angular projects we use HTTPClient to make http requests. HTTPClient uses the XHR WebAPI. It makes the xhr requests inside an observable subscription function. We can see the source code here: https://github.com/angular/angular/blob/8ebc946c0e7bf80d26ec8268acb4ff0af9e5c34a/packages/common/http/src/xhr.ts#L60 

  // Calling a http method such as get(), returns an observable instance. We need to subscribe to the observable to make the XHR request. The async pipe lets us subscribe from the component template and automatically unsubscribes from the observable.
}