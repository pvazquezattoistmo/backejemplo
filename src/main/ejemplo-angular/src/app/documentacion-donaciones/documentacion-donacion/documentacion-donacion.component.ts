import { RecepcionSolicitudEvaluacion } from './../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DocumentacionDonacion } from '../shared/documentacion-donacion';

@Component({
  selector: 'app-documentacion-donacion',
  templateUrl: './documentacion-donacion.component.html',
  styleUrls: ['./documentacion-donacion.component.css'],
})
export class DocumentacionDonacionComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() documentacionDonacionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosDocumentacionDonacion;
  @Input() documentacionDonacion:DocumentacionDonacion;
  @Input() documentacionDonacionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() documentacionDonacionChange = new EventEmitter<DocumentacionDonacion>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovDocumentacionDonacionUsuario;
  usuarioUltMovDocumentacionDonacionUsuarioEditar : boolean = false;
  @Input() lista_idoficioDonacionDocumentacionDonacionOficioDonacion;
  idoficioDonacionDocumentacionDonacionOficioDonacionEditar : boolean = false;
  @Input() public recepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion;
  @Input() enable: boolean;

  constructor( ) { }
    actualizarDocumentacionDonacion() {
        if (this.documentacionDonacion.id == null) {
            this.documentacionDonacionService.guardarDocumentacionDonacion(this.documentacionDonacion, this.evtGuardar, this);
        } else {
            this.documentacionDonacionService.actualizarDocumentacionDonacion(this.documentacionDonacion, this.evtActualiza, this);
        }
    }
    evtGuardar(documentacionDonacion, obj) {
        obj.documentacionDonacion = documentacionDonacion;
        obj.documentacionDonacionChange.emit(obj.documentacionDonacion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.documentacionDonacionChange.emit(obj.documentacionDonacion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarDocumentacionDonacion() ;
            }
        }
        if (changes.permisosAtributos && changes.permisosAtributos.currentValue && this.enable) {
          changes.permisosAtributos.currentValue.forEach(element => {
            element.permiso = 2;
            return element;
          });
        }
    }


  ngOnInit() {
  }


}
