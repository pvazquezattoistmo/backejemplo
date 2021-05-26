import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SolicitudTejidoCornealRecepcion } from '../shared/solicitud-tejido-corneal-recepcion';
import { TipoCirugiaPrevista } from '../../tipo-cirugia-previstas/shared/tipo-cirugia-prevista';
import { TipoCirugiaPrevistaService } from '../../tipo-cirugia-previstas/shared/tipo-cirugia-prevista.service';

@Component({
  selector: 'app-solicitud-tejido-corneal-recepcion',
  templateUrl: './solicitud-tejido-corneal-recepcion.component.html',
  styleUrls: ['./solicitud-tejido-corneal-recepcion.component.css'],
})
export class SolicitudTejidoCornealRecepcionComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() solicitudTejidoCornealRecepcionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosSolicitudTejidoCornealRecepcion;
  @Input() solicitudTejidoCornealRecepcion:SolicitudTejidoCornealRecepcion;
  solicitudTejidoCornealRecepcionCambio:SolicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
  @Input() solicitudTejidoCornealRecepcionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() solicitudTejidoCornealRecepcionChange = new EventEmitter<SolicitudTejidoCornealRecepcion>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario;
  usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEditar : boolean = false;
  @Input() lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal;
  idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEditar : boolean = false;
  @Input() tipoCirugiaPrevista:TipoCirugiaPrevista;
  @Output() tipoCirugiaPrevistaChange = new EventEmitter<TipoCirugiaPrevista>();

  
  constructor( ) {
    this.solicitudTejidoCornealRecepcionCambio = this.solicitudTejidoCornealRecepcion;
  }
    actualizarSolicitudTejidoCornealRecepcion() {
        if (this.solicitudTejidoCornealRecepcion.id == null) {
            this.solicitudTejidoCornealRecepcionService.guardarSolicitudTejidoCornealRecepcion(this.solicitudTejidoCornealRecepcion, this.evtGuardar, this);
        } else {
            this.solicitudTejidoCornealRecepcionService.actualizarSolicitudTejidoCornealRecepcion(this.solicitudTejidoCornealRecepcion, this.evtActualiza, this);
        }
    }
    evtGuardar(solicitudTejidoCornealRecepcion, obj) {
        obj.solicitudTejidoCornealRecepcion = solicitudTejidoCornealRecepcion;
        obj.solicitudTejidoCornealRecepcionChange.emit(obj.solicitudTejidoCornealRecepcion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.solicitudTejidoCornealRecepcionChange.emit(obj.solicitudTejidoCornealRecepcion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarSolicitudTejidoCornealRecepcion() ;
            }
        }
        let c = this.solicitudTejidoCornealRecepcion;
    }    
    

  ngOnInit() {
  }
  
  
}
