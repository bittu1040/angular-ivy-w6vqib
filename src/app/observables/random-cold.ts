import { Observable } from "rxjs";

export function randomCold(): Observable<number> {

  return new Observable(observer => {
    const random = +Math.random().toFixed(5);
    observer.next(random);
    observer.complete();
  });
}