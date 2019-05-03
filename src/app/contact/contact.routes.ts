import { ContactComponent } from './contact.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

export const ROUTES: Routes = [
    {
        path: '', component: ContactComponent
    },
    {
        path: '**', component: NotFoundComponent
    }
];
