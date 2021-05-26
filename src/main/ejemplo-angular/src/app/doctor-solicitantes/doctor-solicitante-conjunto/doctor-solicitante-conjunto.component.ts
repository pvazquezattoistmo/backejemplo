import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DoctorSolicitante } from '../shared/doctor-solicitante';

@Component({
  selector: 'app-doctor-solicitante-conjunto',
  templateUrl: './doctor-solicitante-conjunto.component.html',
  styleUrls: ['./doctor-solicitante-conjunto.component.css'],
})
export class DoctorSolicitanteConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() doctorSolicitanteBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosDoctorSolicitante;
  @Input() ocultarConjuntosDoctorSolicitante;
  @Input() doctorSolicitanteService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovDoctorSolicitanteUsuario;
  usuarioUltMovDoctorSolicitanteUsuarioEditar : boolean = false;
  @Input() lista_idcargoDoctorSolicitanteCatalogoCargo;
  idcargoDoctorSolicitanteCatalogoCargoEditar : boolean = false;

  public listaDoctorSolicitanteN: DoctorSolicitante[] = [];
  @Input() public listaDoctorSolicitante: DoctorSolicitante[] = [];
  @Output() public listaDoctorSolicitanteChange = new EventEmitter<DoctorSolicitante[]>();
  @Input() public doctorSolicitanteN: DoctorSolicitante = new DoctorSolicitante();
  @Output() public doctorSolicitanteNChange = new EventEmitter<DoctorSolicitante>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(doctorSolicitante, tipo) {
        this.idSeleccionado = tipo + "-" + doctorSolicitante.id;
        this.doctorSolicitanteN = doctorSolicitante;
    }

    ngOnInit() {
        this.doctorSolicitanteN.id = 0;
        this.listaDoctorSolicitanteN.push(Object.assign({}, this.doctorSolicitanteN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new DoctorSolicitante();
        pg.id = this.listaDoctorSolicitanteN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaDoctorSolicitanteN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let doctorSolicitante of this.listaDoctorSolicitante) {
            this.doctorSolicitanteService.actualizarDoctorSolicitante(doctorSolicitante, this.evtActualiza, this);
        }
        for (let doctorSolicitante of this.listaDoctorSolicitanteN) {
            doctorSolicitante.id = null;
            this.doctorSolicitanteService.guardarDoctorSolicitante(doctorSolicitante, this.evtGuardar, this);
        }
    }
    evtGuardar(doctorSolicitante, obj) {
        obj.agregados++;
        obj.listaDoctorSolicitante.push(doctorSolicitante);
        if (obj.agregados >= obj.listaDoctorSolicitanteN.length) {
            obj.doctorSolicitanteN = new DoctorSolicitante();
            obj.listaDoctorSolicitanteN = [];
            obj.doctorSolicitanteN.id = 0;
            obj.idSeleccionado = "N-" + obj.doctorSolicitanteN.id;
            obj.listaDoctorSolicitanteN.push(Object.assign({}, obj.doctorSolicitanteN));
            obj.listaDoctorSolicitanteChange.emit(obj.listaDoctorSolicitante);
        }
        if (obj.agregados >= obj.listaDoctorSolicitanteN.length && 
            obj.actualizados >= obj.listaDoctorSolicitante.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaDoctorSolicitanteN.length && 
            obj.actualizados >= obj.listaDoctorSolicitante.length  ) {
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
