import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { DesgloseCorneaListKendoComponent }   from '../desglose-corneas/desglose-cornea-list-kendo/desglose-cornea-list-kendo.component';
import { DesgloseCorneaCrudComponent }   from '../desglose-corneas/desglose-cornea-crud/desglose-cornea-crud.component';
import { DesgloseCorneaTableComponent }   from '../desglose-corneas/desglose-cornea-table/desglose-cornea-table.component';


const routes: Routes = [
  { path: 'desglose-cornea-list-kendo',  component: DesgloseCorneaListKendoComponent },
  { path: 'desglose-cornea-crud',  component: DesgloseCorneaCrudComponent },
  { path: 'desglose-cornea-table',  component: DesgloseCorneaTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesgloseCorneaRoutingModule { }
