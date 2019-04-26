import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navList: {text: string, subList?: {}[]}[] = [
    {
      text: `Página inicial`
    },
    {
      text: `Sobre Nós`,
      subList: [
        {
          text: `Quem somos nós?`
        },
        {
          text: `Proposta Pedagógica`
        }
      ]
    },
    {
      text: `Ciclos de Atuação`,
      subList: [
        {
          text: `Educação Infantil`
        },
        {
          text: `Anos Iniciais`
        },
        {
          text: `Anos Finais`
        },
        {
          text: `Ensino Médio`
        }
      ]
    },
    {
      text: `Informativos`
    },
    {
      text: `Contato`
    }
  ]

  public navClicked: string = '';
  public menuOpened: boolean = false;

  constructor() { }

  ngOnInit() {
    this.handleNavClick(this.navList[0].text);
  }

  handleNavClick (link: string): void {
    this.navClicked = link;
  }

  handleMenu (): void {
    this.menuOpened = !this.menuOpened;
  }

}
