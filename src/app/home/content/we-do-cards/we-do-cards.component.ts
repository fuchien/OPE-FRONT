import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-we-do-cards',
  templateUrl: './we-do-cards.component.html',
  styleUrls: ['./we-do-cards.component.scss']
})
export class WeDoCardsComponent implements OnInit {

  public cards = [
    { title: `Ensino Medio`, description: `conheça mais sobre nossos processos`
    , button: `Saiba mais` },
    { title: `ENEM`, description: `Melhores resultados no enem`
    , button: `Saiba mais` },
    { title: `Professores`, description: `conheça nossos professores`
    , button: `Saiba mais` }
  ];

  constructor() { }

  ngOnInit() {
  }

}
