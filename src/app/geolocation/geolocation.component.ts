import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { fromGeolocation } from '../observables/from-geolocation';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css'],
})
export class GeolocationComponent {
  location$: Observable<any> = fromGeolocation();

  myLocation$ = this.location$.pipe(
    catchError(error => of({
      error: {
        message: error.message
      }
    }))
  );
}


