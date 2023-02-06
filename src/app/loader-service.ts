import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";

export interface HttpProgress {
  inProgress: boolean;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _httpRequestCount = 0;
  private httpRequestSubject = new ReplaySubject<any>();
  httpRequestProgress$ = this.httpRequestSubject.asObservable();

  get inProgress() {
    return this._httpRequestCount > 0;
  }

  decrementRequestCount() {
    this._httpRequestCount--;
    this.httpRequestSubject.next(this.inProgress);
  }

  incrementRequestCount() {
    this._httpRequestCount++;
    this.httpRequestSubject.next(true);
  }

}