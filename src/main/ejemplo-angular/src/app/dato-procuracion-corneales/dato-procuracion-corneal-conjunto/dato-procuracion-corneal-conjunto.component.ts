import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatoProcuracionCorneal } from '../shared/dato-procuracion-corneal';

@Component({
  selector: 'app-dato-procuracion-corneal-conjunto',
  templateUrl: './dato-procuracion-corneal-conjunto.component.html',
  styleUrls: ['./dato-procuracion-corneal-conjunto.component.css'],
})
export class DatoProcuracionCornealConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() datoProcuracionCornealBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosDatoProcuracionCorneal;
  @Input() ocultarConjuntosDatoProcuracionCorneal;
  @Input() datoProcuracionCornealService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovDatoProcuracionCornealUsuario;
  usuarioUltMovDatoProcuracionCornealUsuarioEditar : boolean = false;
  @Input() lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal;
  idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEditar : boolean = false;

  public listaDatoProcuracionCornealN: DatoProcuracionCorneal[] = [];
  @Input() public listaDatoProcuracionCorneal: DatoProcuracionCorneal[] = [];
  @Output() public listaDatoProcuracionCornealChange = new EventEmitter<DatoProcuracionCorneal[]>();
  @Input() public datoProcuracionCornealN: DatoProcuracionCorneal = new DatoProcuracionCorneal();
  @Output() public datoProcuracionCornealNChange = new EventEmitter<DatoProcuracionCorneal>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(datoProcuracionCorneal, tipo) {
        this.idSeleccionado = tipo + "-" + datoProcuracionCorneal.id;
        this.datoProcuracionCornealN = datoProcuracionCorneal;
    }

    ngOnInit() {
        this.datoProcuracionCornealN.id = 0;
        this.listaDatoProcuracionCornealN.push(Object.assign({}, this.datoProcuracionCornealN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new DatoProcuracionCorneal();
        pg.id = this.listaDatoProcuracionCornealN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaDatoProcuracionCornealN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let datoProcuracionCorneal of this.listaDatoProcuracionCorneal) {
            this.datoProcuracionCornealService.actualizarDatoProcuracionCorneal(datoProcuracionCorneal, this.evtActualiza, this);
        }
        for (let datoProcuracionCorneal of this.listaDatoProcuracionCornealN) {
            datoProcuracionCorneal.id = null;
            this.datoProcuracionCornealService.guardarDatoProcuracionCorneal(datoProcuracionCorneal, this.evtGuardar, this);
        }
    }
    evtGuardar(datoProcuracionCorneal, obj) {
        obj.agregados++;
        obj.listaDatoProcuracionCorneal.push(datoProcuracionCorneal);
        if (obj.agregados >= obj.listaDatoProcuracionCornealN.length) {
            obj.datoProcuracionCornealN = new DatoProcuracionCorneal();
            obj.listaDatoProcuracionCornealN = [];
            obj.datoProcuracionCornealN.id = 0;
            obj.idSeleccionado = "N-" + obj.datoProcuracionCornealN.id;
            obj.listaDatoProcuracionCornealN.push(Object.assign({}, obj.datoProcuracionCornealN));
            obj.listaDatoProcuracionCornealChange.emit(obj.listaDatoProcuracionCorneal);
        }
        if (obj.agregados >= obj.listaDatoProcuracionCornealN.length && 
            obj.actualizados >= obj.listaDatoProcuracionCorneal.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaDatoProcuracionCornealN.length && 
            obj.actualizados >= obj.listaDatoProcuracionCorneal.length  ) {
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
