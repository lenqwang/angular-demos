import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import 'zone.js'

@Component({
  selector: 'basic-demo',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  public counter: number = 1
  public counter_interval: number = 1
  public counter_xhr: number|string
  private XHR_PATH: string = '//easy-mock.com/mock/590060de0e2d1a2d617b9c1c/example'

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    setInterval(() => {
      this.counter_interval++
    }, 1e3)

    this.handleXhr()
    this.testZone()
  }

  handleXhr () {
    this.http.get(`${this.XHR_PATH}/demo`)
      .map(resp => {
        // await this.sleep(3e3)
        console.log(resp)
        // this.counter_xhr = <string>resp.
      })
  }

  sleep (timer: number) {
    return new Promise(resolve => setTimeout(resolve, timer))
  }

  testZone () {
    Zone.current.fork({name: 'demo'}).run(function () {

      setTimeout(function () {
          console.log(`in the inner zone: %c${Zone.current.name}`, 'color: blue')
        }, 0);
        console.log(`outer setTimeout of zone: %c${Zone.current.name}`, 'color: green')
    });

    console.log(`in the out zone: %c${Zone.current.name}`, 'color: red')
  }

  countUp () {
    this.counter++
  }

}
