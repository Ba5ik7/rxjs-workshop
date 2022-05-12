import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-easy-as-one-two-three',
  templateUrl: './easy-as-one-two-three.component.html'
})
export class EasyAsOneTwoThreeComponent {

  code = `
  const myObservable: Observable<number> = new Observable(observer => {
    console.log('subscribing');
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  });
  
  console.log('before subscription');
  
  myObservable.subscribe(
    x => console.log(x),
    err => console.error(err),
    () => console.info('done')
  );
  
  console.log('after subscription');`;


  constructor() { }

  runDemo(): void {
    const myObservable: Observable<number> = new Observable(observer => {
      console.log('subscribing');
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    console.log('before subscription');

    myObservable.subscribe(
      x => console.log(x),
      err => console.error(err, 'What'),
      () => console.info('done')
    );

    console.log('after subscription');
  }
}
