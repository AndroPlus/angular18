import { Routes } from '@angular/router';
import { LocaltemplateComponent } from './localtemplate/localtemplate.component';
import { NgoptimizerimageComponent } from './ngoptimizerimage/ngoptimizerimage.component';
import { RxjsTestComponent } from './rxjs-test/rxjs-test.component';
import { NgrxTestComponent } from './ngrx-test/ngrx-test.component';
import { SignalTestComponent } from './signal-test/signal-test.component';

export const routes: Routes = [
    {component: LocaltemplateComponent, path: 'localtemplate'},
    {component: NgoptimizerimageComponent, path: 'ngoptimizer'},
    {component: RxjsTestComponent, path: 'rxjs'},
    {component: NgrxTestComponent, path: 'ngrx'},
    {component: SignalTestComponent, path: 'signal'}
];
