import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OficioDonacion } from '../shared/oficio-donacion';

@Component({
  selector: 'app-oficio-donacion-conjunto',
  templateUrl: './oficio-donacion-conjunto.component.html',
  styleUrls: ['./oficio-donacion-conjunto.component.css'],
})
export class OficioDonacionConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() oficioDonacionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosOficioDonacion;
  @Input() ocultarConjuntosOficioDonacion;
  @Input() oficioDonacionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovOficioDonacionUsuario;
  usuarioUltMovOficioDonacionUsuarioEditar : boolean = false;
  @Input() lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion;
  idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEditar : boolean = false;

  public listaOficioDonacionN: OficioDonacion[] = [];
  @Input() public listaOficioDonacion: OficioDonacion[] = [];
  @Output() public listaOficioDonacionChange = new EventEmitter<OficioDonacion[]>();
  @Input() public oficioDonacionN: OficioDonacion = new OficioDonacion();
  @Output() public oficioDonacionNChange = new EventEmitter<OficioDonacion>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(oficioDonacion, tipo) {
        this.idSeleccionado = tipo + "-" + oficioDonacion.id;
        this.oficioDonacionN = oficioDonacion;
    }

    ngOnInit() {
        this.oficioDonacionN.id = 0;
        this.listaOficioDonacionN.push(Object.assign({}, this.oficioDonacionN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new OficioDonacion();
        pg.id = this.listaOficioDonacionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaOficioDonacionN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let oficioDonacion of this.listaOficioDonacion) {
            this.oficioDonacionService.actualizarOficioDonacion(oficioDonacion, this.evtActualiza, this);
        }
        for (let oficioDonacion of this.listaOficioDonacionN) {
            oficioDonacion.id = null;
            this.oficioDonacionService.guardarOficioDonacion(oficioDonacion, this.evtGuardar, this);
        }
    }
    evtGuardar(oficioDonacion, obj) {
        obj.agregados++;
        obj.listaOficioDonacion.push(oficioDonacion);
        if (obj.agregados >= obj.listaOficioDonacionN.length) {
            obj.oficioDonacionN = new OficioDonacion();
            obj.listaOficioDonacionN = [];
            obj.oficioDonacionN.id = 0;
            obj.idSeleccionado = "N-" + obj.oficioDonacionN.id;
            obj.listaOficioDonacionN.push(Object.assign({}, obj.oficioDonacionN));
            obj.listaOficioDonacionChange.emit(obj.listaOficioDonacion);
        }
        if (obj.agregados >= obj.listaOficioDonacionN.length && 
            obj.actualizados >= obj.listaOficioDonacion.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaOficioDonacionN.length && 
            obj.actualizados >= obj.listaOficioDonacion.length  ) {
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
