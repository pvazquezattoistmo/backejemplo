import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { LamparaHendiduraListKendoComponent }   from '../lampara-hendiduras/lampara-hendidura-list-kendo/lampara-hendidura-list-kendo.component';
import { LamparaHendiduraCrudComponent }   from '../lampara-hendiduras/lampara-hendidura-crud/lampara-hendidura-crud.component';
import { LamparaHendiduraTableComponent }   from '../lampara-hendiduras/lampara-hendidura-table/lampara-hendidura-table.component';


const routes: Routes = [
  { path: 'lampara-hendidura-list-kendo',  component: LamparaHendiduraListKendoComponent },
  { path: 'lampara-hendidura-crud/:id',  component: LamparaHendiduraCrudComponent },
  { path: 'lampara-hendidura-table',  component: LamparaHendiduraTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LamparaHendiduraRoutingModule { }
