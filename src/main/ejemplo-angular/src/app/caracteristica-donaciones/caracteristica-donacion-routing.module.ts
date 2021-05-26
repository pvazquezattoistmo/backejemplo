import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { CaracteristicaDonacionListKendoComponent }   from '../caracteristica-donaciones/caracteristica-donacion-list-kendo/caracteristica-donacion-list-kendo.component';
import { CaracteristicaDonacionCrudComponent }   from '../caracteristica-donaciones/caracteristica-donacion-crud/caracteristica-donacion-crud.component';
import { CaracteristicaDonacionTableComponent }   from '../caracteristica-donaciones/caracteristica-donacion-table/caracteristica-donacion-table.component';


const routes: Routes = [
  { path: 'caracteristica-donacion-list-kendo',  component: CaracteristicaDonacionListKendoComponent },
  { path: 'caracteristica-donacion-crud',  component: CaracteristicaDonacionCrudComponent },
  { path: 'caracteristica-donacion-table',  component: CaracteristicaDonacionTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaracteristicaDonacionRoutingModule { }
