import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PermisoTabla } from '../shared/permiso-tabla';

@Component({
  selector: 'app-permiso-tabla-conjunto',
  templateUrl: './permiso-tabla-conjunto.component.html',
  styleUrls: ['./permiso-tabla-conjunto.component.css'],
})
export class PermisoTablaConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() permisoTablaBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosPermisoTabla;
  @Input() ocultarConjuntosPermisoTabla;
  @Input() permisoTablaService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
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

  public listaPermisoTablaN: PermisoTabla[] = [];
  @Input() public listaPermisoTabla: PermisoTabla[] = [];
  @Output() public listaPermisoTablaChange = new EventEmitter<PermisoTabla[]>();
  @Input() public permisoTablaN: PermisoTabla = new PermisoTabla();
  @Output() public permisoTablaNChange = new EventEmitter<PermisoTabla>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(permisoTabla, tipo) {
        this.idSeleccionado = tipo + "-" + permisoTabla.id;
        this.permisoTablaN = permisoTabla;
    }

    ngOnInit() {
        this.permisoTablaN.id = 0;
        this.listaPermisoTablaN.push(Object.assign({}, this.permisoTablaN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new PermisoTabla();
        pg.id = this.listaPermisoTablaN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaPermisoTablaN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let permisoTabla of this.listaPermisoTabla) {
            this.permisoTablaService.actualizarPermisoTabla(permisoTabla, this.evtActualiza, this);
        }
        for (let permisoTabla of this.listaPermisoTablaN) {
            permisoTabla.id = null;
            this.permisoTablaService.guardarPermisoTabla(permisoTabla, this.evtGuardar, this);
        }
    }
    evtGuardar(permisoTabla, obj) {
        obj.agregados++;
        obj.listaPermisoTabla.push(permisoTabla);
        if (obj.agregados >= obj.listaPermisoTablaN.length) {
            obj.permisoTablaN = new PermisoTabla();
            obj.listaPermisoTablaN = [];
            obj.permisoTablaN.id = 0;
            obj.idSeleccionado = "N-" + obj.permisoTablaN.id;
            obj.listaPermisoTablaN.push(Object.assign({}, obj.permisoTablaN));
            obj.listaPermisoTablaChange.emit(obj.listaPermisoTabla);
        }
        if (obj.agregados >= obj.listaPermisoTablaN.length && 
            obj.actualizados >= obj.listaPermisoTabla.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaPermisoTablaN.length && 
            obj.actualizados >= obj.listaPermisoTabla.length  ) {
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
