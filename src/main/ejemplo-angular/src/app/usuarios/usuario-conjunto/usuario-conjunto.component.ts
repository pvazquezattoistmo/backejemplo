import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-usuario-conjunto',
  templateUrl: './usuario-conjunto.component.html',
  styleUrls: ['./usuario-conjunto.component.css'],
})
export class UsuarioConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() usuarioBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosUsuario;
  @Input() ocultarConjuntosUsuario;
  @Input() usuarioService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovUsuarioUsuario;
  usuarioUltMovUsuarioUsuarioEditar : boolean = false;
  @Input() lista_perfilUsuarioPerfil;
  perfilUsuarioPerfilEditar : boolean = false;

  public listaUsuarioN: Usuario[] = [];
  @Input() public listaUsuario: Usuario[] = [];
  @Output() public listaUsuarioChange = new EventEmitter<Usuario[]>();
  @Input() public usuarioN: Usuario = new Usuario();
  @Output() public usuarioNChange = new EventEmitter<Usuario>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(usuario, tipo) {
        this.idSeleccionado = tipo + "-" + usuario.id;
        this.usuarioN = usuario;
    }

    ngOnInit() {
        this.usuarioN.id = 0;
        this.listaUsuarioN.push(Object.assign({}, this.usuarioN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new Usuario();
        pg.id = this.listaUsuarioN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaUsuarioN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let usuario of this.listaUsuario) {
            this.usuarioService.actualizarUsuario(usuario, this.evtActualiza, this);
        }
        for (let usuario of this.listaUsuarioN) {
            usuario.id = null;
            this.usuarioService.guardarUsuario(usuario, this.evtGuardar, this);
        }
    }
    evtGuardar(usuario, obj) {
        obj.agregados++;
        obj.listaUsuario.push(usuario);
        if (obj.agregados >= obj.listaUsuarioN.length) {
            obj.usuarioN = new Usuario();
            obj.listaUsuarioN = [];
            obj.usuarioN.id = 0;
            obj.idSeleccionado = "N-" + obj.usuarioN.id;
            obj.listaUsuarioN.push(Object.assign({}, obj.usuarioN));
            obj.listaUsuarioChange.emit(obj.listaUsuario);
        }
        if (obj.agregados >= obj.listaUsuarioN.length && 
            obj.actualizados >= obj.listaUsuario.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaUsuarioN.length && 
            obj.actualizados >= obj.listaUsuario.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }            
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizaTodo() ;
            }
        }
    }
  
}
