import { DatoProcuracionCornealService } from './../shared/dato-procuracion-corneal.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { DatoProcuracionCorneal } from '../shared/dato-procuracion-corneal';

declare var bootbox: any;
@Component({
  selector: 'app-dato-procuracion-corneal',
  templateUrl: './dato-procuracion-corneal.component.html',
  styleUrls: ['./dato-procuracion-corneal.component.css'],
})
export class DatoProcuracionCornealComponent implements OnInit, OnChanges {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() datoProcuracionCornealBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosDatoProcuracionCorneal;
  @Input() datoProcuracionCorneal:DatoProcuracionCorneal;
  @Input() datoProcuracionCornealService: DatoProcuracionCornealService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() datoProcuracionCornealChange = new EventEmitter<DatoProcuracionCorneal>();
  @Output() changeIdCenatra = new EventEmitter<string>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovDatoProcuracionCornealUsuario;
  usuarioUltMovDatoProcuracionCornealUsuarioEditar : boolean = false;
  @Input() lista_idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCorneal;
  idsolicitudEvaluacionCornealDatoProcuracionCornealSolicitudEvaluacionCornealEditar : boolean = false;
  public fechaActual = new Date();
  @Input() public minDate: Date;
  constructor( ) { }
    actualizarDatoProcuracionCorneal() {
        if (this.datoProcuracionCorneal.id == null) {
            this.datoProcuracionCornealService.guardarDatoProcuracionCorneal(this.datoProcuracionCorneal, this.evtGuardar, this);
        } else {
            this.datoProcuracionCornealService.actualizarDatoProcuracionCorneal(this.datoProcuracionCorneal, this.evtActualiza, this);
        }
    }
    evtGuardar(datoProcuracionCorneal, obj) {
        obj.datoProcuracionCorneal = datoProcuracionCorneal;
        obj.datoProcuracionCornealChange.emit(obj.datoProcuracionCorneal);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.datoProcuracionCornealChange.emit(obj.datoProcuracionCorneal);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarDatoProcuracionCorneal() ;
            }
        }
    }


  ngOnInit() {

  }

  get minDateProcuracion() {
    if (this.datoProcuracionCorneal.fechaInicio) {
      return new Date(this.datoProcuracionCorneal.fechaInicio);
    }
    return null;
  }

  get minHourProcuracion () {
    if (this.datoProcuracionCorneal.fechaInicio && this.datoProcuracionCorneal.fechaFin && this.datoProcuracionCorneal.horaInicio) {
      if (this.datoProcuracionCorneal.fechaInicio === this.datoProcuracionCorneal.fechaFin) {
        return new Date(this.datoProcuracionCorneal.horaInicio);
      }
    }
    return null;
  }

  idCenatraChange() {
    (this.datoProcuracionCorneal.idcenatra);
    this.changeIdCenatra.emit(this.datoProcuracionCorneal.idcenatra);
    this.datoProcuracionCornealService.getDatoProcuracionCornealByIdcenatra(this.datoProcuracionCorneal.idcenatra, this.evtBuscarIdCenatra, this);
  }

  evtBuscarIdCenatra(data, obj) {
    if (data.id) {
      (data.idcenatra);
      (obj.datoProcuracionCorneal.idcenatra);
      if (data.idcenatra == obj.datoProcuracionCorneal.idcenatra && data.id != obj.datoProcuracionCorneal.id) {
        bootbox.alert("El id cenatra ya existe.");
        obj.datoProcuracionCorneal.idcenatra = null;
      }
    }
  }

}
