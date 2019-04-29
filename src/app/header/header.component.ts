import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navList: { text: string, route?: string, subList?: {}[] }[] = [
    {
      text: `Página inicial`,
      route: ``
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
  ];

  public navClicked: string = '';
  public menuOpened: boolean = false;
  constructor(
    private router: Router,
  ) {
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.handleNavClick(this.navList[0].text);
  }

  handleNavClick(link: string, route: string = this.router.url): void {
    this.navClicked = link;
    this.router.navigate([route]);
  }

  handleMenu(): void {
    this.menuOpened = !this.menuOpened;
  }

}
