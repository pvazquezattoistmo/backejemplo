import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Perfil } from '../shared/perfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() perfilBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosPerfil;
  @Input() perfil:Perfil;
  @Input() perfilService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() perfilChange = new EventEmitter<Perfil>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovPerfilUsuario;
  usuarioUltMovPerfilUsuarioEditar : boolean = false;
  @Input() lista_usuarioPerfilUsuario;
  usuarioPerfilUsuarioEditar : boolean = false;

  
  constructor( ) { }
    actualizarPerfil() {
        if (this.perfil.id == null) {
            this.perfilService.guardarPerfil(this.perfil, this.evtGuardar, this);
        } else {
            this.perfilService.actualizarPerfil(this.perfil, this.evtActualiza, this);
        }
    }
    evtGuardar(perfil, obj) {
        obj.perfil = perfil;
        obj.perfilChange.emit(obj.perfil);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.perfilChange.emit(obj.perfil);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarPerfil() ;
            }
        }
    }    
    

  ngOnInit() {
  }
  
  
}
