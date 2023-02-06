import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { fromVowels } from '../observables/from-vowels';

@Component({
  selector: 'app-vowels',
  templateUrl: './vowels.component.html',
  styleUrls: ['./vowels.component.css']
})
export class VowelsComponent {
  rxjsVowels$ = from(['a', 'e', 'i', 'o', 'u']);

  ourVowels$ = fromVowels();

  // ngOnInit() {
  //   this.rxjsVowels$.subscribe(console.log);
  // }

  

}