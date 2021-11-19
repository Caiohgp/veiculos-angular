import { Modelo } from './../veiculos/model/modelo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  private readonly API = 'http://localhost:8080/modelos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public listAll(): Observable<Modelo[]>{
    return this.httpClient.get<Modelo[]>(this.API);
  }
}
