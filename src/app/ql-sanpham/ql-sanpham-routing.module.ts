import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QlSanphamComponent } from './ql-sanpham.component';
import { DoanvatComponent } from './doanvat/doanvat.component';
import { NuocgkComponent } from './nuocgk/nuocgk.component';
import { EditSanphamComponent } from './edit-sanpham/edit-sanpham.component';


const routes: Routes = [
  {
    path: 'lsdmsp',
    component: QlSanphamComponent
  },
  {
    path: 'doanvat',
    component: DoanvatComponent
  },
  {
    path: 'nuocgk',
    component: NuocgkComponent
  },
  {
    path: 'lsdmsp/edit/:id',
    component: EditSanphamComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QlSanphamRoutingModule { }
