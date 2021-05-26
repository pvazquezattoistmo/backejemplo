import { SolicitudTejidoCorneal } from './../shared/solicitud-tejido-corneal';
import { Component, OnInit, Input } from '@angular/core';
import { SolicitudTejidoCornealService } from '../shared/solicitud-tejido-corneal.service';

@Component({
  selector: 'app-detalle-tejido-corneal',
  templateUrl: './detalle-tejido-corneal.component.html',
  styleUrls: ['./detalle-tejido-corneal.component.css'],
  providers:[SolicitudTejidoCornealService]
})
export class DetalleTejidoCornealComponent implements OnInit {
  @Input()
  public id  = 66;
  public datos: any = {
    idSolicitud: "CDMX/10/2018/0001",
    estado:"CDMX",
    hospitalSolicitante : "CENTRO MÉDICO 20 DE NOVIEMBRE",
    nombreOftanmologo: "Antonio Limón Martinez",
    telefono: "5530252418",
    correoElectronico: "antonio.limon@gmail.com.mx",
    nombre:"Luz Maria",
    apellido1:"Peña",
    apellido2: "Ibarra",
    edad:"35",
    sexo:"Femenino",
    noExpediente: "CDMX/10/0312",
    diagnostico: "Cataratas",
    cirujiasPrevistas: "QP, DSAEK",
    corneaSolicitada: 2,
    fechaCirugia : "17/07/2018"
  };
  constructor(public solicitudTejidoCornealService:SolicitudTejidoCornealService) { }
  ngOnChanges(changes) {
    if (changes.id && changes.id.currentValue ) {
      this.solicitudTejidoCornealService.getDetalleSolicitudTejidoCorneales(changes.id.currentValue ,this.evtBuscar,this);
    }
  }
  evtBuscar(datos, obj) {
    obj.datos = datos;

  }
  ngOnInit() {
    if (this.id) {
      this.solicitudTejidoCornealService.getDetalleSolicitudTejidoCorneales(this.id,this.evtBuscar,this);
    }
  }

}
