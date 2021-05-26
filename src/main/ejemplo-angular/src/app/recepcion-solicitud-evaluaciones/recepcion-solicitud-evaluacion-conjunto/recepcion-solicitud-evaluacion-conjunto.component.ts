import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecepcionSolicitudEvaluacion } from '../shared/recepcion-solicitud-evaluacion';

@Component({
  selector: 'app-recepcion-solicitud-evaluacion-conjunto',
  templateUrl: './recepcion-solicitud-evaluacion-conjunto.component.html',
  styleUrls: ['./recepcion-solicitud-evaluacion-conjunto.component.css'],
})
export class RecepcionSolicitudEvaluacionConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() recepcionSolicitudEvaluacionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosRecepcionSolicitudEvaluacion;
  @Input() ocultarConjuntosRecepcionSolicitudEvaluacion;
  @Input() recepcionSolicitudEvaluacionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovRecepcionSolicitudEvaluacionUsuario;
  usuarioUltMovRecepcionSolicitudEvaluacionUsuarioEditar : boolean = false;
  @Input() lista_idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCorneal;
  idsolicitudEvaluacionCornealRecepcionSolicitudEvaluacionSolicitudEvaluacionCornealEditar : boolean = false;

  public listaRecepcionSolicitudEvaluacionN: RecepcionSolicitudEvaluacion[] = [];
  @Input() public listaRecepcionSolicitudEvaluacion: RecepcionSolicitudEvaluacion[] = [];
  @Output() public listaRecepcionSolicitudEvaluacionChange = new EventEmitter<RecepcionSolicitudEvaluacion[]>();
  @Input() public recepcionSolicitudEvaluacionN: RecepcionSolicitudEvaluacion = new RecepcionSolicitudEvaluacion();
  @Output() public recepcionSolicitudEvaluacionNChange = new EventEmitter<RecepcionSolicitudEvaluacion>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(recepcionSolicitudEvaluacion, tipo) {
        this.idSeleccionado = tipo + "-" + recepcionSolicitudEvaluacion.id;
        this.recepcionSolicitudEvaluacionN = recepcionSolicitudEvaluacion;
    }

    ngOnInit() {
        this.recepcionSolicitudEvaluacionN.id = 0;
        this.listaRecepcionSolicitudEvaluacionN.push(Object.assign({}, this.recepcionSolicitudEvaluacionN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new RecepcionSolicitudEvaluacion();
        pg.id = this.listaRecepcionSolicitudEvaluacionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaRecepcionSolicitudEvaluacionN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let recepcionSolicitudEvaluacion of this.listaRecepcionSolicitudEvaluacion) {
            this.recepcionSolicitudEvaluacionService.actualizarRecepcionSolicitudEvaluacion(recepcionSolicitudEvaluacion, this.evtActualiza, this);
        }
        for (let recepcionSolicitudEvaluacion of this.listaRecepcionSolicitudEvaluacionN) {
            recepcionSolicitudEvaluacion.id = null;
            this.recepcionSolicitudEvaluacionService.guardarRecepcionSolicitudEvaluacion(recepcionSolicitudEvaluacion, this.evtGuardar, this);
        }
    }
    evtGuardar(recepcionSolicitudEvaluacion, obj) {
        obj.agregados++;
        obj.listaRecepcionSolicitudEvaluacion.push(recepcionSolicitudEvaluacion);
        if (obj.agregados >= obj.listaRecepcionSolicitudEvaluacionN.length) {
            obj.recepcionSolicitudEvaluacionN = new RecepcionSolicitudEvaluacion();
            obj.listaRecepcionSolicitudEvaluacionN = [];
            obj.recepcionSolicitudEvaluacionN.id = 0;
            obj.idSeleccionado = "N-" + obj.recepcionSolicitudEvaluacionN.id;
            obj.listaRecepcionSolicitudEvaluacionN.push(Object.assign({}, obj.recepcionSolicitudEvaluacionN));
            obj.listaRecepcionSolicitudEvaluacionChange.emit(obj.listaRecepcionSolicitudEvaluacion);
        }
        if (obj.agregados >= obj.listaRecepcionSolicitudEvaluacionN.length && 
            obj.actualizados >= obj.listaRecepcionSolicitudEvaluacion.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaRecepcionSolicitudEvaluacionN.length && 
            obj.actualizados >= obj.listaRecepcionSolicitudEvaluacion.length  ) {
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
