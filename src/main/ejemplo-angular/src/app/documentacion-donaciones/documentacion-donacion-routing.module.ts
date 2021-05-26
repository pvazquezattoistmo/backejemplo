import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { DocumentacionDonacionListKendoComponent }   from '../documentacion-donaciones/documentacion-donacion-list-kendo/documentacion-donacion-list-kendo.component';
import { DocumentacionDonacionCrudComponent }   from '../documentacion-donaciones/documentacion-donacion-crud/documentacion-donacion-crud.component';
import { DocumentacionDonacionTableComponent }   from '../documentacion-donaciones/documentacion-donacion-table/documentacion-donacion-table.component';


const routes: Routes = [
  { path: 'documentacion-donacion-list-kendo',  component: DocumentacionDonacionListKendoComponent },
  { path: 'documentacion-donacion-crud',  component: DocumentacionDonacionCrudComponent },
  { path: 'documentacion-donacion-table',  component: DocumentacionDonacionTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentacionDonacionRoutingModule { }
