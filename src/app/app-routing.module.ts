import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QlSanphamComponent } from './ql-sanpham/ql-sanpham.component';
import { QlUserComponent } from './ql-user/ql-user.component';
import { QlKhoComponent } from './ql-kho/ql-kho.component';
import { QlDonhangComponent } from './ql-donhang/ql-donhang.component';
import { QlChinhanhComponent } from './ql-chinhanh/ql-chinhanh.component';
import { QlNccComponent } from './ql-ncc/ql-ncc.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'sanpham',
    loadChildren: () => import('./ql-sanpham/ql-sanpham.module').then(m => m.QlSanphamModule)
  },
  {
    path: 'kho',
    loadChildren: () => import('./ql-kho/ql-kho.module').then(m => m.QlKhoModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./ql-user/ql-user.module').then(m => m.QlUserModule)
  },
  { path: 'donhang', component: QlDonhangComponent },
  {
    path: 'chinhanh',
    loadChildren: () => import('./ql-chinhanh/ql-chinhanh.module').then(m => m.QlChinhanhModule)
  },
  {
    path: 'nhacungcap',
    loadChildren: () => import('./ql-ncc/ql-ncc.module').then(m => m.QlNccModule)
  },
  //{path: 'taichinh', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
