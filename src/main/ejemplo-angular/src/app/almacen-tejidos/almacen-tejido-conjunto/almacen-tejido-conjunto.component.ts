import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlmacenTejido } from '../shared/almacen-tejido';

@Component({
  selector: 'app-almacen-tejido-conjunto',
  templateUrl: './almacen-tejido-conjunto.component.html',
  styleUrls: ['./almacen-tejido-conjunto.component.css'],
})
export class AlmacenTejidoConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() almacenTejidoBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosAlmacenTejido;
  @Input() ocultarConjuntosAlmacenTejido;
  @Input() almacenTejidoService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovAlmacenTejidoUsuario;
  usuarioUltMovAlmacenTejidoUsuarioEditar : boolean = false;
  @Input() lista_idoficioDonacionAlmacenTejidoOficioDonacion;
  idoficioDonacionAlmacenTejidoOficioDonacionEditar : boolean = false;

  public listaAlmacenTejidoN: AlmacenTejido[] = [];
  @Input() public listaAlmacenTejido: AlmacenTejido[] = [];
  @Output() public listaAlmacenTejidoChange = new EventEmitter<AlmacenTejido[]>();
  @Input() public almacenTejidoN: AlmacenTejido = new AlmacenTejido();
  @Output() public almacenTejidoNChange = new EventEmitter<AlmacenTejido>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(almacenTejido, tipo) {
        this.idSeleccionado = tipo + "-" + almacenTejido.id;
        this.almacenTejidoN = almacenTejido;
    }

    ngOnInit() {
        this.almacenTejidoN.id = 0;
        this.listaAlmacenTejidoN.push(Object.assign({}, this.almacenTejidoN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new AlmacenTejido();
        pg.id = this.listaAlmacenTejidoN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaAlmacenTejidoN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let almacenTejido of this.listaAlmacenTejido) {
            this.almacenTejidoService.actualizarAlmacenTejido(almacenTejido, this.evtActualiza, this);
        }
        for (let almacenTejido of this.listaAlmacenTejidoN) {
            almacenTejido.id = null;
            this.almacenTejidoService.guardarAlmacenTejido(almacenTejido, this.evtGuardar, this);
        }
    }
    evtGuardar(almacenTejido, obj) {
        obj.agregados++;
        obj.listaAlmacenTejido.push(almacenTejido);
        if (obj.agregados >= obj.listaAlmacenTejidoN.length) {
            obj.almacenTejidoN = new AlmacenTejido();
            obj.listaAlmacenTejidoN = [];
            obj.almacenTejidoN.id = 0;
            obj.idSeleccionado = "N-" + obj.almacenTejidoN.id;
            obj.listaAlmacenTejidoN.push(Object.assign({}, obj.almacenTejidoN));
            obj.listaAlmacenTejidoChange.emit(obj.listaAlmacenTejido);
        }
        if (obj.agregados >= obj.listaAlmacenTejidoN.length && 
            obj.actualizados >= obj.listaAlmacenTejido.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaAlmacenTejidoN.length && 
            obj.actualizados >= obj.listaAlmacenTejido.length  ) {
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
