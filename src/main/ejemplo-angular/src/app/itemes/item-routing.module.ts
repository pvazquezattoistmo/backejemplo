import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { ItemListKendoComponent }   from '../itemes/item-list-kendo/item-list-kendo.component';
import { ItemCrudComponent }   from '../itemes/item-crud/item-crud.component';
import { ItemTableComponent }   from '../itemes/item-table/item-table.component';


const routes: Routes = [
  { path: 'item-list-kendo',  component: ItemListKendoComponent },
  { path: 'item-crud',  component: ItemCrudComponent },
  { path: 'item-table',  component: ItemTableComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
