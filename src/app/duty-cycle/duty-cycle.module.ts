import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DutyCycleComponent } from './duty-cycle.component';
import { DutyCycleRoutingModule } from './duty-cycle-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DutyCycleComponent],
  imports: [
    CommonModule,
    DutyCycleRoutingModule,
    SharedModule
  ]
})
export class DutyCycleModule { }
