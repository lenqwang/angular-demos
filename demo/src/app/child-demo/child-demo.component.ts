import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.css']
})
export class ChildDemoComponent implements OnInit {
  @Input() addItemStream: Observable<any>
  public counter: number = 0

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.addItemStream.subscribe(() => {
      this.counter++
      // this.cd.markForCheck()
    })
  }

}
