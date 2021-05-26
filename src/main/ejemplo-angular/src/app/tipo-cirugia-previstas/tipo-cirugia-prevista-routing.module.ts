import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { TipoCirugiaPrevistaListKendoComponent }   from '../tipo-cirugia-previstas/tipo-cirugia-prevista-list-kendo/tipo-cirugia-prevista-list-kendo.component';
import { TipoCirugiaPrevistaCrudComponent }   from '../tipo-cirugia-previstas/tipo-cirugia-prevista-crud/tipo-cirugia-prevista-crud.component';
import { TipoCirugiaPrevistaTableComponent }   from '../tipo-cirugia-previstas/tipo-cirugia-prevista-table/tipo-cirugia-prevista-table.component';


const routes: Routes = [
  { path: 'tipo-cirugia-prevista-list-kendo',  component: TipoCirugiaPrevistaListKendoComponent },
  { path: 'tipo-cirugia-prevista-crud',  component: TipoCirugiaPrevistaCrudComponent },
  { path: 'tipo-cirugia-prevista-table',  component: TipoCirugiaPrevistaTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoCirugiaPrevistaRoutingModule { }
