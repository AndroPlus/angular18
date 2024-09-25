import { Routes } from '@angular/router';
import { LocaltemplateComponent } from './localtemplate/localtemplate.component';
import { NgoptimizerimageComponent } from './ngoptimizerimage/ngoptimizerimage.component';
import { NgrxTestComponent } from './ngrx-test/ngrx-test.component';

export const routes: Routes = [
    {component: LocaltemplateComponent, path: 'localtemplate'},
    {component: NgoptimizerimageComponent, path: 'ngoptimizer'},
    {component: NgrxTestComponent, path: 'ngrx'}
];
