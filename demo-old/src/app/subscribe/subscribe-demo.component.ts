import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'subscribe-demo',
  template: `
    <h1>测试Observable属性组件是否在销毁组件时自动unsubscribe</h1>
    <subscribe-child *ngIf="isDestroy"></subscribe-child>
  `,
})
export class SubscribeDemoComponent implements OnInit {

  public name: Observable<any>
  public isDestroy: boolean = true

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isDestroy = false
    }, 3e3)
  }

}
