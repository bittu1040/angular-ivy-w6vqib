import { Component } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';
import { LoaderService } from './loader-service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loading$ = this.loaderService.httpRequestProgress$.pipe(
    observeOn(asapScheduler)
  );

  constructor(public loaderService: LoaderService) {}
}
