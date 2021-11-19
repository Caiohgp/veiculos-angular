import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Veiculo } from '../model/veiculo';
import { VeiculosService } from '../services/veiculos.service';
import { VeiculosFormDialogComponent } from '../veiculos-form-dialog/veiculos-form-dialog.component';


@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {

  veiculos: Veiculo[] = [];
  displayedColumns = ['nome','placa','renavam','dataDeCadastro','valor','modelo','opcional'];

  constructor(private veiculosService: VeiculosService, public dialog: MatDialog) {   }

  ngOnInit(): void {
    this.getVeiculos();
  }

  addVeiculo(): void {
    const dialogRef = this.dialog.open(VeiculosFormDialogComponent, {
      minWidth: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getVeiculos(){
    this.veiculosService.listAll().subscribe(data=>{
      this.veiculos = data.content;
      console.log(this.veiculos);
  });

  }
}
