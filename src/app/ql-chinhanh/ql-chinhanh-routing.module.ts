import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QlChinhanhComponent } from './ql-chinhanh.component';
import { EditChinhanhComponent } from './edit-chinhanh/edit-chinhanh.component';
import { DetailChinhanhComponent } from './detail-chinhanh/detail-chinhanh.component';

const routes: Routes = [
  {
    path: '',
     component: QlChinhanhComponent
  },
  {
    path: 'edit/:id',
    component: EditChinhanhComponent
  },
  {
    path: 'detail/:id',
    component: DetailChinhanhComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QlChinhanhRoutingModule { }
