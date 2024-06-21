import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QlSanphamRoutingModule } from './ql-sanpham-routing.module';
import { QlSanphamComponent } from './ql-sanpham.component';
import { DoanvatComponent } from './doanvat/doanvat.component';
import { NuocgkComponent } from './nuocgk/nuocgk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    QlSanphamComponent,
    DoanvatComponent,
    NuocgkComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    QlSanphamRoutingModule
  ]
})
export class QlSanphamModule { }
