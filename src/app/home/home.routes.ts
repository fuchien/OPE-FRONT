import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

export const ROUTES: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path:'**', component: NotFoundComponent
    }
];
