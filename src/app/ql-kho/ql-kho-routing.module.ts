import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QlKhoComponent } from './ql-kho.component';
import { EditKhoComponent } from './edit-kho/edit-kho.component';
import { DetailKhoComponent } from './detail-kho/detail-kho.component';

const routes: Routes = [
  {
    path: 'lskho',
    component: QlKhoComponent
  },
  {
    path: 'lskho/edit/:id',
    component: EditKhoComponent
  },
  {
    path: 'lskho/detail/:id',
    component: DetailKhoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QlKhoRoutingModule { }
