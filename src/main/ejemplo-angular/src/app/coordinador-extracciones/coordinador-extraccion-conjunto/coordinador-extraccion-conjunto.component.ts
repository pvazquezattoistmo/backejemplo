import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoordinadorExtraccion } from '../shared/coordinador-extraccion';

@Component({
  selector: 'app-coordinador-extraccion-conjunto',
  templateUrl: './coordinador-extraccion-conjunto.component.html',
  styleUrls: ['./coordinador-extraccion-conjunto.component.css'],
})
export class CoordinadorExtraccionConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() coordinadorExtraccionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosCoordinadorExtraccion;
  @Input() ocultarConjuntosCoordinadorExtraccion;
  @Input() coordinadorExtraccionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovCoordinadorExtraccionUsuario;
  usuarioUltMovCoordinadorExtraccionUsuarioEditar : boolean = false;
  @Input() lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion;
  idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEditar : boolean = false;

  public listaCoordinadorExtraccionN: CoordinadorExtraccion[] = [];
  @Input() public listaCoordinadorExtraccion: CoordinadorExtraccion[] = [];
  @Output() public listaCoordinadorExtraccionChange = new EventEmitter<CoordinadorExtraccion[]>();
  @Input() public coordinadorExtraccionN: CoordinadorExtraccion = new CoordinadorExtraccion();
  @Output() public coordinadorExtraccionNChange = new EventEmitter<CoordinadorExtraccion>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(coordinadorExtraccion, tipo) {
        this.idSeleccionado = tipo + "-" + coordinadorExtraccion.id;
        this.coordinadorExtraccionN = coordinadorExtraccion;
    }

    ngOnInit() {
        this.coordinadorExtraccionN.id = 0;
        this.listaCoordinadorExtraccionN.push(Object.assign({}, this.coordinadorExtraccionN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new CoordinadorExtraccion();
        pg.id = this.listaCoordinadorExtraccionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaCoordinadorExtraccionN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let coordinadorExtraccion of this.listaCoordinadorExtraccion) {
            this.coordinadorExtraccionService.actualizarCoordinadorExtraccion(coordinadorExtraccion, this.evtActualiza, this);
        }
        for (let coordinadorExtraccion of this.listaCoordinadorExtraccionN) {
            coordinadorExtraccion.id = null;
            this.coordinadorExtraccionService.guardarCoordinadorExtraccion(coordinadorExtraccion, this.evtGuardar, this);
        }
    }
    evtGuardar(coordinadorExtraccion, obj) {
        obj.agregados++;
        obj.listaCoordinadorExtraccion.push(coordinadorExtraccion);
        if (obj.agregados >= obj.listaCoordinadorExtraccionN.length) {
            obj.coordinadorExtraccionN = new CoordinadorExtraccion();
            obj.listaCoordinadorExtraccionN = [];
            obj.coordinadorExtraccionN.id = 0;
            obj.idSeleccionado = "N-" + obj.coordinadorExtraccionN.id;
            obj.listaCoordinadorExtraccionN.push(Object.assign({}, obj.coordinadorExtraccionN));
            obj.listaCoordinadorExtraccionChange.emit(obj.listaCoordinadorExtraccion);
        }
        if (obj.agregados >= obj.listaCoordinadorExtraccionN.length && 
            obj.actualizados >= obj.listaCoordinadorExtraccion.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaCoordinadorExtraccionN.length && 
            obj.actualizados >= obj.listaCoordinadorExtraccion.length  ) {
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
