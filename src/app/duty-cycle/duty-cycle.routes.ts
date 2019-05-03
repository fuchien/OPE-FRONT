import { DutyCycleComponent } from './duty-cycle.component';
import { NotFoundComponent } from './../shared/not-found/not-found.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '', component: DutyCycleComponent
    },
    {
        path: '**', component: NotFoundComponent
    }
];