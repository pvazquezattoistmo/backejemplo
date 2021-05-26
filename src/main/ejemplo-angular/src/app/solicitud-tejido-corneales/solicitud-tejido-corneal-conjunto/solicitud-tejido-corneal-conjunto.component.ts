import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SolicitudTejidoCorneal } from '../shared/solicitud-tejido-corneal';

@Component({
  selector: 'app-solicitud-tejido-corneal-conjunto',
  templateUrl: './solicitud-tejido-corneal-conjunto.component.html',
  styleUrls: ['./solicitud-tejido-corneal-conjunto.component.css'],
})
export class SolicitudTejidoCornealConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() solicitudTejidoCornealBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosSolicitudTejidoCorneal;
  @Input() ocultarConjuntosSolicitudTejidoCorneal;
  @Input() solicitudTejidoCornealService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovSolicitudTejidoCornealUsuario;
  usuarioUltMovSolicitudTejidoCornealUsuarioEditar : boolean = false;
  @Input() lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante;
  iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitanteEditar : boolean = false;
  @Input() lista_idhospitalSolicitudTejidoCornealHospital;
  idhospitalSolicitudTejidoCornealHospitalEditar : boolean = false;

  public listaSolicitudTejidoCornealN: SolicitudTejidoCorneal[] = [];
  @Input() public listaSolicitudTejidoCorneal: SolicitudTejidoCorneal[] = [];
  @Output() public listaSolicitudTejidoCornealChange = new EventEmitter<SolicitudTejidoCorneal[]>();
  @Input() public solicitudTejidoCornealN: SolicitudTejidoCorneal = new SolicitudTejidoCorneal();
  @Output() public solicitudTejidoCornealNChange = new EventEmitter<SolicitudTejidoCorneal>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(solicitudTejidoCorneal, tipo) {
        this.idSeleccionado = tipo + "-" + solicitudTejidoCorneal.id;
        this.solicitudTejidoCornealN = solicitudTejidoCorneal;
    }

    ngOnInit() {
        this.solicitudTejidoCornealN.id = 0;
        this.listaSolicitudTejidoCornealN.push(Object.assign({}, this.solicitudTejidoCornealN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new SolicitudTejidoCorneal();
        pg.id = this.listaSolicitudTejidoCornealN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaSolicitudTejidoCornealN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let solicitudTejidoCorneal of this.listaSolicitudTejidoCorneal) {
            this.solicitudTejidoCornealService.actualizarSolicitudTejidoCorneal(solicitudTejidoCorneal, this.evtActualiza, this);
        }
        for (let solicitudTejidoCorneal of this.listaSolicitudTejidoCornealN) {
            solicitudTejidoCorneal.id = null;
            this.solicitudTejidoCornealService.guardarSolicitudTejidoCorneal(solicitudTejidoCorneal, this.evtGuardar, this);
        }
    }
    evtGuardar(solicitudTejidoCorneal, obj) {
        obj.agregados++;
        obj.listaSolicitudTejidoCorneal.push(solicitudTejidoCorneal);
        if (obj.agregados >= obj.listaSolicitudTejidoCornealN.length) {
            obj.solicitudTejidoCornealN = new SolicitudTejidoCorneal();
            obj.listaSolicitudTejidoCornealN = [];
            obj.solicitudTejidoCornealN.id = 0;
            obj.idSeleccionado = "N-" + obj.solicitudTejidoCornealN.id;
            obj.listaSolicitudTejidoCornealN.push(Object.assign({}, obj.solicitudTejidoCornealN));
            obj.listaSolicitudTejidoCornealChange.emit(obj.listaSolicitudTejidoCorneal);
        }
        if (obj.agregados >= obj.listaSolicitudTejidoCornealN.length && 
            obj.actualizados >= obj.listaSolicitudTejidoCorneal.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaSolicitudTejidoCornealN.length && 
            obj.actualizados >= obj.listaSolicitudTejidoCorneal.length  ) {
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
