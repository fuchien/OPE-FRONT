import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http-service/http.service';

@Component({
  selector: 'app-cards-menu',
  templateUrl: './cards-menu.component.html',
  styleUrls: ['./cards-menu.component.scss']
})
export class CardsMenuComponent implements OnInit {

  public cards = [];

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.http.getData().subscribe(
      (data: any) => this.cards = data,
      (err: any) => console.error(err)
    );
  }

}
