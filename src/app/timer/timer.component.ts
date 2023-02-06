import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import {
  fromEvent,
  interval,
  Observable,
  SchedulerLike,
} from 'rxjs';

import {
  switchMap,
  takeUntil,
  tap,
  merge,
  takeWhile,
} from 'rxjs/operators';

  // We have been creating our own observables in the other routes of this demo so that we can learn how observables work. However, we would hardly ever need to create our own observalbes as RxJs provides observation creation functions for most use cases. This component illustrates using the RxJS library and its operators to create a Pomodoro Timer app.

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @ViewChild('startBtn', { static: true }) startBtn: ElementRef;
  @ViewChild('pauseBtn', { static: true }) stopBtn: ElementRef;
  @ViewChild('resetBtn', { static: true }) resetBtn: ElementRef;

  interval$ = interval(1000);
  start$: Observable<any>;
  stop$: Observable<any>;
  reset$: Observable<any>|SchedulerLike;

  timer = 60;
  elapsedTime = this.timer;

  ngOnInit() {
    this.stop$ = fromEvent(this.stopBtn.nativeElement, 'click');

    this.reset$ = fromEvent(this.resetBtn.nativeElement, 'click').pipe(
      tap(() => (this.elapsedTime = this.timer))
    );

    this.start$ = fromEvent(this.startBtn.nativeElement, 'click');

    this.start$
      .pipe(
        merge(this.reset$),
        switchMap((val) =>
          this.interval$.pipe(
            takeUntil(this.stop$),
            takeWhile(() => this.elapsedTime > 0)
          )
        )
      )
      .subscribe(() => (this.elapsedTime -= 1));
  }
}