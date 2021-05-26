import { RecepcionSolicitudEvaluacion } from './../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CaracteristicaDonacion } from '../shared/caracteristica-donacion';

@Component({
  selector: 'app-caracteristica-donacion',
  templateUrl: './caracteristica-donacion.component.html',
  styleUrls: ['./caracteristica-donacion.component.css'],
})
export class CaracteristicaDonacionComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() caracteristicaDonacionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosCaracteristicaDonacion;
  @Input() caracteristicaDonacion:CaracteristicaDonacion;
  @Input() caracteristicaDonacionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() caracteristicaDonacionChange = new EventEmitter<CaracteristicaDonacion>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovCaracteristicaDonacionUsuario;
  usuarioUltMovCaracteristicaDonacionUsuarioEditar : boolean = false;
  @Input() lista_idoficioDonacionCaracteristicaDonacionOficioDonacion;
  idoficioDonacionCaracteristicaDonacionOficioDonacionEditar : boolean = false;
  @Input() enable: boolean;
  @Input() recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion;
  constructor( ) { }
    actualizarCaracteristicaDonacion() {
        if (this.caracteristicaDonacion.id == null) {
            this.caracteristicaDonacionService.guardarCaracteristicaDonacion(this.caracteristicaDonacion, this.evtGuardar, this);
        } else {
            this.caracteristicaDonacionService.actualizarCaracteristicaDonacion(this.caracteristicaDonacion, this.evtActualiza, this);
        }
    }
    evtGuardar(caracteristicaDonacion, obj) {
        obj.caracteristicaDonacion = caracteristicaDonacion;
        obj.caracteristicaDonacionChange.emit(obj.caracteristicaDonacion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.caracteristicaDonacionChange.emit(obj.caracteristicaDonacion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarCaracteristicaDonacion() ;
            }
        }
        if (changes.permisosAtributos && changes.permisosAtributos.currentValue && !this.enable) {
          changes.permisosAtributos.currentValue.forEach(element => {
            element.permiso = 2;
            return element;
          });
        }
    }


  ngOnInit() {
  }


}
