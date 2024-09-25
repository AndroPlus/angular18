import { Routes } from '@angular/router';
import { LocaltemplateComponent } from './localtemplate/localtemplate.component';
import { NgoptimizerimageComponent } from './ngoptimizerimage/ngoptimizerimage.component';
import { RxjsTestComponent } from './rxjs-test/rxjs-test.component';

export const routes: Routes = [
    {component: LocaltemplateComponent, path: 'localtemplate'},
    {component: NgoptimizerimageComponent, path: 'ngoptimizer'},
    {component: RxjsTestComponent, path: 'rxjs'}
];
