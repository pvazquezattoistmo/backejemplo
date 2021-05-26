import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../shared/usuario';

declare var bootbox: any;
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() usuarioBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosUsuario;
  @Input() usuario:Usuario;
  @Input() usuarioService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() usuarioChange = new EventEmitter<Usuario>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovUsuarioUsuario;
  usuarioUltMovUsuarioUsuarioEditar : boolean = false;
  @Input() lista_perfilUsuarioPerfil;
  perfilUsuarioPerfilEditar : boolean = false;
  @Input() lista_idcargoUsuarioCatalogoCargo;
  idcargoUsuarioCatalogoCargoEditar : boolean = false;
  @Input() lista_idhospitalUsuarioHospital;
  idhospitalUsuarioHospitalEditar : boolean = false;


  constructor( ) { }
    actualizarUsuario() {
        if (this.usuario.id == null) {
            this.usuarioService.guardarUsuario(this.usuario, this.evtGuardar, this);
        } else {
            this.usuarioService.actualizarUsuario(this.usuario, this.evtActualiza, this);
        }
    }
    evtGuardar(usuario, obj) {
        obj.usuario = usuario;
        obj.usuarioChange.emit(obj.usuario);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.usuarioChange.emit(obj.usuario);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarUsuario() ;
            }
        }
    }


  ngOnInit() {
  }

  usernameChange() {
    (this.usuario.username);
    this.usuarioService.getUsuarioByUsername(this.usuario.username, this.evtBuscarusername, this);
  }

  evtBuscarusername(data, obj) {
    if (data.id) {
      ("username "+data.username);
      ("username "+obj.usuario.username);
      if (data.username == obj.usuario.username && data.id != obj.usuario.id) {
        bootbox.alert('¡El Usuario ingresado ya existe en el sistema, favor de ingresar uno diferente!');
        obj.usuario.username = null;
      }
    }
  }

  correoElectronicoChange() {
    (this.usuario.correoElectronico);
    this.usuarioService.getUsuarioBtcByCorreoElectronico(this.usuario.correoElectronico, this.evtBuscarcorreoElectronico, this);
  }

  evtBuscarcorreoElectronico(data, obj) {
    if (data.id) {
      ("correoElectronico "+data.correoElectronico);
      ("correoElectronico "+obj.usuario.correoElectronico);
      if (data.correoElectronico == obj.usuario.correoElectronico && data.id != obj.usuario.id) {
        bootbox.alert('¡El Correo Electrónico ingresado ya existe en el sistema, favor de ingresar uno diferente!');
        obj.usuario.correoElectronico = null;
      }
    }
  }


}
