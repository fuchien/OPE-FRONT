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
    return this.httpCliente.get(`http://www.mocky.io/v2/5ce330ee34000056887738dd`);
  }
}
