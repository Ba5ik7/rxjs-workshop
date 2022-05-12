import { Component } from '@angular/core';

@Component({
  selector: 'app-sync-vs-async',
  templateUrl: './sync-vs-async.component.html'
})
export class SyncVsAsyncComponent {

  code: string = `
  var Rx = require('rxjs');
  var _ = require('lodash');

  var Observable = Rx.Observable;

  let sync = new Observable(observer => {

    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  });

  let async = new Observable(observer => {

    /*
      Below is a more advanced implementation that uses setInterval to schedule.
      Technically, you could just take what your synchronous observable above was
      doing and wrap it in a setTimeout
    */
    let values = [1, 2, 3];
    const id = setInterval(() => {
      observer.next(values.shift());
      if (values.length === 0) {
        // NOTE: Since complete() will call our teardown logic,
        // clearInterval will be called automatically!
        observer.complete();
      }
    });

    // Our teardown logic to kill the interval if there's an error, completion
    // or an unsubscribe.
    return () => clearInterval(id);
  });



  /// PAY NO ATTENTION TO THIS TEST CODE... or do... whatever.

  Observable.of(
    {
      name: 'sync',
      observable: sync,
      expected: ['before', 1, 2, 3, 'after']
    },
    {
      name: 'async',
      observable: async,
      expected: ['before', 'after', 1, 2, 3]
    }
  )
  .mergeMap(
    d => Observable.of('before')
      .merge(d.observable, Observable.of('after'))
      .toArray(),
    (d, arr) => ({ name: d.name, expected: d.expected, actual: arr })
  )
  .do(d => {
    console.assert(_.isEqual(d.expected, d.actual), 'expected ', d.actual, 'to equal', d.expected);
    console.log(d.name, 'success!', d.actual);
  })
  .subscribe();`;

  constructor() { }

  runDemo(): void {
  }

}
