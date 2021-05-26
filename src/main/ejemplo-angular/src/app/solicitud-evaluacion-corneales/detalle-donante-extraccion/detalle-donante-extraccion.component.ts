import { SolicitudEvaluacionCorneal } from './../shared/solicitud-evaluacion-corneal';
import { Component, OnInit, Input } from '@angular/core';
import { SolicitudEvaluacionCornealService } from '../shared/solicitud-evaluacion-corneal.service';

@Component({
  selector: 'app-detalle-donante-extraccion',
  templateUrl: './detalle-donante-extraccion.component.html',
  styleUrls: ['./detalle-donante-extraccion.component.css'],
  providers:[SolicitudEvaluacionCornealService]
})
export class DetalleDonanteExtraccionComponent implements OnInit {
  @Input()
  public id  = 66;

  public datos: any = {
    tipo: "Donante de tejido",
    idSolEva: "CDMX/10/2018/0",
    idCenatraCI: "999999",
    idCenatraCD: "999999",
    edad:"45 años",
    nombre:"Sergio",
    apellido1:"Escalante",
    apellido2: "Zenon",
    fechaExtraccionCI:"17/07/2018",
    horaExtInicioCI: "03:00 am",
    horaExtFinCI: "05:00 am",
    fechaExtraccionCD: "17/07/2018",
    horaExtInicioCD: "08:00 am",
    horaExtFinCD: "10:00 am",
    lugarExtraccion: "CENTRO MÉDICO 20 DE NOVIEMBRE",
    fechaBanco : "17/07/2018"
  };
  constructor(public solicitudEvaluacionCornealService:SolicitudEvaluacionCornealService) { }
  ngOnChanges(changes) {
    if (changes.id && changes.id.currentValue ) {
      this.solicitudEvaluacionCornealService.getSolicitudesEvaluacionByID(changes.id.currentValue ,this.evtBuscar,this);
    }
  }
  evtBuscar(datos, obj) {
    (datos);
    obj.datos = datos;

  }
  ngOnInit() {
    if (this.id) {
      this.solicitudEvaluacionCornealService.getSolicitudesEvaluacionByID(this.id,this.evtBuscar,this);
    }
  }

}
