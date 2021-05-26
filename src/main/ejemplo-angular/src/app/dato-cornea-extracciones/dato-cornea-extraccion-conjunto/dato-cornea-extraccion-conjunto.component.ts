import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatoCorneaExtraccion } from '../shared/dato-cornea-extraccion';

@Component({
  selector: 'app-dato-cornea-extraccion-conjunto',
  templateUrl: './dato-cornea-extraccion-conjunto.component.html',
  styleUrls: ['./dato-cornea-extraccion-conjunto.component.css'],
})
export class DatoCorneaExtraccionConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() datoCorneaExtraccionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosDatoCorneaExtraccion;
  @Input() ocultarConjuntosDatoCorneaExtraccion;
  @Input() datoCorneaExtraccionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovDatoCorneaExtraccionUsuario;
  usuarioUltMovDatoCorneaExtraccionUsuarioEditar : boolean = false;
  @Input() lista_idregistroExtraccionDatoCorneaExtraccionRegistroExtraccion;
  idregistroExtraccionDatoCorneaExtraccionRegistroExtraccionEditar : boolean = false;

  public listaDatoCorneaExtraccionN: DatoCorneaExtraccion[] = [];
  @Input() public listaDatoCorneaExtraccion: DatoCorneaExtraccion[] = [];
  @Output() public listaDatoCorneaExtraccionChange = new EventEmitter<DatoCorneaExtraccion[]>();
  @Input() public datoCorneaExtraccionN: DatoCorneaExtraccion = new DatoCorneaExtraccion();
  @Output() public datoCorneaExtraccionNChange = new EventEmitter<DatoCorneaExtraccion>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(datoCorneaExtraccion, tipo) {
        this.idSeleccionado = tipo + "-" + datoCorneaExtraccion.id;
        this.datoCorneaExtraccionN = datoCorneaExtraccion;
    }

    ngOnInit() {
        this.datoCorneaExtraccionN.id = 0;
        this.listaDatoCorneaExtraccionN.push(Object.assign({}, this.datoCorneaExtraccionN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new DatoCorneaExtraccion();
        pg.id = this.listaDatoCorneaExtraccionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaDatoCorneaExtraccionN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let datoCorneaExtraccion of this.listaDatoCorneaExtraccion) {
            this.datoCorneaExtraccionService.actualizarDatoCorneaExtraccion(datoCorneaExtraccion, this.evtActualiza, this);
        }
        for (let datoCorneaExtraccion of this.listaDatoCorneaExtraccionN) {
            datoCorneaExtraccion.id = null;
            this.datoCorneaExtraccionService.guardarDatoCorneaExtraccion(datoCorneaExtraccion, this.evtGuardar, this);
        }
    }
    evtGuardar(datoCorneaExtraccion, obj) {
        obj.agregados++;
        obj.listaDatoCorneaExtraccion.push(datoCorneaExtraccion);
        if (obj.agregados >= obj.listaDatoCorneaExtraccionN.length) {
            obj.datoCorneaExtraccionN = new DatoCorneaExtraccion();
            obj.listaDatoCorneaExtraccionN = [];
            obj.datoCorneaExtraccionN.id = 0;
            obj.idSeleccionado = "N-" + obj.datoCorneaExtraccionN.id;
            obj.listaDatoCorneaExtraccionN.push(Object.assign({}, obj.datoCorneaExtraccionN));
            obj.listaDatoCorneaExtraccionChange.emit(obj.listaDatoCorneaExtraccion);
        }
        if (obj.agregados >= obj.listaDatoCorneaExtraccionN.length && 
            obj.actualizados >= obj.listaDatoCorneaExtraccion.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaDatoCorneaExtraccionN.length && 
            obj.actualizados >= obj.listaDatoCorneaExtraccion.length  ) {
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
