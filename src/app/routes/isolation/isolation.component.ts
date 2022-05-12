import { Component } from '@angular/core';

@Component({
  selector: 'app-isolation',
  templateUrl: './isolation.component.html'
})
export class IsolationComponent {

  code: string = `
  const Rx = require('rxjs');
  const Observable = Rx.Observable;
  
  const source = Observable.interval(100).take(10);
  
  const mapEverythingButFours = x => {
    if (x === 4) {
      throw new Error('fours are bad');
    }
    return x + '!';
  }
  
  // Use the above mapping function, mapEverythingButFours, to map all of the
  // values from source. In the event of an error in your mapping function, just
  // skip the value. Log the values out to console
  
  source.mergeMap(
    n => Observable.of(n)
      .map(mapEverythingButFours)
      .catch(err => Observable.empty())
  )
  .subscribe(
    x => console.log(x),
    err => console.error(err),
    () => console.info('done')
  );`;

  constructor() { }

  runDemo(): void {
  }

}
