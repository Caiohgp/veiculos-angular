import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Veiculo } from '../model/veiculo';
import { VeiculosService } from '../services/veiculos.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {

  veiculos: Observable<Veiculo[]>;
  displayedColumns = ['nome','placa','renavam','dataDeCadastro','valor'];

  constructor(private veiculosService: VeiculosService) {
    this.veiculos = this.veiculosService.listAll();
   }

  ngOnInit(): void {
  }

}
