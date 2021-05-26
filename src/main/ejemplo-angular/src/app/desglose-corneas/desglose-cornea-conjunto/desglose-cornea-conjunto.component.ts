import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DesgloseCornea } from '../shared/desglose-cornea';

@Component({
  selector: 'app-desglose-cornea-conjunto',
  templateUrl: './desglose-cornea-conjunto.component.html',
  styleUrls: ['./desglose-cornea-conjunto.component.css'],
})
export class DesgloseCorneaConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() desgloseCorneaBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosDesgloseCornea;
  @Input() ocultarConjuntosDesgloseCornea;
  @Input() desgloseCorneaService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovDesgloseCorneaUsuario;
  usuarioUltMovDesgloseCorneaUsuarioEditar : boolean = false;
  @Input() lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud;
  idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEditar : boolean = false;

  public listaDesgloseCorneaN: DesgloseCornea[] = [];
  @Input() public listaDesgloseCornea: DesgloseCornea[] = [];
  @Output() public listaDesgloseCorneaChange = new EventEmitter<DesgloseCornea[]>();
  @Input() public desgloseCorneaN: DesgloseCornea = new DesgloseCornea();
  @Output() public desgloseCorneaNChange = new EventEmitter<DesgloseCornea>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(desgloseCornea, tipo) {
        this.idSeleccionado = tipo + "-" + desgloseCornea.id;
        this.desgloseCorneaN = desgloseCornea;
    }

    ngOnInit() {
        this.desgloseCorneaN.id = 0;
        this.listaDesgloseCorneaN.push(Object.assign({}, this.desgloseCorneaN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new DesgloseCornea();
        pg.id = this.listaDesgloseCorneaN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaDesgloseCorneaN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let desgloseCornea of this.listaDesgloseCornea) {
            this.desgloseCorneaService.actualizarDesgloseCornea(desgloseCornea, this.evtActualiza, this);
        }
        for (let desgloseCornea of this.listaDesgloseCorneaN) {
            desgloseCornea.id = null;
            this.desgloseCorneaService.guardarDesgloseCornea(desgloseCornea, this.evtGuardar, this);
        }
    }
    evtGuardar(desgloseCornea, obj) {
        obj.agregados++;
        obj.listaDesgloseCornea.push(desgloseCornea);
        if (obj.agregados >= obj.listaDesgloseCorneaN.length) {
            obj.desgloseCorneaN = new DesgloseCornea();
            obj.listaDesgloseCorneaN = [];
            obj.desgloseCorneaN.id = 0;
            obj.idSeleccionado = "N-" + obj.desgloseCorneaN.id;
            obj.listaDesgloseCorneaN.push(Object.assign({}, obj.desgloseCorneaN));
            obj.listaDesgloseCorneaChange.emit(obj.listaDesgloseCornea);
        }
        if (obj.agregados >= obj.listaDesgloseCorneaN.length && 
            obj.actualizados >= obj.listaDesgloseCornea.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaDesgloseCorneaN.length && 
            obj.actualizados >= obj.listaDesgloseCornea.length  ) {
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
