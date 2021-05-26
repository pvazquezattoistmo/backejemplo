import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatoCorneaExtraccion } from '../shared/dato-cornea-extraccion';

@Component({
  selector: 'app-dato-cornea-extraccion',
  templateUrl: './dato-cornea-extraccion.component.html',
  styleUrls: ['./dato-cornea-extraccion.component.css'],
})
export class DatoCorneaExtraccionComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() datoCorneaExtraccionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosDatoCorneaExtraccion;
  @Input() datoCorneaExtraccion:DatoCorneaExtraccion;
  @Input() datoCorneaExtraccionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() datoCorneaExtraccionChange = new EventEmitter<DatoCorneaExtraccion>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovDatoCorneaExtraccionUsuario;
  usuarioUltMovDatoCorneaExtraccionUsuarioEditar : boolean = false;
  @Input() lista_idregistroExtraccionDatoCorneaExtraccionRegistroExtraccion;
  idregistroExtraccionDatoCorneaExtraccionRegistroExtraccionEditar : boolean = false;

  @Input() public enable: boolean;
  constructor( ) { }
    actualizarDatoCorneaExtraccion() {
        if (this.datoCorneaExtraccion.id == null) {
            this.datoCorneaExtraccionService.guardarDatoCorneaExtraccion(this.datoCorneaExtraccion, this.evtGuardar, this);
        } else {
            this.datoCorneaExtraccionService.actualizarDatoCorneaExtraccion(this.datoCorneaExtraccion, this.evtActualiza, this);
        }
    }
    evtGuardar(datoCorneaExtraccion, obj) {
        obj.datoCorneaExtraccion = datoCorneaExtraccion;
        obj.datoCorneaExtraccionChange.emit(obj.datoCorneaExtraccion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.datoCorneaExtraccionChange.emit(obj.datoCorneaExtraccion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarDatoCorneaExtraccion() ;
            }
        }
    }


  ngOnInit() {
  }


}
