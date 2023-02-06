import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fromFetch } from './observables/from-fetch';

export interface Pokemon {
  sprites: {
    back_default: string;
    front_default: string;
  },
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  pikachu$ = this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/pikachu');

  bulbasaur$: Observable<Pokemon> = fromFetch<Pokemon>('https://pokeapi.co/api/v2/pokemon/bulbasaur');

}