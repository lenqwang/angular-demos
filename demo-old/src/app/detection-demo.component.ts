import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'detection-demo',
  template: `
    <detection-child></detection-child>
  `
})
export class DetectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck () {
    console.log('I am detection demo component!')
  }

}
