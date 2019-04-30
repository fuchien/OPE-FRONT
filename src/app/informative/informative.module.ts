import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformativeComponent } from './informative.component';
import { InformativeRoutingModule } from './informative-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [InformativeComponent],
  imports: [
    CommonModule,
    InformativeRoutingModule,
    SharedModule
  ]
})
export class InformativeModule { }
