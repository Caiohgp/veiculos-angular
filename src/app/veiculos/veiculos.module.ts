import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { LocalDateTimePipe } from 'src/app/shared/pipe/local-date-time.pipe';


@NgModule({
  declarations: [
    VeiculosComponent,
    LocalDateTimePipe

  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    AppMaterialModule
  ],
  providers: [
    LocalDateTimePipe
  ],
})
export class VeiculosModule { }
