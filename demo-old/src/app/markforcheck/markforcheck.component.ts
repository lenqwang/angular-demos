import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'markforcheck-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <cmp [name]="'Jake'" [ticks]="ticks"></cmp>
  `
})
export class MarkforcheckComponent implements OnInit {

  public ticks: number = 0

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // setInterval(() => {
    //   this.ticks++
    //   this.cd.markForCheck()
    // }, 1e3)
  }

}
