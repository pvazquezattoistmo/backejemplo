import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OficioDonacion } from '../shared/oficio-donacion';
import { RecepcionSolicitudEvaluacion } from '../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion';
import { AlmacenTejido } from '../../almacen-tejidos/shared/almacen-tejido';
import { GestionMuestraMicrobiologia } from '../../gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia';
import { DocumentacionDonacion } from '../../documentacion-donaciones/shared/documentacion-donacion';
import { CaracteristicaDonacion } from '../../caracteristica-donaciones/shared/caracteristica-donacion';

@Component({
  selector: 'app-oficio-donacion',
  templateUrl: './oficio-donacion.component.html',
  styleUrls: ['./oficio-donacion.component.css'],
})
export class OficioDonacionComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() oficioDonacionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosOficioDonacion;
  @Input() oficioDonacion:OficioDonacion;
  @Input() oficioDonacionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() oficioDonacionChange = new EventEmitter<OficioDonacion>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovOficioDonacionUsuario;
  usuarioUltMovOficioDonacionUsuarioEditar : boolean = false;
  @Input() lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion;
  idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEditar : boolean = false;
  @Input() recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion;
  @Input() almacenTejido: AlmacenTejido;
  @Input() gestionMuestraMicrobiologia: GestionMuestraMicrobiologia;
  @Input() documentacionDonacion: DocumentacionDonacion;
  @Input() caracteristicaDonacion: CaracteristicaDonacion;
  donanteCadaver: number;
  @Input() enable: boolean;

  constructor( ) { }
    actualizarOficioDonacion() {
        if (this.oficioDonacion.id == null) {
            this.oficioDonacionService.guardarOficioDonacion(this.oficioDonacion, this.evtGuardar, this);
        } else {
            this.oficioDonacionService.actualizarOficioDonacion(this.oficioDonacion, this.evtActualiza, this);
        }
    }
    evtGuardar(oficioDonacion, obj) {
        obj.oficioDonacion = oficioDonacion;
        obj.oficioDonacionChange.emit(obj.oficioDonacion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.oficioDonacionChange.emit(obj.oficioDonacion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion = 1;
                this.actualizarOficioDonacion() ;
            }
        }
        if(changes.recepcionSolicitudEvaluacion && changes.recepcionSolicitudEvaluacion.currentValue.idsolicitudEvaluacionCorneal){
          (changes.recepcionSolicitudEvaluacion.currentValue.idsolicitudEvaluacionCorneal.idcausaMuerte.tipoCausaMuerte);
          this.donanteCadaver = changes.recepcionSolicitudEvaluacion.currentValue.idsolicitudEvaluacionCorneal.idcausaMuerte.tipoCausaMuerte == 1 ? 1 : 0;
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
