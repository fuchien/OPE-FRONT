import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const ROUTES: Routes = [
    {
        path: '', loadChildren: `./home/home.module#HomeModule`,
    },

    //Insert the lazy loading routes above this comment
    {
        path: '**', component: NotFoundComponent
    }
];
