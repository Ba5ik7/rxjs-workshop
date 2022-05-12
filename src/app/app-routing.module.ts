import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionComponent } from './routes/introduction/introduction.component';
import { EasyAsOneTwoThreeComponent } from './routes/easy-as-one-two-three/easy-as-one-two-three.component';
import { UnderTheHoodComponent } from './routes/under-the-hood/under-the-hood.component';
import { HotVsColdComponent } from './routes/hot-vs-cold/hot-vs-cold.component';
import { SyncVsAsyncComponent } from './routes/sync-vs-async/sync-vs-async.component';
import { MyFirstSubjectComponent } from './routes/my-first-subject/my-first-subject.component';
import { ArrayMethodsComponent } from './routes/array-methods/array-methods.component';
import { ConcatComponent } from './routes/concat/concat.component';
import { FirstCatchComponent } from './routes/first-catch/first-catch.component';
import { IsolationComponent } from './routes/isolation/isolation.component';
import { MergeComponent } from './routes/merge/merge.component';
import { OperatorsComponent } from './routes/operators/operators.component';
import { SubjectObserverComponent } from './routes/subject-observer/subject-observer.component';
import { SubjectUnsubscribeComponent } from './routes/subject-unsubscribe/subject-unsubscribe.component';
import { SwitchComponent } from './routes/switch/switch.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'under-the-hood', component: UnderTheHoodComponent },
  { path: 'array-methods', component: ArrayMethodsComponent },
  { path: 'concat', component: ConcatComponent },
  { path: 'easy-as-123', component: EasyAsOneTwoThreeComponent },
  { path: 'first-catch', component: FirstCatchComponent },
  { path: 'hot-vs-cold', component: HotVsColdComponent },
  { path: 'isolation', component: IsolationComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'my-first-subject', component: MyFirstSubjectComponent },
  { path: 'operators', component: OperatorsComponent },
  { path: 'subject-observer', component: SubjectObserverComponent },
  { path: 'subject-unsubscribe', component: SubjectUnsubscribeComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'sync-vs-async', component: SyncVsAsyncComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
