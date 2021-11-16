import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Veiculo } from '../model/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private readonly API = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  listAll(){
    return this.httpClient.get<Veiculo[]>(`${this.API}/veiculos`);
      //{ id:1,nome:"Lamborghini",placa:"213123",renavam:"213123123",dataDeCadastro:"12/12/2021",valor:4555 }

  }
}
