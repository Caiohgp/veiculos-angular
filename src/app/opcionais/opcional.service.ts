import { Opcional } from './../veiculos/model/opcional';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpcionalService {

  private readonly API = 'http://localhost:8080/opcionais';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public listAll(): Observable<Opcional[]>{
    return this.httpClient.get<Opcional[]>(this.API);
  }
}
