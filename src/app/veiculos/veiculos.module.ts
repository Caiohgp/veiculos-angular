import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from './veiculos/veiculos.component';

@NgModule({
  declarations: [
    VeiculosComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    AppMaterialModule
  ]
})
export class VeiculosModule { }
