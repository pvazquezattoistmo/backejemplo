import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EvaluacionSolicitud } from '../shared/evaluacion-solicitud';

@Component({
  selector: 'app-evaluacion-solicitud-conjunto',
  templateUrl: './evaluacion-solicitud-conjunto.component.html',
  styleUrls: ['./evaluacion-solicitud-conjunto.component.css'],
})
export class EvaluacionSolicitudConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() evaluacionSolicitudBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosEvaluacionSolicitud;
  @Input() ocultarConjuntosEvaluacionSolicitud;
  @Input() evaluacionSolicitudService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovEvaluacionSolicitudUsuario;
  usuarioUltMovEvaluacionSolicitudUsuarioEditar : boolean = false;
  @Input() lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion;
  idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEditar : boolean = false;

  public listaEvaluacionSolicitudN: EvaluacionSolicitud[] = [];
  @Input() public listaEvaluacionSolicitud: EvaluacionSolicitud[] = [];
  @Output() public listaEvaluacionSolicitudChange = new EventEmitter<EvaluacionSolicitud[]>();
  @Input() public evaluacionSolicitudN: EvaluacionSolicitud = new EvaluacionSolicitud();
  @Output() public evaluacionSolicitudNChange = new EventEmitter<EvaluacionSolicitud>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(evaluacionSolicitud, tipo) {
        this.idSeleccionado = tipo + "-" + evaluacionSolicitud.id;
        this.evaluacionSolicitudN = evaluacionSolicitud;
    }

    ngOnInit() {
        this.evaluacionSolicitudN.id = 0;
        this.listaEvaluacionSolicitudN.push(Object.assign({}, this.evaluacionSolicitudN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new EvaluacionSolicitud();
        pg.id = this.listaEvaluacionSolicitudN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaEvaluacionSolicitudN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let evaluacionSolicitud of this.listaEvaluacionSolicitud) {
            this.evaluacionSolicitudService.actualizarEvaluacionSolicitud(evaluacionSolicitud, this.evtActualiza, this);
        }
        for (let evaluacionSolicitud of this.listaEvaluacionSolicitudN) {
            evaluacionSolicitud.id = null;
            this.evaluacionSolicitudService.guardarEvaluacionSolicitud(evaluacionSolicitud, this.evtGuardar, this);
        }
    }
    evtGuardar(evaluacionSolicitud, obj) {
        obj.agregados++;
        obj.listaEvaluacionSolicitud.push(evaluacionSolicitud);
        if (obj.agregados >= obj.listaEvaluacionSolicitudN.length) {
            obj.evaluacionSolicitudN = new EvaluacionSolicitud();
            obj.listaEvaluacionSolicitudN = [];
            obj.evaluacionSolicitudN.id = 0;
            obj.idSeleccionado = "N-" + obj.evaluacionSolicitudN.id;
            obj.listaEvaluacionSolicitudN.push(Object.assign({}, obj.evaluacionSolicitudN));
            obj.listaEvaluacionSolicitudChange.emit(obj.listaEvaluacionSolicitud);
        }
        if (obj.agregados >= obj.listaEvaluacionSolicitudN.length && 
            obj.actualizados >= obj.listaEvaluacionSolicitud.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaEvaluacionSolicitudN.length && 
            obj.actualizados >= obj.listaEvaluacionSolicitud.length  ) {
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
