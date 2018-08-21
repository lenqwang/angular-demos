import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { ObservableComponent } from './observable/observable.component';
import { ChildDemoComponent } from './child-demo/child-demo.component';
import { NgZoneDemo } from './ngzone-demo.component';
import { DetectionComponent } from './detection-demo.component';
import { DetectionSubChildComponent } from './detection-subchild.component';
import { DetectionChildComponent } from './detection-child.component';
import { MarkforcheckComponent } from './markforcheck/markforcheck.component';
import { CmpComponent } from './markforcheck/cmp.component';
import { DetechComponent, GiantList } from './detech/index.component';
import { ReattachDemo, LiveData } from './reattach/index.component';
import { SubscribeDemoComponent } from './subscribe/subscribe-demo.component';
import { SubscribeChildComponent } from './subscribe/subscribe-child.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    ObservableComponent,
    ChildDemoComponent,
    NgZoneDemo,
    DetectionComponent,
    DetectionChildComponent,
    DetectionSubChildComponent,
    MarkforcheckComponent,
    CmpComponent,
    DetechComponent,
    GiantList,
    ReattachDemo,
    LiveData,

    SubscribeDemoComponent,
    SubscribeChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
