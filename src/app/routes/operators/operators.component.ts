import { Component } from '@angular/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html'
})
export class OperatorsComponent {

  code: string = `
  const _ = require('lodash');
  const Rx = require('rxjs');
  const Observable = Rx.Observable;
  
  // The source will emit numbers: 0, 1, 2, 3 ... 9
  const source = Observable.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  
  // Use filter and map on source to
  // emit the values '1!'... '3!'... '5!'... '7!'... '9!'
  const result = source
    .filter(n => n % 2 === 1)
    .map(n => n + '!');
  
  // This code will test your resulting observable
  result.subscribe({
    results: [],
    expected: ['1!', '3!', '5!', '7!', '9!'],
    next(x) { this.results.push(x); },
    complete() {
      const results = this.results;
      const expected = this.expected;
      console.assert(_.isEqual(results, expected), '\${results} should be \${expected}');
      console.log('SUCCESS!', results);
    }
  });`;

  constructor() { }

  runDemo(): void {
  }

}
