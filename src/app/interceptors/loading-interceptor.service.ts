import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { debounce, debounceTime, delay, finalize } from 'rxjs/operators';
import { LoaderService } from '../loader-service';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.incrementRequestCount();

    return next.handle(req).pipe(
      debounce(() => interval(1000)),
      finalize(() => {
        this.loaderService.decrementRequestCount();
      })
    );
  }
  constructor(private loaderService: LoaderService) { }

}