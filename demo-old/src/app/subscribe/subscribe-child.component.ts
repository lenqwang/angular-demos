import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'subscribe-child',
  template: `
    <h1>Hello, {{ counter }}</h1>
  `,
})
export class SubscribeChildComponent implements OnInit, OnDestroy {

  public addItemStream: Observable<any>
  public counter: number = 0
  public addItemStreamSubscription: Subscription

  constructor() { }

  ngOnInit() {

    this.addItemStream = Observable.timer(3e3, 1e3)

    this.addItemStreamSubscription = this.addItemStream.subscribe(() => {
      this.counter++
      console.log('我在Observable里面，组件销毁了，我还在运行！！！')
    })

    // this.addItemStream = new Observable(observable => timer(3e3, 1e3).subscribe(number => observable.next(number)))
  }

  ngOnDestroy () {
    // this.addItemStreamSubscription && this.addItemStreamSubscription.unsubscribe()
    console.log('I am destroyed!')
  }

}
