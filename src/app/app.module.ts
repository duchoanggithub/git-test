import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import { ReactiveFormsModule } from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay'
import {CdkMenuModule} from '@angular/cdk/menu'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { AddUserComponent } from './ql-user/add-user/add-user.component';
import { EditUserComponent } from './ql-user/edit-user/edit-user.component';

import { AddSanphamComponent } from './ql-sanpham/add-sanpham/add-sanpham.component';
import { EditSanphamComponent } from './ql-sanpham/edit-sanpham/edit-sanpham.component';

import { QlDonhangComponent } from './ql-donhang/ql-donhang.component';

import { AddChinhanhComponent } from './ql-chinhanh/add-chinhanh/add-chinhanh.component';
import { EditChinhanhComponent } from './ql-chinhanh/edit-chinhanh/edit-chinhanh.component';
import { DetailChinhanhComponent } from './ql-chinhanh/detail-chinhanh/detail-chinhanh.component';

import { AddKhoComponent } from './ql-kho/add-kho/add-kho.component';
import { EditKhoComponent } from './ql-kho/edit-kho/edit-kho.component';
import { DetailKhoComponent } from './ql-kho/detail-kho/detail-kho.component';

import { AddNccComponent } from './ql-ncc/add-ncc/add-ncc.component';
import { EditNccComponent } from './ql-ncc/edit-ncc/edit-ncc.component';
import { DetailNccComponent } from './ql-ncc/detail-ncc/detail-ncc.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';







@NgModule({
  declarations: [	
    AppComponent,
    EditUserComponent,
    AddUserComponent,

    AddSanphamComponent,
    EditSanphamComponent,

    AddChinhanhComponent,
    EditChinhanhComponent,
    DetailChinhanhComponent,

    AddKhoComponent,
    EditKhoComponent,
    DetailKhoComponent,

    AddNccComponent,
    EditNccComponent,
    DetailNccComponent,

    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    QlDonhangComponent,
    SublevelMenuComponent,
    HeaderComponent,

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,

    MatSlideToggleModule,
    MatIconModule, 
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,

    OverlayModule,
    CdkMenuModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
