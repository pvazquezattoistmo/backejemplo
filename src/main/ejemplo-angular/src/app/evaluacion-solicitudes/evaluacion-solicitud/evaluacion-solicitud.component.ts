import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EvaluacionSolicitud } from '../shared/evaluacion-solicitud';

@Component({
  selector: 'app-evaluacion-solicitud',
  templateUrl: './evaluacion-solicitud.component.html',
  styleUrls: ['./evaluacion-solicitud.component.css'],
})
export class EvaluacionSolicitudComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() evaluacionSolicitudBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosEvaluacionSolicitud;
  @Input() evaluacionSolicitud:EvaluacionSolicitud;
  @Input() evaluacionSolicitudService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() evaluacionSolicitudChange = new EventEmitter<EvaluacionSolicitud>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovEvaluacionSolicitudUsuario;
  usuarioUltMovEvaluacionSolicitudUsuarioEditar : boolean = false;
  @Input() lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion;
  idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEditar : boolean = false;


  constructor( ) { }
    actualizarEvaluacionSolicitud() {
        if (this.evaluacionSolicitud.id == null) {
            this.evaluacionSolicitudService.guardarEvaluacionSolicitud(this.evaluacionSolicitud, this.evtGuardar, this);
        } else {
            this.evaluacionSolicitudService.actualizarEvaluacionSolicitud(this.evaluacionSolicitud, this.evtActualiza, this);
        }
    }
    evtGuardar(evaluacionSolicitud, obj) {
        obj.evaluacionSolicitud = evaluacionSolicitud;
        obj.evaluacionSolicitudChange.emit(obj.evaluacionSolicitud);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.evaluacionSolicitudChange.emit(obj.evaluacionSolicitud);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarEvaluacionSolicitud() ;
            }
        }
    }

    ngOnInit() {
      if (this.evaluacionSolicitud.id) {
        this.evaluacionSolicitudService.getTramitesIngresados();
      }
    }
}
