import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { LocalDateTimePipe } from 'src/app/shared/pipe/local-date-time.pipe';
import {MatButtonModule} from '@angular/material/button';
import { VeiculosFormDialogComponent } from './veiculos-form-dialog/veiculos-form-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    VeiculosComponent,
    LocalDateTimePipe,
    VeiculosFormDialogComponent

  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    AppMaterialModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSelectModule

  ],
  providers: [
    LocalDateTimePipe
  ],
})
export class VeiculosModule { }
