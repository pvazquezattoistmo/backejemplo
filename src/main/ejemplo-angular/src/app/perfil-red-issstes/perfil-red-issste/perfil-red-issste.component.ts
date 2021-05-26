import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PerfilRedIssste } from '../shared/perfil-red-issste';

@Component({
  selector: 'app-perfil-red-issste',
  templateUrl: './perfil-red-issste.component.html',
  styleUrls: ['./perfil-red-issste.component.css'],
})
export class PerfilRedIsssteComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() perfilRedIsssteBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosPerfilRedIssste;
  @Input() perfilRedIssste:PerfilRedIssste;
  @Input() perfilRedIsssteService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() perfilRedIsssteChange = new EventEmitter<PerfilRedIssste>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovPerfilRedIsssteUsuario;
  usuarioUltMovPerfilRedIsssteUsuarioEditar : boolean = false;

  
  constructor( ) { }
    actualizarPerfilRedIssste() {
        if (this.perfilRedIssste.id == null) {
            this.perfilRedIsssteService.guardarPerfilRedIssste(this.perfilRedIssste, this.evtGuardar, this);
        } else {
            this.perfilRedIsssteService.actualizarPerfilRedIssste(this.perfilRedIssste, this.evtActualiza, this);
        }
    }
    evtGuardar(perfilRedIssste, obj) {
        obj.perfilRedIssste = perfilRedIssste;
        obj.perfilRedIsssteChange.emit(obj.perfilRedIssste);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.perfilRedIsssteChange.emit(obj.perfilRedIssste);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarPerfilRedIssste() ;
            }
        }
    }    
    

  ngOnInit() {
  }
  
  
}
