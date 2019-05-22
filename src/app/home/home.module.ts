import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

// COMPONENTS
import { HomeComponent } from './home.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { CardsMenuComponent } from './content/cards-menu/cards-menu.component';
import { CardMenuComponent } from './content/cards-menu/card-menu/card-menu.component';
import { ContentComponent } from './content/content.component';
import { WeDoCardsComponent } from './content/we-do-cards/we-do-cards.component';
import { WeDoCardComponent } from './content/we-do-cards/we-do-card/we-do-card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpService } from '../shared/http-service/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    SubHeaderComponent,
    CardsMenuComponent,
    CardMenuComponent,
    ContentComponent,
    WeDoCardsComponent,
    WeDoCardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers:[
    HttpService
  ]
})
export class HomeModule { }
