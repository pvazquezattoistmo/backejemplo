import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EntidadFederativa } from '../shared/entidad-federativa';

@Component({
  selector: 'app-entidad-federativa-conjunto',
  templateUrl: './entidad-federativa-conjunto.component.html',
  styleUrls: ['./entidad-federativa-conjunto.component.css'],
})
export class EntidadFederativaConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() entidadFederativaBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosEntidadFederativa;
  @Input() ocultarConjuntosEntidadFederativa;
  @Input() entidadFederativaService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovEntidadFederativaUsuario;
  usuarioUltMovEntidadFederativaUsuarioEditar : boolean = false;

  public listaEntidadFederativaN: EntidadFederativa[] = [];
  @Input() public listaEntidadFederativa: EntidadFederativa[] = [];
  @Output() public listaEntidadFederativaChange = new EventEmitter<EntidadFederativa[]>();
  @Input() public entidadFederativaN: EntidadFederativa = new EntidadFederativa();
  @Output() public entidadFederativaNChange = new EventEmitter<EntidadFederativa>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(entidadFederativa, tipo) {
        this.idSeleccionado = tipo + "-" + entidadFederativa.id;
        this.entidadFederativaN = entidadFederativa;
    }

    ngOnInit() {
        this.entidadFederativaN.id = 0;
        this.listaEntidadFederativaN.push(Object.assign({}, this.entidadFederativaN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new EntidadFederativa();
        pg.id = this.listaEntidadFederativaN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaEntidadFederativaN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let entidadFederativa of this.listaEntidadFederativa) {
            this.entidadFederativaService.actualizarEntidadFederativa(entidadFederativa, this.evtActualiza, this);
        }
        for (let entidadFederativa of this.listaEntidadFederativaN) {
            entidadFederativa.id = null;
            this.entidadFederativaService.guardarEntidadFederativa(entidadFederativa, this.evtGuardar, this);
        }
    }
    evtGuardar(entidadFederativa, obj) {
        obj.agregados++;
        obj.listaEntidadFederativa.push(entidadFederativa);
        if (obj.agregados >= obj.listaEntidadFederativaN.length) {
            obj.entidadFederativaN = new EntidadFederativa();
            obj.listaEntidadFederativaN = [];
            obj.entidadFederativaN.id = 0;
            obj.idSeleccionado = "N-" + obj.entidadFederativaN.id;
            obj.listaEntidadFederativaN.push(Object.assign({}, obj.entidadFederativaN));
            obj.listaEntidadFederativaChange.emit(obj.listaEntidadFederativa);
        }
        if (obj.agregados >= obj.listaEntidadFederativaN.length && 
            obj.actualizados >= obj.listaEntidadFederativa.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaEntidadFederativaN.length && 
            obj.actualizados >= obj.listaEntidadFederativa.length  ) {
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
