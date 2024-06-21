import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QlUserRoutingModule } from './ql-user-routing.module';
import { QlUserComponent } from './ql-user.component';


@NgModule({
  declarations: [
    QlUserComponent,
  ],
  imports: [
    CommonModule,
    QlUserRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QlUserModule { }
