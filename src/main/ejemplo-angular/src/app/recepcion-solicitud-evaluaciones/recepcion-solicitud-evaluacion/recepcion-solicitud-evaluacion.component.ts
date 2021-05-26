import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecepcionSolicitudEvaluacion } from '../shared/recepcion-solicitud-evaluacion';
import { Usuario } from '../../usuarios/shared/usuario';
import { SolicitudEvaluacionCorneal } from '../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal';

@Component({
  selector: 'app-recepcion-solicitud-evaluacion',
  templateUrl: './recepcion-solicitud-evaluacion.component.html',
  styleUrls: ['./recepcion-solicitud-evaluacion.component.css'],
})
export class RecepcionSolicitudEvaluacionComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() recepcionSolicitudEvaluacionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosRecepcionSolicitudEvaluacion;
  @Input() recepcionSolicitudEvaluacion:RecepcionSolicitudEvaluacion;
  @Input() recepcionSolicitudEvaluacionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() recepcionSolicitudEvaluacionChange = new EventEmitter<RecepcionSolicitudEvaluacion>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario;
  usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEditar : boolean = false;
  @Input() lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal;
  idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEditar : boolean = false;

  @Input() public usuarioLogueado: Usuario;
  @Input() public solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal;
  @Input() public viewModeEvaluacion: boolean;
  @Input() public enableIzquierda: boolean;
  @Input() public enableDerecha: boolean;
  constructor( ) { }
    actualizarRecepcionSolicitudEvaluacion() {
        if (this.recepcionSolicitudEvaluacion.id == null) {
            this.recepcionSolicitudEvaluacionService.guardarRecepcionSolicitudEvaluacion(this.recepcionSolicitudEvaluacion, this.evtGuardar, this);
        } else {
            this.recepcionSolicitudEvaluacionService.actualizarRecepcionSolicitudEvaluacion(this.recepcionSolicitudEvaluacion, this.evtActualiza, this);
        }
    }
    evtGuardar(recepcionSolicitudEvaluacion, obj) {
        obj.recepcionSolicitudEvaluacion = recepcionSolicitudEvaluacion;
        obj.recepcionSolicitudEvaluacionChange.emit(obj.recepcionSolicitudEvaluacion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.recepcionSolicitudEvaluacionChange.emit(obj.recepcionSolicitudEvaluacion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarRecepcionSolicitudEvaluacion() ;
            }
        }
    }


  ngOnInit() {
  }

  get fechaRecepcion() {
    if (!this.solicitudEvaluacionCorneal) {
      return null;
    }
    return new Date(
      this.solicitudEvaluacionCorneal.fechaRegistro
    );
  }
}
