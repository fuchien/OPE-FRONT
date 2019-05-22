import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpCliente: HttpClient
  ) { }

  public getData(): Observable<any> {
    return this.httpCliente.get(`https://ope-api-dev.herokuapp.com/api/informations/What_we_do`);
  }
}
