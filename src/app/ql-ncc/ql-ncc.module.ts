import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QlNccComponent } from './ql-ncc.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { QlNCCRoutingModule } from './ql-ncc-routing.module';



@NgModule({
  declarations: [
    QlNccComponent,
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
    QlNCCRoutingModule
  ]
})
export class QlNccModule { }
