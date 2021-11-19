import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Veiculo } from '../model/veiculo';
import { VeiculosService } from '../services/veiculos.service';
import { VeiculosFormDialogComponent } from '../veiculos-form-dialog/veiculos-form-dialog.component';
import { ModelosService } from 'src/app/modelos/modelos.service';
import { Opcional } from '../model/opcional';


@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {

  veiculos: Veiculo[];
  opcionais: Opcional[];


  displayedColumns = ['nome','placa','renavam','dataDeCadastro','valor','modelo','opcional'];

  constructor(private veiculosService: VeiculosService,private modeloService: ModelosService, public dialog: MatDialog) {   }

  ngOnInit(): void {
    this.getVeiculos();
  }

  addVeiculo(): void {
    const dialogRef = this.dialog.open(VeiculosFormDialogComponent, {
      minWidth: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  getVeiculos(){
    this.veiculosService.listAll().subscribe(data=>{
      this.veiculos = data.content;
  });
  }

}
