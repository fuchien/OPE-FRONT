import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-we-do-cards',
  templateUrl: './we-do-cards.component.html',
  styleUrls: ['./we-do-cards.component.scss']
})
export class WeDoCardsComponent implements OnInit {

  public cards = [
    { title: `Photography`, description: `Swine short ribs meatball irure bacon nulla pork belly cupidatat meatloaf cow.`
    , button: `Learn more` },
    { title: `Photography`, description: `Swine short ribs meatball irure bacon nulla pork belly cupidatat meatloaf cow.`
    , button: `Learn more` },
    { title: `Photography`, description: `Swine short ribs meatball irure bacon nulla pork belly cupidatat meatloaf cow.`
    , button: `Learn more` }
  ];

  constructor() { }

  ngOnInit() {
  }

}
