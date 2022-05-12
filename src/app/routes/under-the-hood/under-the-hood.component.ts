import { Component } from '@angular/core';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-under-the-hood',
  templateUrl: './under-the-hood.component.html'
})
export class UnderTheHoodComponent {

  code: string = `
  const myObservable = (observer: Observer<number>) => {
    let producer = new Producer();
    producer.ondata = (e) => observer.next(e);
    producer.onerror = (err) => observer.error(err);
    producer.oncomplete = () => observer.complete();
    return () => {
        producer.destroy();
    };
  }

  const observer: Observer<number> = {
    next(x) { console.log(x); },
    error(err) { console.error(err); },
    complete() { console.log('done')}
  }

  const unsub: () => any = myObservable(observer);`;

  code2: string = `
  class Producer {
  
    _id: number;
    
    ondata: (e) => void;
    onerror: (e) => void;
    oncomplete: () => void;
    
    constructor() {
      let i: number= 0;
      this._id = setInterval(() => this.emit(i++), 200);
    }
    
    emit(n: number) {
      const limit: number = 10;
      this.ondata(n);
  
      if (n === limit) {
        this.oncomplete();
        this.destroy();
      }
    }
    
    destroy() {
      clearInterval(this._id);
    }
  }`

  constructor() { }

  runDemo(): void {

    const myObservable = (observer: Observer<number>) => {
      let producer = new Producer();
      producer.ondata = (e) => observer.next(e);
      producer.onerror = (err) => observer.error(err);
      producer.oncomplete = () => observer.complete();
      return () => {
          producer.destroy();
      };
    }

    const observer: Observer<number> = {
      next(x) { console.log(x); },
      error(err) { console.error(err); },
      complete() { console.log('done')}
    }

    const unsub: () => any = myObservable(observer);

    // Now unsubscription in 500ms
    // setTimeout(unsub, 500);
  }
}

class Producer {
  
  _id: number;
  
  ondata: (e) => void;
  onerror: (e) => void;
  oncomplete: () => void;
  
  constructor() {
    let i: number= 0;
    this._id = setInterval(() => this.emit(i++), 200);
  }
  
  emit(n: number) {
    const limit: number = 10;
    this.ondata(n);

    if (n === limit) {
      this.oncomplete();
      this.destroy();
    }
  }
  
  destroy() {
    clearInterval(this._id);
  }
}
