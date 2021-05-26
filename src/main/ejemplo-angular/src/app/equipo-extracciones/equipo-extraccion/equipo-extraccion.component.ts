import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EquipoExtraccion } from '../shared/equipo-extraccion';

@Component({
  selector: 'app-equipo-extraccion',
  templateUrl: './equipo-extraccion.component.html',
  styleUrls: ['./equipo-extraccion.component.css'],
})
export class EquipoExtraccionComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() equipoExtraccionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosEquipoExtraccion;
  @Input() equipoExtraccion:EquipoExtraccion;
  @Input() equipoExtraccionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() equipoExtraccionChange = new EventEmitter<EquipoExtraccion>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovEquipoExtraccionUsuario;
  usuarioUltMovEquipoExtraccionUsuarioEditar : boolean = false;
  @Input() lista_idregistroExtraccionEquipoExtraccionRegistroExtraccion;
  idregistroExtraccionEquipoExtraccionRegistroExtraccionEditar : boolean = false;


  constructor( ) { }
    actualizarEquipoExtraccion() {
        if (this.equipoExtraccion.id == null) {
            this.equipoExtraccionService.guardarEquipoExtraccion(this.equipoExtraccion, this.evtGuardar, this);
        } else {
            this.equipoExtraccionService.actualizarEquipoExtraccion(this.equipoExtraccion, this.evtActualiza, this);
        }
    }
    evtGuardar(equipoExtraccion, obj) {
        obj.equipoExtraccion = equipoExtraccion;
        obj.equipoExtraccionChange.emit(obj.equipoExtraccion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.equipoExtraccionChange.emit(obj.equipoExtraccion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarEquipoExtraccion() ;
            }
        }
    }


  ngOnInit() {
  }


}
