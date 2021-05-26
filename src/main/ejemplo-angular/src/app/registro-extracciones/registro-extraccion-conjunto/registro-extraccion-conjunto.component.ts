import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RegistroExtraccion } from '../shared/registro-extraccion';

@Component({
  selector: 'app-registro-extraccion-conjunto',
  templateUrl: './registro-extraccion-conjunto.component.html',
  styleUrls: ['./registro-extraccion-conjunto.component.css'],
})
export class RegistroExtraccionConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() registroExtraccionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosRegistroExtraccion;
  @Input() ocultarConjuntosRegistroExtraccion;
  @Input() registroExtraccionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovRegistroExtraccionUsuario;
  usuarioUltMovRegistroExtraccionUsuarioEditar : boolean = false;
  @Input() lista_idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCorneal;
  idsolicitudEvaluacionCornealRegistroExtraccionSolicitudEvaluacionCornealEditar : boolean = false;

  public listaRegistroExtraccionN: RegistroExtraccion[] = [];
  @Input() public listaRegistroExtraccion: RegistroExtraccion[] = [];
  @Output() public listaRegistroExtraccionChange = new EventEmitter<RegistroExtraccion[]>();
  @Input() public registroExtraccionN: RegistroExtraccion = new RegistroExtraccion();
  @Output() public registroExtraccionNChange = new EventEmitter<RegistroExtraccion>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(registroExtraccion, tipo) {
        this.idSeleccionado = tipo + "-" + registroExtraccion.id;
        this.registroExtraccionN = registroExtraccion;
    }

    ngOnInit() {
        this.registroExtraccionN.id = 0;
        this.listaRegistroExtraccionN.push(Object.assign({}, this.registroExtraccionN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new RegistroExtraccion();
        pg.id = this.listaRegistroExtraccionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaRegistroExtraccionN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let registroExtraccion of this.listaRegistroExtraccion) {
            this.registroExtraccionService.actualizarRegistroExtraccion(registroExtraccion, this.evtActualiza, this);
        }
        for (let registroExtraccion of this.listaRegistroExtraccionN) {
            registroExtraccion.id = null;
            this.registroExtraccionService.guardarRegistroExtraccion(registroExtraccion, this.evtGuardar, this);
        }
    }
    evtGuardar(registroExtraccion, obj) {
        obj.agregados++;
        obj.listaRegistroExtraccion.push(registroExtraccion);
        if (obj.agregados >= obj.listaRegistroExtraccionN.length) {
            obj.registroExtraccionN = new RegistroExtraccion();
            obj.listaRegistroExtraccionN = [];
            obj.registroExtraccionN.id = 0;
            obj.idSeleccionado = "N-" + obj.registroExtraccionN.id;
            obj.listaRegistroExtraccionN.push(Object.assign({}, obj.registroExtraccionN));
            obj.listaRegistroExtraccionChange.emit(obj.listaRegistroExtraccion);
        }
        if (obj.agregados >= obj.listaRegistroExtraccionN.length && 
            obj.actualizados >= obj.listaRegistroExtraccion.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaRegistroExtraccionN.length && 
            obj.actualizados >= obj.listaRegistroExtraccion.length  ) {
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
