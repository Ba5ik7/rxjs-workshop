import { Component } from '@angular/core';

@Component({
  selector: 'app-hot-vs-cold',
  templateUrl: './hot-vs-cold.component.html'
})
export class HotVsColdComponent {

  code: string = `
  const Rx = require('rxjs');

  const Observable = Rx.Observable;
  
  let starts = 0;
  
  const cold = new Observable(observer => {
    starts++; // side effect to count starts
    const id = setTimeout(() => {
      observer.next('hi');
      observer.complete();
    }, 500);
    return () => clearTimeout();
  });
  
  const hot = cold.share();
  
  console.log('subscribing to 'cold' twice:');
  cold.subscribe(x => console.log('next', x));
  console.log('starts:', starts);
  cold.subscribe(x => console.log('next', x));
  console.log('starts:', starts);
  
  // reset count
  starts = 0;
  
  console.log('subscribing to 'hot' twice:');
  hot.subscribe(x => console.log('next', x));
  console.log('starts:', starts);
  hot.subscribe(x => console.log('next', x));
  console.log('starts:', starts);`;

  constructor() { }

  runDemo(): void {
  }

}
