import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-menu',
  templateUrl: './cards-menu.component.html',
  styleUrls: ['./cards-menu.component.scss']
})
export class CardsMenuComponent implements OnInit {

  public cards = [
    { icon: 'teste', title: 'Responsive design', description: 'Lorem Ipsum' },
    { icon: 'teste', title: 'Responsive design', description: 'Lorem Ipsum' },
    { icon: 'teste', title: 'Responsive design', description: 'Lorem Ipsum' },
    { icon: 'teste', title: 'Responsive design', description: 'Lorem Ipsum' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
