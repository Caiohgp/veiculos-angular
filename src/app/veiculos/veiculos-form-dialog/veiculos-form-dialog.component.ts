import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { VeiculosService } from '../services/veiculos.service';

@Component({
  selector: 'app-veiculos-form-dialog',
  templateUrl: './veiculos-form-dialog.component.html',
  styleUrls: ['./veiculos-form-dialog.component.scss']
})
export class VeiculosFormDialogComponent implements OnInit {

  public veiculoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: VeiculosService,
    public dialogRef: MatDialogRef<VeiculosFormDialogComponent>,
    ) { }

  ngOnInit(): void {

    this.veiculoForm = this.fb.group({
      nome: ['',[Validators.required]],
      placa: ['',[Validators.required]],
      renavam: ['',[Validators.required]],
      dataDeCadastro: ['',[Validators.required]],
      valor: ['',[Validators.required]]
    });
  }

  createVeiculo(){
    this.rest.postVeiculos(this.veiculoForm.value).subscribe(result => {})
    this.dialogRef.close();
    this.veiculoForm.reset();

  }

  cancel(): void {
    this.dialogRef.close();
    this.veiculoForm.reset();

  }

}
