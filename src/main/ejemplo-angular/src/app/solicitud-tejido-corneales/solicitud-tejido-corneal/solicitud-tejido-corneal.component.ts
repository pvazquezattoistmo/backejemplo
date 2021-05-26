import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SolicitudTejidoCorneal } from '../shared/solicitud-tejido-corneal';
import { TipoCirugiaPrevista } from '../../tipo-cirugia-previstas/shared/tipo-cirugia-prevista';
import { TipoCirugiaPrevistaService } from '../../tipo-cirugia-previstas/shared/tipo-cirugia-prevista.service';

@Component({
  selector: 'app-solicitud-tejido-corneal',
  templateUrl: './solicitud-tejido-corneal.component.html',
  styleUrls: ['./solicitud-tejido-corneal.component.css'],
})
export class SolicitudTejidoCornealComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() solicitudTejidoCornealBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosSolicitudTejidoCorneal;
  @Input() solicitudTejidoCorneal:SolicitudTejidoCorneal;
  @Input() solicitudTejidoCornealService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() solicitudTejidoCornealChange = new EventEmitter<SolicitudTejidoCorneal>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovSolicitudTejidoCornealUsuario;
  usuarioUltMovSolicitudTejidoCornealUsuarioEditar : boolean = false;
  @Input() lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante;
  iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitanteEditar : boolean = false;
  @Input() lista_idhospitalSolicitudTejidoCornealHospital;
  @Input() tipoCirugiaPrevista:TipoCirugiaPrevista;
  @Input() validosTipoCirugiaPrevista;
  @Input() desActivar:boolean;
  @Input() desActivarHosp:boolean;
  @Output() validosTipoCirugiaPrevistaChange = new EventEmitter<TipoCirugiaPrevista>();
  idhospitalSolicitudTejidoCornealHospitalEditar : boolean = false;
  @Input() otracheck : number;
  @Input() public isDisabled: boolean;


  constructor( ) { }
    actualizarSolicitudTejidoCorneal() {
        if (this.solicitudTejidoCorneal.id == null) {
            this.solicitudTejidoCornealService.guardarSolicitudTejidoCorneal(this.solicitudTejidoCorneal, this.evtGuardar, this);
        } else {
            this.solicitudTejidoCornealService.actualizarSolicitudTejidoCorneal(this.solicitudTejidoCorneal, this.evtActualiza, this);
        }
    }
    evtGuardar(solicitudTejidoCorneal, obj) {
        obj.solicitudTejidoCorneal = solicitudTejidoCorneal;
        obj.solicitudTejidoCornealChange.emit(obj.solicitudTejidoCorneal);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.solicitudTejidoCornealChange.emit(obj.solicitudTejidoCorneal);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarSolicitudTejidoCorneal() ;
            }
        }
    }


  ngOnInit() {
  }


}
