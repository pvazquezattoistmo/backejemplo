import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TejidosSolicitadosComponent } from './tejidos-solicitados/tejidos-solicitados.component';
import { TejidosProcuracionComponent } from './tejidos-procuracion/tejidos-procuracion.component';
import { PrincipalComponent } from './principal/principal.component';
import { TableroRoutingModule } from './tablero-routing.module';
@NgModule({
  imports: [CommonModule, TableroRoutingModule],
  declarations: [TejidosSolicitadosComponent, TejidosProcuracionComponent, PrincipalComponent],
  exports: [TejidosSolicitadosComponent, TejidosProcuracionComponent, PrincipalComponent]
})
export class TableroModule {}
