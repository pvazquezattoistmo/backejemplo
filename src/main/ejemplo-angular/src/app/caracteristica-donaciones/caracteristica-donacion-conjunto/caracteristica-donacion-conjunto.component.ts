import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CaracteristicaDonacion } from '../shared/caracteristica-donacion';

@Component({
  selector: 'app-caracteristica-donacion-conjunto',
  templateUrl: './caracteristica-donacion-conjunto.component.html',
  styleUrls: ['./caracteristica-donacion-conjunto.component.css'],
})
export class CaracteristicaDonacionConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() caracteristicaDonacionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosCaracteristicaDonacion;
  @Input() ocultarConjuntosCaracteristicaDonacion;
  @Input() caracteristicaDonacionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovCaracteristicaDonacionUsuario;
  usuarioUltMovCaracteristicaDonacionUsuarioEditar : boolean = false;
  @Input() lista_idoficioDonacionCaracteristicaDonacionOficioDonacion;
  idoficioDonacionCaracteristicaDonacionOficioDonacionEditar : boolean = false;

  public listaCaracteristicaDonacionN: CaracteristicaDonacion[] = [];
  @Input() public listaCaracteristicaDonacion: CaracteristicaDonacion[] = [];
  @Output() public listaCaracteristicaDonacionChange = new EventEmitter<CaracteristicaDonacion[]>();
  @Input() public caracteristicaDonacionN: CaracteristicaDonacion = new CaracteristicaDonacion();
  @Output() public caracteristicaDonacionNChange = new EventEmitter<CaracteristicaDonacion>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(caracteristicaDonacion, tipo) {
        this.idSeleccionado = tipo + "-" + caracteristicaDonacion.id;
        this.caracteristicaDonacionN = caracteristicaDonacion;
    }

    ngOnInit() {
        this.caracteristicaDonacionN.id = 0;
        this.listaCaracteristicaDonacionN.push(Object.assign({}, this.caracteristicaDonacionN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new CaracteristicaDonacion();
        pg.id = this.listaCaracteristicaDonacionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaCaracteristicaDonacionN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let caracteristicaDonacion of this.listaCaracteristicaDonacion) {
            this.caracteristicaDonacionService.actualizarCaracteristicaDonacion(caracteristicaDonacion, this.evtActualiza, this);
        }
        for (let caracteristicaDonacion of this.listaCaracteristicaDonacionN) {
            caracteristicaDonacion.id = null;
            this.caracteristicaDonacionService.guardarCaracteristicaDonacion(caracteristicaDonacion, this.evtGuardar, this);
        }
    }
    evtGuardar(caracteristicaDonacion, obj) {
        obj.agregados++;
        obj.listaCaracteristicaDonacion.push(caracteristicaDonacion);
        if (obj.agregados >= obj.listaCaracteristicaDonacionN.length) {
            obj.caracteristicaDonacionN = new CaracteristicaDonacion();
            obj.listaCaracteristicaDonacionN = [];
            obj.caracteristicaDonacionN.id = 0;
            obj.idSeleccionado = "N-" + obj.caracteristicaDonacionN.id;
            obj.listaCaracteristicaDonacionN.push(Object.assign({}, obj.caracteristicaDonacionN));
            obj.listaCaracteristicaDonacionChange.emit(obj.listaCaracteristicaDonacion);
        }
        if (obj.agregados >= obj.listaCaracteristicaDonacionN.length && 
            obj.actualizados >= obj.listaCaracteristicaDonacion.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaCaracteristicaDonacionN.length && 
            obj.actualizados >= obj.listaCaracteristicaDonacion.length  ) {
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
