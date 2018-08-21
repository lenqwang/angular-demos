import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'observable-demo',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {

  public addItemStream: Observable<any>

  constructor() { }

  ngOnInit() {

    this.addItemStream = new Observable(observable => timer(3e3, 1e3).subscribe(number => observable.next(number)))
  }

}
