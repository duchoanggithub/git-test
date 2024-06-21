import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditNccComponent } from "./edit-ncc/edit-ncc.component";
import { DetailNccComponent } from "./detail-ncc/detail-ncc.component";
import { QlNccComponent } from "./ql-ncc.component";

const routes: Routes = [
    {
      path: '',
       component: QlNccComponent
    },
    {
      path: 'edit/:id',
      component: EditNccComponent
    },
    {
      path: 'detail/:id',
      component: DetailNccComponent
    },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class QlNCCRoutingModule { }
  