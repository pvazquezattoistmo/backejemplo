import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Perfil } from '../shared/perfil';

@Component({
  selector: 'app-perfil-conjunto',
  templateUrl: './perfil-conjunto.component.html',
  styleUrls: ['./perfil-conjunto.component.css'],
})
export class PerfilConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() perfilBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosPerfil;
  @Input() ocultarConjuntosPerfil;
  @Input() perfilService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovPerfilUsuario;
  usuarioUltMovPerfilUsuarioEditar : boolean = false;
  @Input() lista_usuarioPerfilUsuario;
  usuarioPerfilUsuarioEditar : boolean = false;

  public listaPerfilN: Perfil[] = [];
  @Input() public listaPerfil: Perfil[] = [];
  @Output() public listaPerfilChange = new EventEmitter<Perfil[]>();
  @Input() public perfilN: Perfil = new Perfil();
  @Output() public perfilNChange = new EventEmitter<Perfil>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(perfil, tipo) {
        this.idSeleccionado = tipo + "-" + perfil.id;
        this.perfilN = perfil;
    }

    ngOnInit() {
        this.perfilN.id = 0;
        this.listaPerfilN.push(Object.assign({}, this.perfilN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new Perfil();
        pg.id = this.listaPerfilN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaPerfilN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let perfil of this.listaPerfil) {
            this.perfilService.actualizarPerfil(perfil, this.evtActualiza, this);
        }
        for (let perfil of this.listaPerfilN) {
            perfil.id = null;
            this.perfilService.guardarPerfil(perfil, this.evtGuardar, this);
        }
    }
    evtGuardar(perfil, obj) {
        obj.agregados++;
        obj.listaPerfil.push(perfil);
        if (obj.agregados >= obj.listaPerfilN.length) {
            obj.perfilN = new Perfil();
            obj.listaPerfilN = [];
            obj.perfilN.id = 0;
            obj.idSeleccionado = "N-" + obj.perfilN.id;
            obj.listaPerfilN.push(Object.assign({}, obj.perfilN));
            obj.listaPerfilChange.emit(obj.listaPerfil);
        }
        if (obj.agregados >= obj.listaPerfilN.length && 
            obj.actualizados >= obj.listaPerfil.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaPerfilN.length && 
            obj.actualizados >= obj.listaPerfil.length  ) {
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
