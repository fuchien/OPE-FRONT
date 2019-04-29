import { NotFoundComponent } from './../shared/not-found/not-found.component';
import { AboutUsComponent } from './about-us.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: 'sobre', component: AboutUsComponent
    },
    {
        path: '**', component: NotFoundComponent
    }
]