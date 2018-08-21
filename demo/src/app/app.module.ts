import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { HttpModule } from '@angular/http';
import { ObservableComponent } from './observable/observable.component';
import { ChildDemoComponent } from './child-demo/child-demo.component';

@NgModule({
  declarations: [
    AppComponent,
  Demo1Component,
  ObservableComponent,
  ChildDemoComponent],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
