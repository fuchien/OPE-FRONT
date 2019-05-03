import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-menu',
  templateUrl: './cards-menu.component.html',
  styleUrls: ['./cards-menu.component.scss']
})
export class CardsMenuComponent implements OnInit {

  public cards = [
    { icon: 'teste', title: 'Responsive design', description: ' ' },
    { icon: 'teste', title: 'Responsive design', description: ' ' },
    { icon: 'teste', title: 'Responsive design', description: ' ' },
    { icon: 'teste', title: 'Responsive design', description: ' ' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
