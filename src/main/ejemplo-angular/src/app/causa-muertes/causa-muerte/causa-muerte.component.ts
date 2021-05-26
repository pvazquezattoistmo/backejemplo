import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CausaMuerte } from '../shared/causa-muerte';

@Component({
  selector: 'app-causa-muerte',
  templateUrl: './causa-muerte.component.html',
  styleUrls: ['./causa-muerte.component.css'],
})
export class CausaMuerteComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() causaMuerteBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosCausaMuerte;
  @Input() causaMuerte:CausaMuerte;
  @Input() causaMuerteService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() causaMuerteChange = new EventEmitter<CausaMuerte>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovCausaMuerteUsuario;
  usuarioUltMovCausaMuerteUsuarioEditar : boolean = false;

  
  constructor( ) { }
    actualizarCausaMuerte() {
        if (this.causaMuerte.id == null) {
            this.causaMuerteService.guardarCausaMuerte(this.causaMuerte, this.evtGuardar, this);
        } else {
            this.causaMuerteService.actualizarCausaMuerte(this.causaMuerte, this.evtActualiza, this);
        }
    }
    evtGuardar(causaMuerte, obj) {
        obj.causaMuerte = causaMuerte;
        obj.causaMuerteChange.emit(obj.causaMuerte);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.causaMuerteChange.emit(obj.causaMuerte);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarCausaMuerte() ;
            }
        }
    }    
    

  ngOnInit() {
  }
  
  
}
