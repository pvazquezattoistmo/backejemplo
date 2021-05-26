import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SolicitudEvaluacionCorneal } from '../shared/solicitud-evaluacion-corneal';

@Component({
  selector: 'app-solicitud-evaluacion-corneal-conjunto',
  templateUrl: './solicitud-evaluacion-corneal-conjunto.component.html',
  styleUrls: ['./solicitud-evaluacion-corneal-conjunto.component.css'],
})
export class SolicitudEvaluacionCornealConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() solicitudEvaluacionCornealBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosSolicitudEvaluacionCorneal;
  @Input() ocultarConjuntosSolicitudEvaluacionCorneal;
  @Input() solicitudEvaluacionCornealService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovSolicitudEvaluacionCornealUsuario;
  usuarioUltMovSolicitudEvaluacionCornealUsuarioEditar : boolean = false;
  @Input() lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte;
  idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEditar : boolean = false;

  public listaSolicitudEvaluacionCornealN: SolicitudEvaluacionCorneal[] = [];
  @Input() public listaSolicitudEvaluacionCorneal: SolicitudEvaluacionCorneal[] = [];
  @Output() public listaSolicitudEvaluacionCornealChange = new EventEmitter<SolicitudEvaluacionCorneal[]>();
  @Input() public solicitudEvaluacionCornealN: SolicitudEvaluacionCorneal = new SolicitudEvaluacionCorneal();
  @Output() public solicitudEvaluacionCornealNChange = new EventEmitter<SolicitudEvaluacionCorneal>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(solicitudEvaluacionCorneal, tipo) {
        this.idSeleccionado = tipo + "-" + solicitudEvaluacionCorneal.id;
        this.solicitudEvaluacionCornealN = solicitudEvaluacionCorneal;
    }

    ngOnInit() {
        this.solicitudEvaluacionCornealN.id = 0;
        this.listaSolicitudEvaluacionCornealN.push(Object.assign({}, this.solicitudEvaluacionCornealN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new SolicitudEvaluacionCorneal();
        pg.id = this.listaSolicitudEvaluacionCornealN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaSolicitudEvaluacionCornealN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let solicitudEvaluacionCorneal of this.listaSolicitudEvaluacionCorneal) {
            this.solicitudEvaluacionCornealService.actualizarSolicitudEvaluacionCorneal(solicitudEvaluacionCorneal, this.evtActualiza, this);
        }
        for (let solicitudEvaluacionCorneal of this.listaSolicitudEvaluacionCornealN) {
            solicitudEvaluacionCorneal.id = null;
            this.solicitudEvaluacionCornealService.guardarSolicitudEvaluacionCorneal(solicitudEvaluacionCorneal, this.evtGuardar, this);
        }
    }
    evtGuardar(solicitudEvaluacionCorneal, obj) {
        obj.agregados++;
        obj.listaSolicitudEvaluacionCorneal.push(solicitudEvaluacionCorneal);
        if (obj.agregados >= obj.listaSolicitudEvaluacionCornealN.length) {
            obj.solicitudEvaluacionCornealN = new SolicitudEvaluacionCorneal();
            obj.listaSolicitudEvaluacionCornealN = [];
            obj.solicitudEvaluacionCornealN.id = 0;
            obj.idSeleccionado = "N-" + obj.solicitudEvaluacionCornealN.id;
            obj.listaSolicitudEvaluacionCornealN.push(Object.assign({}, obj.solicitudEvaluacionCornealN));
            obj.listaSolicitudEvaluacionCornealChange.emit(obj.listaSolicitudEvaluacionCorneal);
        }
        if (obj.agregados >= obj.listaSolicitudEvaluacionCornealN.length && 
            obj.actualizados >= obj.listaSolicitudEvaluacionCorneal.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaSolicitudEvaluacionCornealN.length && 
            obj.actualizados >= obj.listaSolicitudEvaluacionCorneal.length  ) {
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
