import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../model/veiculo';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {

  veiculos: Veiculo[] = [{
    id:1,nome:"Lamborghini",placa:"213123",renavam:"213123123",dataDeCadastro:"12/12/2021",valor:4
  } ];
  displayedColumns = ['nome','placa','renavam','dataDeCadastro','valor'];

  constructor() { }

  ngOnInit(): void {
  }

}
