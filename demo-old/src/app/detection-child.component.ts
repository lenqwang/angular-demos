import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'detection-child',
  template: `
    <detection-subchild [name]="name"></detection-subchild>
  `
})
export class DetectionChildComponent implements OnInit {

  public name: string = ''

  constructor() { }

  ngOnInit() {
    this.name = 'Jake'
    // setTimeout(() => {
    //   this.name = 'Lucy'
    // }, 3e3)
  }

  ngDoCheck () {
    console.log('I am detection child component!', this.name)
  }

}
