import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { randomCold } from '../observables/random-cold';
import { randomHot } from '../observables/random-hot';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css']
})
export class RandomNumberComponent {
  randomNumberCold$ = randomCold();
  randomNumberHot$ = randomHot();
}