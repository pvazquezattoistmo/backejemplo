import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoordinadorExtraccion } from '../shared/coordinador-extraccion';

@Component({
  selector: 'app-coordinador-extraccion',
  templateUrl: './coordinador-extraccion.component.html',
  styleUrls: ['./coordinador-extraccion.component.css'],
})
export class CoordinadorExtraccionComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() coordinadorExtraccionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosCoordinadorExtraccion;
  @Input() coordinadorExtraccion:CoordinadorExtraccion;
  @Input() coordinadorExtraccionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() coordinadorExtraccionChange = new EventEmitter<CoordinadorExtraccion>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovCoordinadorExtraccionUsuario;
  usuarioUltMovCoordinadorExtraccionUsuarioEditar : boolean = false;
  @Input() lista_idregistroExtraccionCoordinadorExtraccionRegistroExtraccion;
  idregistroExtraccionCoordinadorExtraccionRegistroExtraccionEditar : boolean = false;

  
  constructor( ) { }
    actualizarCoordinadorExtraccion() {
        if (this.coordinadorExtraccion.id == null) {
            this.coordinadorExtraccionService.guardarCoordinadorExtraccion(this.coordinadorExtraccion, this.evtGuardar, this);
        } else {
            this.coordinadorExtraccionService.actualizarCoordinadorExtraccion(this.coordinadorExtraccion, this.evtActualiza, this);
        }
    }
    evtGuardar(coordinadorExtraccion, obj) {
        obj.coordinadorExtraccion = coordinadorExtraccion;
        obj.coordinadorExtraccionChange.emit(obj.coordinadorExtraccion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.coordinadorExtraccionChange.emit(obj.coordinadorExtraccion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarCoordinadorExtraccion() ;
            }
        }
    }    
    

  ngOnInit() {
  }
  
  
}
