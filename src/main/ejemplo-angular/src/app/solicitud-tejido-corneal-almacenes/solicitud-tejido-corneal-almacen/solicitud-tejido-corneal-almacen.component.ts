import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SolicitudTejidoCornealAlmacen } from '../shared/solicitud-tejido-corneal-almacen';

@Component({
  selector: 'app-solicitud-tejido-corneal-almacen',
  templateUrl: './solicitud-tejido-corneal-almacen.component.html',
  styleUrls: ['./solicitud-tejido-corneal-almacen.component.css'],
})
export class SolicitudTejidoCornealAlmacenComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() solicitudTejidoCornealAlmacenBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosSolicitudTejidoCornealAlmacen;
  @Input() solicitudTejidoCornealAlmacen:SolicitudTejidoCornealAlmacen;
  @Input() solicitudTejidoCornealAlmacenService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() solicitudTejidoCornealAlmacenChange = new EventEmitter<SolicitudTejidoCornealAlmacen>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario;
  usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEditar : boolean = false;
  @Input() lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion;
  idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEditar : boolean = false;

  
  constructor( ) { }
    actualizarSolicitudTejidoCornealAlmacen() {
        if (this.solicitudTejidoCornealAlmacen.id == null) {
            this.solicitudTejidoCornealAlmacenService.guardarSolicitudTejidoCornealAlmacen(this.solicitudTejidoCornealAlmacen, this.evtGuardar, this);
        } else {
            this.solicitudTejidoCornealAlmacenService.actualizarSolicitudTejidoCornealAlmacen(this.solicitudTejidoCornealAlmacen, this.evtActualiza, this);
        }
    }
    evtGuardar(solicitudTejidoCornealAlmacen, obj) {
        obj.solicitudTejidoCornealAlmacen = solicitudTejidoCornealAlmacen;
        obj.solicitudTejidoCornealAlmacenChange.emit(obj.solicitudTejidoCornealAlmacen);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.solicitudTejidoCornealAlmacenChange.emit(obj.solicitudTejidoCornealAlmacen);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarSolicitudTejidoCornealAlmacen() ;
            }
        }
    }    
    

  ngOnInit() {
  }
  
  
}
