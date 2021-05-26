import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SolicitudTejidoCornealAlmacen } from '../shared/solicitud-tejido-corneal-almacen';

@Component({
  selector: 'app-solicitud-tejido-corneal-almacen-conjunto',
  templateUrl: './solicitud-tejido-corneal-almacen-conjunto.component.html',
  styleUrls: ['./solicitud-tejido-corneal-almacen-conjunto.component.css'],
})
export class SolicitudTejidoCornealAlmacenConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() solicitudTejidoCornealAlmacenBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosSolicitudTejidoCornealAlmacen;
  @Input() ocultarConjuntosSolicitudTejidoCornealAlmacen;
  @Input() solicitudTejidoCornealAlmacenService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovSolicitudTejidoCornealAlmacenUsuario;
  usuarioUltMovSolicitudTejidoCornealAlmacenUsuarioEditar : boolean = false;
  @Input() lista_idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcion;
  idsolicitudTejidoCornealRecepcionSolicitudTejidoCornealAlmacenSolicitudTejidoCornealRecepcionEditar : boolean = false;

  public listaSolicitudTejidoCornealAlmacenN: SolicitudTejidoCornealAlmacen[] = [];
  @Input() public listaSolicitudTejidoCornealAlmacen: SolicitudTejidoCornealAlmacen[] = [];
  @Output() public listaSolicitudTejidoCornealAlmacenChange = new EventEmitter<SolicitudTejidoCornealAlmacen[]>();
  @Input() public solicitudTejidoCornealAlmacenN: SolicitudTejidoCornealAlmacen = new SolicitudTejidoCornealAlmacen();
  @Output() public solicitudTejidoCornealAlmacenNChange = new EventEmitter<SolicitudTejidoCornealAlmacen>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(solicitudTejidoCornealAlmacen, tipo) {
        this.idSeleccionado = tipo + "-" + solicitudTejidoCornealAlmacen.id;
        this.solicitudTejidoCornealAlmacenN = solicitudTejidoCornealAlmacen;
    }

    ngOnInit() {
        this.solicitudTejidoCornealAlmacenN.id = 0;
        this.listaSolicitudTejidoCornealAlmacenN.push(Object.assign({}, this.solicitudTejidoCornealAlmacenN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new SolicitudTejidoCornealAlmacen();
        pg.id = this.listaSolicitudTejidoCornealAlmacenN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaSolicitudTejidoCornealAlmacenN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let solicitudTejidoCornealAlmacen of this.listaSolicitudTejidoCornealAlmacen) {
            this.solicitudTejidoCornealAlmacenService.actualizarSolicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen, this.evtActualiza, this);
        }
        for (let solicitudTejidoCornealAlmacen of this.listaSolicitudTejidoCornealAlmacenN) {
            solicitudTejidoCornealAlmacen.id = null;
            this.solicitudTejidoCornealAlmacenService.guardarSolicitudTejidoCornealAlmacen(solicitudTejidoCornealAlmacen, this.evtGuardar, this);
        }
    }
    evtGuardar(solicitudTejidoCornealAlmacen, obj) {
        obj.agregados++;
        obj.listaSolicitudTejidoCornealAlmacen.push(solicitudTejidoCornealAlmacen);
        if (obj.agregados >= obj.listaSolicitudTejidoCornealAlmacenN.length) {
            obj.solicitudTejidoCornealAlmacenN = new SolicitudTejidoCornealAlmacen();
            obj.listaSolicitudTejidoCornealAlmacenN = [];
            obj.solicitudTejidoCornealAlmacenN.id = 0;
            obj.idSeleccionado = "N-" + obj.solicitudTejidoCornealAlmacenN.id;
            obj.listaSolicitudTejidoCornealAlmacenN.push(Object.assign({}, obj.solicitudTejidoCornealAlmacenN));
            obj.listaSolicitudTejidoCornealAlmacenChange.emit(obj.listaSolicitudTejidoCornealAlmacen);
        }
        if (obj.agregados >= obj.listaSolicitudTejidoCornealAlmacenN.length && 
            obj.actualizados >= obj.listaSolicitudTejidoCornealAlmacen.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaSolicitudTejidoCornealAlmacenN.length && 
            obj.actualizados >= obj.listaSolicitudTejidoCornealAlmacen.length  ) {
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
