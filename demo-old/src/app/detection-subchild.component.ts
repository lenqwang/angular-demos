import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detection-subchild',
  template: `
    <p>Hello {{ name }}!</p>
  `
})
export class DetectionSubChildComponent implements OnInit {
  @Input() name: string

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck () {
    console.log('I am detection subchild component!', this.name)
  }
}
