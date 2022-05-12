import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material/demo-material.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppService } from './shared/services/app.service';
import { SidePanelService } from './shared/services/side-panel.service';
import { SidenavButtonListComponent } from './shared/components/sidenav-button-list/sidenav-button-list.component';
import { IntroductionComponent } from './routes/introduction/introduction.component';
import { EasyAsOneTwoThreeComponent } from './routes/easy-as-one-two-three/easy-as-one-two-three.component';
import { UnderTheHoodComponent } from './routes/under-the-hood/under-the-hood.component';
import { HotVsColdComponent } from './routes/hot-vs-cold/hot-vs-cold.component';
import { SyncVsAsyncComponent } from './routes/sync-vs-async/sync-vs-async.component';
import { MyFirstSubjectComponent } from './routes/my-first-subject/my-first-subject.component';
import { SubjectUnsubscribeComponent } from './routes/subject-unsubscribe/subject-unsubscribe.component';
import { SubjectObserverComponent } from './routes/subject-observer/subject-observer.component';
import { OperatorsComponent } from './routes/operators/operators.component';
import { ConcatComponent } from './routes/concat/concat.component';
import { MergeComponent } from './routes/merge/merge.component';
import { SwitchComponent } from './routes/switch/switch.component';
import { ArrayMethodsComponent } from './routes/array-methods/array-methods.component';
import { FirstCatchComponent } from './routes/first-catch/first-catch.component';
import { IsolationComponent } from './routes/isolation/isolation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavButtonListComponent,
    IntroductionComponent,
    EasyAsOneTwoThreeComponent,
    UnderTheHoodComponent,
    HotVsColdComponent,
    SyncVsAsyncComponent,
    MyFirstSubjectComponent,
    SubjectUnsubscribeComponent,
    SubjectObserverComponent,
    OperatorsComponent,
    ConcatComponent,
    MergeComponent,
    SwitchComponent,
    ArrayMethodsComponent,
    FirstCatchComponent,
    IsolationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HighlightModule
  ],
  providers: [
    AppService,
    SidePanelService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
