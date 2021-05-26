import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { AlmacenEvaluacionRoutingModule } from './almacen-evaluacion-routing.module';
import { AlmacenEvaluacionCrudComponent } from './almacen-evaluacion-crud/almacen-evaluacion-crud.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AlmacenEvaluacionTableBandejaComponent } from './almacen-evaluacion-table-bandeja/almacen-evaluacion-table-bandeja.component';
import { IngresoSolictudTejidoComponent } from './ingreso-solictud-tejido/ingreso-solictud-tejido.component';
import { SolicitudTejidoCornealModule } from '../solicitud-tejido-corneales/solicitud-tejido-corneal.module';
import { PersonalizadosModule } from '../core/componentes-personalizados/personalizados.module';

@NgModule({
  imports: [
    CommonModule,
    AlmacenEvaluacionRoutingModule,
    GridModule,
    FormsModule,
    DateInputsModule,
    DropDownsModule,
    SolicitudTejidoCornealModule,
    PersonalizadosModule
  ],
  declarations: [AlmacenEvaluacionCrudComponent,AlmacenEvaluacionTableBandejaComponent, IngresoSolictudTejidoComponent]
})
export class AlmacenEvaluacionModule { }
