import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EntidadFederativa } from '../shared/entidad-federativa';

@Component({
  selector: 'app-entidad-federativa',
  templateUrl: './entidad-federativa.component.html',
  styleUrls: ['./entidad-federativa.component.css'],
})
export class EntidadFederativaComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() entidadFederativaBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosEntidadFederativa;
  @Input() entidadFederativa:EntidadFederativa;
  @Input() entidadFederativaService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() entidadFederativaChange = new EventEmitter<EntidadFederativa>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovEntidadFederativaUsuario;
  usuarioUltMovEntidadFederativaUsuarioEditar : boolean = false;

  
  constructor( ) { }
    actualizarEntidadFederativa() {
        if (this.entidadFederativa.id == null) {
            this.entidadFederativaService.guardarEntidadFederativa(this.entidadFederativa, this.evtGuardar, this);
        } else {
            this.entidadFederativaService.actualizarEntidadFederativa(this.entidadFederativa, this.evtActualiza, this);
        }
    }
    evtGuardar(entidadFederativa, obj) {
        obj.entidadFederativa = entidadFederativa;
        obj.entidadFederativaChange.emit(obj.entidadFederativa);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.entidadFederativaChange.emit(obj.entidadFederativa);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarEntidadFederativa() ;
            }
        }
    }    
    

  ngOnInit() {
  }
  
  
}
