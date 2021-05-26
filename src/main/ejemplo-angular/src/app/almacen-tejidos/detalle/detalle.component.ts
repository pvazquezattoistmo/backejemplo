import { SolicitudTejidoCornealAlmacen } from '../../solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen';
import { SolicitudTejidoCornealAlmacenService } from './../../solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.service';
import { AlmacenEvaluacionService } from './../../almacen-evaluaciones/shared/almacen-evaluacion.service';
import { AlmacenEvaluacion } from './../../almacen-evaluaciones/shared/almacen-evaluacion';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers: [SolicitudTejidoCornealAlmacenService]
})
export class DetalleComponent implements OnInit {
  @Input() public id: number;

  public data;
  constructor(private solicitudTejidoCornealAlmacenService: SolicitudTejidoCornealAlmacenService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.id && changes.id.currentValue ) {
      const almacen = new SolicitudTejidoCornealAlmacen();
      almacen.id = changes.id.currentValue;
      this.solicitudTejidoCornealAlmacenService.lazySolicitudTejidoCornealAlmacen(almacen ,this.evtBuscar,this);
    }
  }

  evtBuscar(datos, obj) {
    (datos);
    obj.data = datos;

  }

}
