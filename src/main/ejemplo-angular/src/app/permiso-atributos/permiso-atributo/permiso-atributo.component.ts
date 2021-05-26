import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PermisoAtributo } from '../shared/permiso-atributo';

@Component({
  selector: 'app-permiso-atributo',
  templateUrl: './permiso-atributo.component.html',
  styleUrls: ['./permiso-atributo.component.css'],
})
export class PermisoAtributoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() permisoAtributoBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosPermisoAtributo;
  @Input() permisoAtributo:PermisoAtributo;
  @Input() permisoAtributoService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() permisoAtributoChange = new EventEmitter<PermisoAtributo>();
  @Input() ocultarConjuntos;
  @Input() perfilesPermisoAtributoPerfilN;
  @Input() perfilService;
  @Input() lista_perfilesPermisoAtributoPerfil;
  @Input() opcionperfilesPermisoAtributoPerfil;
  @Input() validosperfilesPermisoAtributoPerfil;
  @Output() evtAgregarPerfilesPermisoAtributoPerfil = new EventEmitter();
  agregarPerfilesPermisoAtributoPerfil(){  this.evtAgregarPerfilesPermisoAtributoPerfil.emit() };
  @Input() configuracionPerfilesPermisoAtributoPerfil;
  @Input() ocultarConjuntosperfilesPermisoAtributoPerfil;
  @Input() lista_usuarioUltMovPermisoAtributoUsuario;
  usuarioUltMovPermisoAtributoUsuarioEditar : boolean = false;
  @Input() lista_usuarioPermisoAtributoUsuario;
  usuarioPermisoAtributoUsuarioEditar : boolean = false;

  
  constructor( ) { }
    actualizarPermisoAtributo() {
        if (this.permisoAtributo.id == null) {
            this.permisoAtributoService.guardarPermisoAtributo(this.permisoAtributo, this.evtGuardar, this);
        } else {
            this.permisoAtributoService.actualizarPermisoAtributo(this.permisoAtributo, this.evtActualiza, this);
        }
    }
    evtGuardar(permisoAtributo, obj) {
        obj.permisoAtributo = permisoAtributo;
        obj.permisoAtributoChange.emit(obj.permisoAtributo);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.permisoAtributoChange.emit(obj.permisoAtributo);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarPermisoAtributo() ;
            }
        }
    }    
    

  ngOnInit() {
  }
  
  
}
