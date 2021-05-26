import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { OficioDonacionListKendoComponent }   from '../oficio-donaciones/oficio-donacion-list-kendo/oficio-donacion-list-kendo.component';
import { OficioDonacionCrudComponent }   from '../oficio-donaciones/oficio-donacion-crud/oficio-donacion-crud.component';
import { OficioDonacionTableComponent }   from '../oficio-donaciones/oficio-donacion-table/oficio-donacion-table.component';


const routes: Routes = [
  { path: 'oficio-donacion-list-kendo',  component: OficioDonacionListKendoComponent },
  { path: 'oficio-donacion-crud',  component: OficioDonacionCrudComponent },
  { path: 'oficio-donacion-crud/:id',  component: OficioDonacionCrudComponent },
  { path: 'oficio-donacion-table',  component: OficioDonacionTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OficioDonacionRoutingModule { }
