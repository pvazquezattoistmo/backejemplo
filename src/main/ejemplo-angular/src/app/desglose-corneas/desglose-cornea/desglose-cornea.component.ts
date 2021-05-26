import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DesgloseCornea } from '../shared/desglose-cornea';

@Component({
  selector: 'app-desglose-cornea',
  templateUrl: './desglose-cornea.component.html',
  styleUrls: ['./desglose-cornea.component.css'],
})
export class DesgloseCorneaComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() desgloseCorneaBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosDesgloseCornea;
  @Input() desgloseCornea:DesgloseCornea;
  @Input() desgloseCorneaService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() desgloseCorneaChange = new EventEmitter<DesgloseCornea>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovDesgloseCorneaUsuario;
  usuarioUltMovDesgloseCorneaUsuarioEditar : boolean = false;
  @Input() lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud;
  idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEditar : boolean = false;

  
  constructor( ) { }
    actualizarDesgloseCornea() {
        if (this.desgloseCornea.id == null) {
            this.desgloseCorneaService.guardarDesgloseCornea(this.desgloseCornea, this.evtGuardar, this);
        } else {
            this.desgloseCorneaService.actualizarDesgloseCornea(this.desgloseCornea, this.evtActualiza, this);
        }
    }
    evtGuardar(desgloseCornea, obj) {
        obj.desgloseCornea = desgloseCornea;
        obj.desgloseCorneaChange.emit(obj.desgloseCornea);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.desgloseCorneaChange.emit(obj.desgloseCornea);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarDesgloseCornea() ;
            }
        }
    }    
    

  ngOnInit() {
  }
  
  
}
