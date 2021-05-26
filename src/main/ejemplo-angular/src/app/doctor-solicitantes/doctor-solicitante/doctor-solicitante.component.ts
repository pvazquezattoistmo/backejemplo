import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DoctorSolicitante } from '../shared/doctor-solicitante';

@Component({
  selector: 'app-doctor-solicitante',
  templateUrl: './doctor-solicitante.component.html',
  styleUrls: ['./doctor-solicitante.component.css'],
})
export class DoctorSolicitanteComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() doctorSolicitanteBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosDoctorSolicitante;
  @Input() doctorSolicitante:DoctorSolicitante;
  @Input() doctorSolicitanteService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() doctorSolicitanteChange = new EventEmitter<DoctorSolicitante>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovDoctorSolicitanteUsuario;
  usuarioUltMovDoctorSolicitanteUsuarioEditar : boolean = false;
  @Input() lista_idcargoDoctorSolicitanteCatalogoCargo;
  idcargoDoctorSolicitanteCatalogoCargoEditar : boolean = false;
  @Input() lista_idhospitalDoctorSolicitanteHospital;
  idhospitalDoctorSolicitanteHospitalEditar : boolean = false;

  
  constructor( ) { }
    actualizarDoctorSolicitante() {
        if (this.doctorSolicitante.id == null) {
            this.doctorSolicitanteService.guardarDoctorSolicitante(this.doctorSolicitante, this.evtGuardar, this);
        } else {
            this.doctorSolicitanteService.actualizarDoctorSolicitante(this.doctorSolicitante, this.evtActualiza, this);
        }
    }
    evtGuardar(doctorSolicitante, obj) {
        obj.doctorSolicitante = doctorSolicitante;
        obj.doctorSolicitanteChange.emit(obj.doctorSolicitante);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.doctorSolicitanteChange.emit(obj.doctorSolicitante);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarDoctorSolicitante() ;
            }
        }
    }    
    

  ngOnInit() {
  }
  
  
}
