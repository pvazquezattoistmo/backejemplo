import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SolicitudTejidoCornealRecepcion } from '../shared/solicitud-tejido-corneal-recepcion';

@Component({
  selector: 'app-solicitud-tejido-corneal-recepcion-conjunto',
  templateUrl: './solicitud-tejido-corneal-recepcion-conjunto.component.html',
  styleUrls: ['./solicitud-tejido-corneal-recepcion-conjunto.component.css'],
})
export class SolicitudTejidoCornealRecepcionConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() solicitudTejidoCornealRecepcionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosSolicitudTejidoCornealRecepcion;
  @Input() ocultarConjuntosSolicitudTejidoCornealRecepcion;
  @Input() solicitudTejidoCornealRecepcionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovSolicitudTejidoCornealRecepcionUsuario;
  usuarioUltMovSolicitudTejidoCornealRecepcionUsuarioEditar : boolean = false;
  @Input() lista_idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCorneal;
  idsolicitudTejidoCornealSolicitudTejidoCornealRecepcionSolicitudTejidoCornealEditar : boolean = false;

  public listaSolicitudTejidoCornealRecepcionN: SolicitudTejidoCornealRecepcion[] = [];
  @Input() public listaSolicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion[] = [];
  @Output() public listaSolicitudTejidoCornealRecepcionChange = new EventEmitter<SolicitudTejidoCornealRecepcion[]>();
  @Input() public solicitudTejidoCornealRecepcionN: SolicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
  @Output() public solicitudTejidoCornealRecepcionNChange = new EventEmitter<SolicitudTejidoCornealRecepcion>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(solicitudTejidoCornealRecepcion, tipo) {
        this.idSeleccionado = tipo + "-" + solicitudTejidoCornealRecepcion.id;
        this.solicitudTejidoCornealRecepcionN = solicitudTejidoCornealRecepcion;
    }

    ngOnInit() {
        this.solicitudTejidoCornealRecepcionN.id = 0;
        this.listaSolicitudTejidoCornealRecepcionN.push(Object.assign({}, this.solicitudTejidoCornealRecepcionN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new SolicitudTejidoCornealRecepcion();
        pg.id = this.listaSolicitudTejidoCornealRecepcionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaSolicitudTejidoCornealRecepcionN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let solicitudTejidoCornealRecepcion of this.listaSolicitudTejidoCornealRecepcion) {
            this.solicitudTejidoCornealRecepcionService.actualizarSolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion, this.evtActualiza, this);
        }
        for (let solicitudTejidoCornealRecepcion of this.listaSolicitudTejidoCornealRecepcionN) {
            solicitudTejidoCornealRecepcion.id = null;
            this.solicitudTejidoCornealRecepcionService.guardarSolicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion, this.evtGuardar, this);
        }
    }
    evtGuardar(solicitudTejidoCornealRecepcion, obj) {
        obj.agregados++;
        obj.listaSolicitudTejidoCornealRecepcion.push(solicitudTejidoCornealRecepcion);
        if (obj.agregados >= obj.listaSolicitudTejidoCornealRecepcionN.length) {
            obj.solicitudTejidoCornealRecepcionN = new SolicitudTejidoCornealRecepcion();
            obj.listaSolicitudTejidoCornealRecepcionN = [];
            obj.solicitudTejidoCornealRecepcionN.id = 0;
            obj.idSeleccionado = "N-" + obj.solicitudTejidoCornealRecepcionN.id;
            obj.listaSolicitudTejidoCornealRecepcionN.push(Object.assign({}, obj.solicitudTejidoCornealRecepcionN));
            obj.listaSolicitudTejidoCornealRecepcionChange.emit(obj.listaSolicitudTejidoCornealRecepcion);
        }
        if (obj.agregados >= obj.listaSolicitudTejidoCornealRecepcionN.length && 
            obj.actualizados >= obj.listaSolicitudTejidoCornealRecepcion.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaSolicitudTejidoCornealRecepcionN.length && 
            obj.actualizados >= obj.listaSolicitudTejidoCornealRecepcion.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }            
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizaTodo() ;
            }
        }
    }
  
}
