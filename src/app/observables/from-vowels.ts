import { Observable } from "rxjs";

export function fromVowels(): Observable<Array<string>> {
  return new Observable(observer => {
    // Produce data
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Emit value
    observer.next(vowels);
   
    // Emit complete notification
    observer.complete();
  });
}