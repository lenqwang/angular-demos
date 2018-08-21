import { Component, ChangeDetectorRef } from "@angular/core";

class DataProvider {
  // in a real application the returned data will be different every time
  get data() {
    return [1,2,3,4,5];
  }
}

@Component({
  selector: 'giant-list',
  template: `
    <li *ngFor="let d of dataProvider.data">Data {{d}}</li>
  `,
})
export class GiantList {
  constructor(private ref: ChangeDetectorRef, private dataProvider:DataProvider) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 5000);
  }
}

@Component({
  selector: 'detech-demo',
  providers: [DataProvider],
  template: `
    <giant-list><giant-list>
  `,
})
export class DetechComponent {
}
