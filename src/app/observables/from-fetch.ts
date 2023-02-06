import { Observable } from "rxjs";

export function fromFetch<T>(url: string):Observable<T> {
  return new Observable(observer => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        observer.next(data);
        observer.complete();
      })
      .catch(err => observer.error(err))
  });
}