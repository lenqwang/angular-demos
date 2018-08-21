import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges, Input } from "@angular/core";

@Component({
  selector: 'cmp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    Number of ticks: {{numberOfTicks}}

    <h1>Hello, {{ name }} and Ticked: {{ ticks }}</h1>
    <h3>{{ ticksAlias }}</h3>
    <button role="button" (click)="handleClick()"></button>
  `
})
export class CmpComponent /* implements OnChanges */ {
  @Input() ticks: number
  @Input() name: string

  get ticksAlias () {
    console.log('ticks alias')
    return this.ticks + 1000
  }

  numberOfTicks = 0;

  constructor(private ref: ChangeDetectorRef) {
    // setInterval(() => {
    //   this.numberOfTicks++
    //   // the following is required, otherwise the view will not be updated
    //   this.ref.markForCheck()
    // }, 1000)
  }

  // ngOnChanges (changes: SimpleChanges) {
  //   // this.ref.detach()

  //   setTimeout(() => {
  //     // console.log('reattach execute!')
  //     // 如果meta没有设置ChangeDetectionStrategy.OnPush，则第3秒才会渲染页面
  //     this.ref.reattach()
  //   }, 3e3)


  //   // this.ref.detach()

  //   setTimeout(() => {
  //     // console.log('reattach execute!')
  //     // 如果meta没有设置ChangeDetectionStrategy.OnPush，则第3秒才会渲染页面
  //     this.ref.reattach()
  //   }, 2e3)
  // }

  handleClick () {

  }
}
