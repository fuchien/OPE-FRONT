import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTES } from './home.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
