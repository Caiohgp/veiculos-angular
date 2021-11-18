import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Veiculo } from '../model/veiculo';
import { VeiculosService } from '../services/veiculos.service';
import { ResponsePageable } from '../model/responsePageable';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {

  veiculos: Veiculo[];
  displayedColumns = ['nome','placa','renavam','dataDeCadastro','valor'];

  constructor(private veiculosService: VeiculosService) {
    this.veiculos = [];
   }

  ngOnInit(): void {
    this.getVeiculos();
  }

    getVeiculos(){
      this.veiculosService.listAll().subscribe(data=>{
        this.veiculos = data.content;
        console.log(this.veiculos);
    });

  }
}
