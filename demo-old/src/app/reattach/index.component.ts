import { Component, ChangeDetectorRef } from "@angular/core";

class DataProvider {
  data = 1;

  constructor() {
    setInterval(() => {
      this.data = this.data * 2;
    }, 1e3);
  }
}

@Component({
  selector: 'live-data',
  inputs: ['live'],
  template: `Data: {{dataProvider.data}}`
})
export class LiveData {
  constructor(
    private ref: ChangeDetectorRef,
    private dataProvider: DataProvider
  ) {}

  set live (value) {
    if (value)
      this.ref.reattach();
    else
      this.ref.detach();
  }
}

@Component({
  selector: 'reattach-demo',
  providers: [DataProvider],
  template: `
    Live Update: <input type="checkbox" [(ngModel)]="live">
    <live-data [live]="live"><live-data>
  `,
})
export class ReattachDemo {
  live = true;
}
