import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ResponsePageable } from '../model/responsePageable';
import { Observable } from 'rxjs';
import { Veiculo } from '../model/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private readonly API = 'http://localhost:8080/veiculos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public listAll(): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.API);
  }
  public postVeiculos(veiculo: any): Observable<Veiculo>{
    return  this.httpClient.post<any>(this.API,veiculo, this.httpOptions);
  }
}
