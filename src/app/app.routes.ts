import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
export const ROUTES: Routes = [
    {
        path: '', redirectTo:'/inicio', pathMatch: 'full',
    },
    {
        path: 'inicio', loadChildren: `./home/home.module#HomeModule`,
    },
    {
        path: 'sobre', loadChildren: `./about-us/about-us.module#AboutUsModule`,
    },
    {
        path: 'ciclos-de-atuacao', loadChildren: `./duty-cycle/duty-cycle.module#DutyCycleModule`,
    },
    {
        path: 'informativos', loadChildren: `./informative/informative.module#InformativeModule`,
    },
    {
        path: 'contato', loadChildren: `./contact/contact.module#ContactModule`,
    },
    // Insert the lazy loading routes above this comment
    {
        path: '**', component: NotFoundComponent
    }
];
