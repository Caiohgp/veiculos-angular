import { ModelosService } from './../../modelos/modelos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { VeiculosService } from '../services/veiculos.service';
import { OpcionalService } from 'src/app/opcionais/opcional.service';

import * as moment from 'moment';
import { Modelo } from '../model/modelo';
import { Opcional } from '../model/opcional';

@Component({
  selector: 'app-veiculos-form-dialog',
  templateUrl: './veiculos-form-dialog.component.html',
  styleUrls: ['./veiculos-form-dialog.component.scss']
})
export class VeiculosFormDialogComponent implements OnInit {

  public veiculoForm: FormGroup;
  modelos: Modelo[];
  opcionais: Opcional[];

  constructor(
    private fb: FormBuilder,
    private rest: VeiculosService,
    private modeloService: ModelosService,
    private opcionalService: OpcionalService,
    public dialogRef: MatDialogRef<VeiculosFormDialogComponent>,
    ) { }

  ngOnInit(): void {

    this.veiculoForm = this.fb.group({
      nome: ['',[Validators.required]],
      placa: ['',[Validators.required]],
      renavam: ['',[Validators.required]],
      dataCadastro: ['',[Validators.required]],
      horarioCadastro: ['',[Validators.required]],
      valor: ['',[Validators.required]],
      modelo: ['',[Validators.required]],
      opcional: ['',[Validators.required]],
    });
    this.getModelos();
    this.getOpcionais();
  }

  createVeiculo(){
    let newDate: moment.Moment = moment.utc(this.veiculoForm.value.dataCadastro).local();
    this.veiculoForm.value.dataCadastro = newDate.format("YYYY-MM-DD") + "T" + this.veiculoForm.value.horarioCadastro;
    this.rest.postVeiculos(this.veiculoForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.veiculoForm.reset();

  }

  cancel(): void {
    this.dialogRef.close();
    this.veiculoForm.reset();

  }


  getModelos(){
    this.modeloService.listAll().subscribe(dataModelo=>{
      this.modelos = dataModelo;
  });
  }

  getOpcionais(){
    this.opcionalService.listAll().subscribe(dataOpcional=>{
      this.opcionais = dataOpcional;
      console.log (this.opcionais);
  });
  }

}
