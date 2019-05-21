import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { HttpService } from './http-service/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports:[
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    HttpService,
  ]
})
export class SharedModule { }
