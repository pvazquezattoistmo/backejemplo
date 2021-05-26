import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { CausaMuerteListKendoComponent }   from '../causa-muertes/causa-muerte-list-kendo/causa-muerte-list-kendo.component';
import { CausaMuerteCrudComponent }   from '../causa-muertes/causa-muerte-crud/causa-muerte-crud.component';
import { CausaMuerteTableComponent }   from '../causa-muertes/causa-muerte-table/causa-muerte-table.component';


const routes: Routes = [
  { path: 'causa-muerte-list-kendo',  component: CausaMuerteListKendoComponent },
  { path: 'causa-muerte-crud',  component: CausaMuerteCrudComponent },
  { path: 'causa-muerte-table',  component: CausaMuerteTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CausaMuerteRoutingModule { }
