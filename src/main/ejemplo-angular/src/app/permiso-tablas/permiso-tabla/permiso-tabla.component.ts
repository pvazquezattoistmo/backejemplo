import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PermisoTabla } from '../shared/permiso-tabla';

@Component({
  selector: 'app-permiso-tabla',
  templateUrl: './permiso-tabla.component.html',
  styleUrls: ['./permiso-tabla.component.css'],
})
export class PermisoTablaComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() permisoTablaBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosPermisoTabla;
  @Input() permisoTabla:PermisoTabla;
  @Input() permisoTablaService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() permisoTablaChange = new EventEmitter<PermisoTabla>();
  @Input() ocultarConjuntos;
  @Input() perfilesPermisoTablaPerfilN;
  @Input() perfilService;
  @Input() lista_perfilesPermisoTablaPerfil;
  @Input() opcionperfilesPermisoTablaPerfil;
  @Input() validosperfilesPermisoTablaPerfil;
  @Output() evtAgregarPerfilesPermisoTablaPerfil = new EventEmitter();
  agregarPerfilesPermisoTablaPerfil(){  this.evtAgregarPerfilesPermisoTablaPerfil.emit() };
  @Input() configuracionPerfilesPermisoTablaPerfil;
  @Input() ocultarConjuntosperfilesPermisoTablaPerfil;
  @Input() lista_usuarioUltMovPermisoTablaUsuario;
  usuarioUltMovPermisoTablaUsuarioEditar : boolean = false;
  @Input() lista_usuarioPermisoTablaUsuario;
  usuarioPermisoTablaUsuarioEditar : boolean = false;

  
  constructor( ) { }
    actualizarPermisoTabla() {
        if (this.permisoTabla.id == null) {
            this.permisoTablaService.guardarPermisoTabla(this.permisoTabla, this.evtGuardar, this);
        } else {
            this.permisoTablaService.actualizarPermisoTabla(this.permisoTabla, this.evtActualiza, this);
        }
    }
    evtGuardar(permisoTabla, obj) {
        obj.permisoTabla = permisoTabla;
        obj.permisoTablaChange.emit(obj.permisoTabla);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.permisoTablaChange.emit(obj.permisoTabla);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarPermisoTabla() ;
            }
        }
    }    
    

  ngOnInit() {
  }
  
  
}
