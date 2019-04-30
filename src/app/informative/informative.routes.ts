import { Routes } from '@angular/router';
import { InformativeComponent } from './informative.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

export const ROUTES: Routes = [
    {
        path: '', component: InformativeComponent
    },
    {
        path: '**', component: NotFoundComponent
    }
];
