import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from "@angular/core";
import { SolicitudEvaluacionCorneal } from "../shared/solicitud-evaluacion-corneal";
import { DatoProcuracionCorneal } from "../../dato-procuracion-corneales/shared/dato-procuracion-corneal";
import { PermisoAtributo } from "../../permiso-atributos/shared/permiso-atributo";
import { NgModel } from "@angular/forms";

declare var $: any;
declare var bootbox: any;

@Component({
  selector: "app-solicitud-evaluacion-corneal",
  templateUrl: "./solicitud-evaluacion-corneal.component.html",
  styleUrls: ["./solicitud-evaluacion-corneal.component.css"]
})
export class SolicitudEvaluacionCornealComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() solicitudEvaluacionCornealBuscar;
  @Input() permisosAtributos: Array<PermisoAtributo>;
  @Input() permisosConjuntos;
  @Input() validosSolicitudEvaluacionCorneal;
  @Input() solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal;
  @Input() solicitudEvaluacionCornealService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() solicitudEvaluacionCornealChange = new EventEmitter<
    SolicitudEvaluacionCorneal
  >();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovSolicitudEvaluacionCornealUsuario;
  usuarioUltMovSolicitudEvaluacionCornealUsuarioEditar: boolean = false;
  @Input() lista_idcausaMuerteSolicitudEvaluacionCornealCausaMuerte;
  idcausaMuerteSolicitudEvaluacionCornealCausaMuerteEditar: boolean = false;
  @Input() datoProcuracionCornealCI: DatoProcuracionCorneal;
  @Input() datoProcuracionCornealCD: DatoProcuracionCorneal;
  @Input() validosDatoProcuracionCornealCI;
  @Input() validosDatoProcuracionCornealCD;
  @Output() validosDatoProcuracionCornealCIChange = new EventEmitter<
    DatoProcuracionCorneal
  >();
  @Output() validosDatoProcuracionCornealCDChange = new EventEmitter<
    DatoProcuracionCorneal
  >();

  horaMuerteTmp: Date;
  horaInicioRefrigracionTmp: Date;

  listaTemperaturas: Array<{ id: number; descripcion: string }> = [
    {
      id: 2,
      descripcion: "2 ºC"
    },
    {
      id: 3,
      descripcion: "3 ºC"
    },
    {
      id: 4,
      descripcion: '4 ºC'
    },
    {
      id: 5,
      descripcion: "5 ºC"
    },
    {
      id: 6,
      descripcion: "6 ºC"
    },
    {
      id: 7,
      descripcion: "7 ºC"
    },
    {
      id: 8,
      descripcion: "8 ºC"
    }
  ];

  public fechaActual = new Date();
  public minHoraRefrigeracion = new Date();

  @ViewChild('edadComponent') edadComponent: NgModel;

  constructor() {}
  actualizarSolicitudEvaluacionCorneal() {
    if (this.solicitudEvaluacionCorneal.id == null) {
      this.solicitudEvaluacionCornealService.guardarSolicitudEvaluacionCorneal(
        this.solicitudEvaluacionCorneal,
        this.evtGuardar,
        this
      );
    } else {
      this.solicitudEvaluacionCornealService.actualizarSolicitudEvaluacionCorneal(
        this.solicitudEvaluacionCorneal,
        this.evtActualiza,
        this
      );
    }
  }
  cambioFecha(entrada){
    if (this.datoProcuracionCornealCI.fechaInicio!= null && entrada > this.datoProcuracionCornealCI.fechaInicio){
      bootbox.alert('La fecha inicio de procuración cornea izquierda se eliminará, ya que es mayor a la fecha de parada ');
      this.datoProcuracionCornealCI.fechaInicio = null;
    }
    if (this.datoProcuracionCornealCI.fechaFin!= null && entrada > this.datoProcuracionCornealCI.fechaFin){
      bootbox.alert('La fecha fin de procuración cornea izquierda se eliminará, ya que es mayor a la fecha de parada');
      this.datoProcuracionCornealCI.fechaFin = null;
    }
    if (this.datoProcuracionCornealCD.fechaInicio!= null && entrada > this.datoProcuracionCornealCD.fechaInicio){
      bootbox.alert('La fecha inicio de procuración cornea derecha se eliminará, ya que es mayor a la fecha de parada ');
      this.datoProcuracionCornealCD.fechaInicio = null;
    }
    if (this.datoProcuracionCornealCD.fechaFin != null && entrada > this.datoProcuracionCornealCD.fechaFin){
      bootbox.alert('La fecha fin de procuración cornea derecha se eliminará, ya que es mayor a la fecha de parada');
      this.datoProcuracionCornealCD.fechaFin = null;
    }

  }
  evtchangeIdCenatraI(dato){
    if (dato == this.datoProcuracionCornealCD.idcenatra){
      bootbox.alert('No se permite el mismo ID Cenatra que la cornea derecha, se eliminará');
      this.datoProcuracionCornealCI.idcenatra ="";
    }

  }
  evtchangeIdCenatraD(dato){
    if (dato == this.datoProcuracionCornealCI.idcenatra){
      bootbox.alert('No se permite el mismo ID Cenatra que la cornea izquierda, se eliminará');
      this.datoProcuracionCornealCD.idcenatra ="";
    }

  }

  evtGuardar(solicitudEvaluacionCorneal, obj) {
    obj.solicitudEvaluacionCorneal = solicitudEvaluacionCorneal;
    obj.solicitudEvaluacionCornealChange.emit(obj.solicitudEvaluacionCorneal);
    obj.opcion = 0;
    obj.opcion.emit(obj.opcion);
  }
  evtActualiza(bandera, obj) {
    if (bandera) {
      obj.solicitudEvaluacionCornealChange.emit(obj.solicitudEvaluacionCorneal);
      obj.opcion = 0;
      obj.opcion.emit(obj.opcion);
    }
  }
  ngOnChanges(changes) {
    if (changes.opcion && changes.opcion.currentValue != null) {
      if (changes.opcion.currentValue == 1) {
        this.opcion = 1;
        this.actualizarSolicitudEvaluacionCorneal();
      }
    }

    if (changes.permisosAtributos) {
      this.permisosAtributos.forEach(element => {
        if (element.id === 72) {
          element.permiso = 2;
        }
        return element;
      });
    }

    if (changes.solicitudEvaluacionCorneal) {
      this.horaMuerteTmp = new Date(changes.solicitudEvaluacionCorneal.currentValue.horaMuerte);
      this.horaInicioRefrigracionTmp = new Date(changes.solicitudEvaluacionCorneal.currentValue.horaInicioRefrigracion);
    }
  }

  ngOnInit() {
    setTimeout(() => {
      $( ".k-dateinput-wrap .k-input" ).prop("disabled", true);
    }, 4000);
  }

  onChangeHoraMuerteTmp(value: Date): void {
    this.solicitudEvaluacionCorneal.horaMuerte = value.getTime();
  }

  onChangeHoraInicioRefrigracionTmp(value: Date): void {
    this.solicitudEvaluacionCorneal.horaInicioRefrigracion = value.getTime();
  }

  horaMuerteChange() {
    this.minHoraRefrigeracion = new Date(this.solicitudEvaluacionCorneal.horaMuerte);
  }

  get requeridoEdad() {
    this.validosSolicitudEvaluacionCorneal.edad = true;
    if (!this.solicitudEvaluacionCorneal.edad) {
      this.validosSolicitudEvaluacionCorneal.edad = false;
      return true;
    }
    return false;
  }

  get minDate (){
   return this.solicitudEvaluacionCorneal.fechaMuerte ? new Date(this.solicitudEvaluacionCorneal.fechaMuerte) : null;
  }
}
