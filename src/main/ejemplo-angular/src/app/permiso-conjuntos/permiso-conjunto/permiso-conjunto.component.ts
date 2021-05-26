import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PermisoConjunto } from '../shared/permiso-conjunto';

@Component({
  selector: 'app-permiso-conjunto',
  templateUrl: './permiso-conjunto.component.html',
  styleUrls: ['./permiso-conjunto.component.css'],
})
export class PermisoConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() permisoConjuntoBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosPermisoConjunto;
  @Input() permisoConjunto:PermisoConjunto;
  @Input() permisoConjuntoService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() permisoConjuntoChange = new EventEmitter<PermisoConjunto>();
  @Input() ocultarConjuntos;
  @Input() perfilesPermisoConjuntoPerfilN;
  @Input() perfilService;
  @Input() lista_perfilesPermisoConjuntoPerfil;
  @Input() opcionperfilesPermisoConjuntoPerfil;
  @Input() validosperfilesPermisoConjuntoPerfil;
  @Output() evtAgregarPerfilesPermisoConjuntoPerfil = new EventEmitter();
  agregarPerfilesPermisoConjuntoPerfil(){  this.evtAgregarPerfilesPermisoConjuntoPerfil.emit() };
  @Input() configuracionPerfilesPermisoConjuntoPerfil;
  @Input() ocultarConjuntosperfilesPermisoConjuntoPerfil;
  @Input() lista_usuarioUltMovPermisoConjuntoUsuario;
  usuarioUltMovPermisoConjuntoUsuarioEditar : boolean = false;
  @Input() lista_usuarioPermisoConjuntoUsuario;
  usuarioPermisoConjuntoUsuarioEditar : boolean = false;

  
  constructor( ) { }
    actualizarPermisoConjunto() {
        if (this.permisoConjunto.id == null) {
            this.permisoConjuntoService.guardarPermisoConjunto(this.permisoConjunto, this.evtGuardar, this);
        } else {
            this.permisoConjuntoService.actualizarPermisoConjunto(this.permisoConjunto, this.evtActualiza, this);
        }
    }
    evtGuardar(permisoConjunto, obj) {
        obj.permisoConjunto = permisoConjunto;
        obj.permisoConjuntoChange.emit(obj.permisoConjunto);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.permisoConjuntoChange.emit(obj.permisoConjunto);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarPermisoConjunto() ;
            }
        }
    }    
    

  ngOnInit() {
  }
  
  
}
