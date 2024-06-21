import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QlUserComponent } from './ql-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: 'lsuser',
    component: QlUserComponent
  },
  {
    path: 'lsuser/sua-user/:id',
    component: EditUserComponent
  },
  {
    path: 'lsuser/role', 
    component: QlUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QlUserRoutingModule { }
