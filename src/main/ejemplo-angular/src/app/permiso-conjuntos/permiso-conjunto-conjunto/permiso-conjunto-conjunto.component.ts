import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PermisoConjunto } from '../shared/permiso-conjunto';

@Component({
  selector: 'app-permiso-conjunto-conjunto',
  templateUrl: './permiso-conjunto-conjunto.component.html',
  styleUrls: ['./permiso-conjunto-conjunto.component.css'],
})
export class PermisoConjuntoConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() permisoConjuntoBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosPermisoConjunto;
  @Input() ocultarConjuntosPermisoConjunto;
  @Input() permisoConjuntoService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
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

  public listaPermisoConjuntoN: PermisoConjunto[] = [];
  @Input() public listaPermisoConjunto: PermisoConjunto[] = [];
  @Output() public listaPermisoConjuntoChange = new EventEmitter<PermisoConjunto[]>();
  @Input() public permisoConjuntoN: PermisoConjunto = new PermisoConjunto();
  @Output() public permisoConjuntoNChange = new EventEmitter<PermisoConjunto>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(permisoConjunto, tipo) {
        this.idSeleccionado = tipo + "-" + permisoConjunto.id;
        this.permisoConjuntoN = permisoConjunto;
    }

    ngOnInit() {
        this.permisoConjuntoN.id = 0;
        this.listaPermisoConjuntoN.push(Object.assign({}, this.permisoConjuntoN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new PermisoConjunto();
        pg.id = this.listaPermisoConjuntoN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaPermisoConjuntoN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let permisoConjunto of this.listaPermisoConjunto) {
            this.permisoConjuntoService.actualizarPermisoConjunto(permisoConjunto, this.evtActualiza, this);
        }
        for (let permisoConjunto of this.listaPermisoConjuntoN) {
            permisoConjunto.id = null;
            this.permisoConjuntoService.guardarPermisoConjunto(permisoConjunto, this.evtGuardar, this);
        }
    }
    evtGuardar(permisoConjunto, obj) {
        obj.agregados++;
        obj.listaPermisoConjunto.push(permisoConjunto);
        if (obj.agregados >= obj.listaPermisoConjuntoN.length) {
            obj.permisoConjuntoN = new PermisoConjunto();
            obj.listaPermisoConjuntoN = [];
            obj.permisoConjuntoN.id = 0;
            obj.idSeleccionado = "N-" + obj.permisoConjuntoN.id;
            obj.listaPermisoConjuntoN.push(Object.assign({}, obj.permisoConjuntoN));
            obj.listaPermisoConjuntoChange.emit(obj.listaPermisoConjunto);
        }
        if (obj.agregados >= obj.listaPermisoConjuntoN.length && 
            obj.actualizados >= obj.listaPermisoConjunto.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaPermisoConjuntoN.length && 
            obj.actualizados >= obj.listaPermisoConjunto.length  ) {
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
