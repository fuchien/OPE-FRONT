import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public slider = [
    `./assets/images/home_1.jpg`,
    `./assets/images/home_2.jpg`,
  ];
  public image: string;

  constructor() { }

  ngOnInit() {
    this.handlerTimeSlider();
  }

  public handlerTimeSlider() {
    let index = 0;
    this.image = this.slider[index];
    setInterval(() => {
      if (index === this.slider.length - 1) {
        index = 0;
      } else {
        index++;
      }
      this.image = this.slider[index];
    }, 3500);
  }

}
