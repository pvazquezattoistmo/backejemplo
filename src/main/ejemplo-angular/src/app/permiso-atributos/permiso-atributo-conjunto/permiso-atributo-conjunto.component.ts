import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PermisoAtributo } from '../shared/permiso-atributo';

@Component({
  selector: 'app-permiso-atributo-conjunto',
  templateUrl: './permiso-atributo-conjunto.component.html',
  styleUrls: ['./permiso-atributo-conjunto.component.css'],
})
export class PermisoAtributoConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() permisoAtributoBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosPermisoAtributo;
  @Input() ocultarConjuntosPermisoAtributo;
  @Input() permisoAtributoService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
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

  public listaPermisoAtributoN: PermisoAtributo[] = [];
  @Input() public listaPermisoAtributo: PermisoAtributo[] = [];
  @Output() public listaPermisoAtributoChange = new EventEmitter<PermisoAtributo[]>();
  @Input() public permisoAtributoN: PermisoAtributo = new PermisoAtributo();
  @Output() public permisoAtributoNChange = new EventEmitter<PermisoAtributo>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(permisoAtributo, tipo) {
        this.idSeleccionado = tipo + "-" + permisoAtributo.id;
        this.permisoAtributoN = permisoAtributo;
    }

    ngOnInit() {
        this.permisoAtributoN.id = 0;
        this.listaPermisoAtributoN.push(Object.assign({}, this.permisoAtributoN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new PermisoAtributo();
        pg.id = this.listaPermisoAtributoN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaPermisoAtributoN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let permisoAtributo of this.listaPermisoAtributo) {
            this.permisoAtributoService.actualizarPermisoAtributo(permisoAtributo, this.evtActualiza, this);
        }
        for (let permisoAtributo of this.listaPermisoAtributoN) {
            permisoAtributo.id = null;
            this.permisoAtributoService.guardarPermisoAtributo(permisoAtributo, this.evtGuardar, this);
        }
    }
    evtGuardar(permisoAtributo, obj) {
        obj.agregados++;
        obj.listaPermisoAtributo.push(permisoAtributo);
        if (obj.agregados >= obj.listaPermisoAtributoN.length) {
            obj.permisoAtributoN = new PermisoAtributo();
            obj.listaPermisoAtributoN = [];
            obj.permisoAtributoN.id = 0;
            obj.idSeleccionado = "N-" + obj.permisoAtributoN.id;
            obj.listaPermisoAtributoN.push(Object.assign({}, obj.permisoAtributoN));
            obj.listaPermisoAtributoChange.emit(obj.listaPermisoAtributo);
        }
        if (obj.agregados >= obj.listaPermisoAtributoN.length && 
            obj.actualizados >= obj.listaPermisoAtributo.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaPermisoAtributoN.length && 
            obj.actualizados >= obj.listaPermisoAtributo.length  ) {
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
