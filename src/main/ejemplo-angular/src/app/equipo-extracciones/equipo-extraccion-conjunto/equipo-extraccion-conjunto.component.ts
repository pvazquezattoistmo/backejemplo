import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EquipoExtraccion } from '../shared/equipo-extraccion';

@Component({
  selector: 'app-equipo-extraccion-conjunto',
  templateUrl: './equipo-extraccion-conjunto.component.html',
  styleUrls: ['./equipo-extraccion-conjunto.component.css'],
})
export class EquipoExtraccionConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() equipoExtraccionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosEquipoExtraccion;
  @Input() ocultarConjuntosEquipoExtraccion;
  @Input() equipoExtraccionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovEquipoExtraccionUsuario;
  usuarioUltMovEquipoExtraccionUsuarioEditar : boolean = false;
  @Input() lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion;
  idregistroExtraccionEquipoExtraccionRegistroExtraccionEditar : boolean = false;

  public listaEquipoExtraccionN: EquipoExtraccion[] = [];
  @Input() public listaEquipoExtraccion: EquipoExtraccion[] = [];
  @Output() public listaEquipoExtraccionChange = new EventEmitter<EquipoExtraccion[]>();
  @Input() public equipoExtraccionN: EquipoExtraccion = new EquipoExtraccion();
  @Output() public equipoExtraccionNChange = new EventEmitter<EquipoExtraccion>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(equipoExtraccion, tipo) {
        this.idSeleccionado = tipo + "-" + equipoExtraccion.id;
        this.equipoExtraccionN = equipoExtraccion;
    }

    ngOnInit() {
        this.equipoExtraccionN.id = 0;
        this.listaEquipoExtraccionN.push(Object.assign({}, this.equipoExtraccionN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new EquipoExtraccion();
        pg.id = this.listaEquipoExtraccionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaEquipoExtraccionN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let equipoExtraccion of this.listaEquipoExtraccion) {
            this.equipoExtraccionService.actualizarEquipoExtraccion(equipoExtraccion, this.evtActualiza, this);
        }
        for (let equipoExtraccion of this.listaEquipoExtraccionN) {
            equipoExtraccion.id = null;
            this.equipoExtraccionService.guardarEquipoExtraccion(equipoExtraccion, this.evtGuardar, this);
        }
    }
    evtGuardar(equipoExtraccion, obj) {
        obj.agregados++;
        obj.listaEquipoExtraccion.push(equipoExtraccion);
        if (obj.agregados >= obj.listaEquipoExtraccionN.length) {
            obj.equipoExtraccionN = new EquipoExtraccion();
            obj.listaEquipoExtraccionN = [];
            obj.equipoExtraccionN.id = 0;
            obj.idSeleccionado = "N-" + obj.equipoExtraccionN.id;
            obj.listaEquipoExtraccionN.push(Object.assign({}, obj.equipoExtraccionN));
            obj.listaEquipoExtraccionChange.emit(obj.listaEquipoExtraccion);
        }
        if (obj.agregados >= obj.listaEquipoExtraccionN.length && 
            obj.actualizados >= obj.listaEquipoExtraccion.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaEquipoExtraccionN.length && 
            obj.actualizados >= obj.listaEquipoExtraccion.length  ) {
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
