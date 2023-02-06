import { Observable } from "rxjs";

const random = +Math.random().toFixed(5);

export function randomHot(): Observable<number> {
  return new Observable(observer => {
    observer.next(random);
    observer.complete();
  });
}