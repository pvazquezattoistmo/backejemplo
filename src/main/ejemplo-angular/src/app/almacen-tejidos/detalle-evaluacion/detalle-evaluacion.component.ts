import { AlmacenEvaluacionService } from './../../almacen-evaluaciones/shared/almacen-evaluacion.service';
import { AlmacenEvaluacion } from './../../almacen-evaluaciones/shared/almacen-evaluacion';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-evaluacion',
  templateUrl: './detalle-evaluacion.component.html',
  styleUrls: ['./detalle-evaluacion.component.css'],
  providers: [AlmacenEvaluacionService]
})
export class DetalleEvaluacionComponent implements OnInit {
  @Input() public id: number;

  public data;
  constructor(private almacenEvaluacionService: AlmacenEvaluacionService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.id && changes.id.currentValue ) {
      const almacen = new AlmacenEvaluacion();
      almacen.id = changes.id.currentValue
      this.almacenEvaluacionService.lazyAlmacenEvaluacion(almacen ,this.evtBuscar,this);
    }
  }

  evtBuscar(datos, obj) {
    (datos);
    obj.data = datos;

  }

}
