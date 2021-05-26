import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LamparaHendidura } from '../shared/lampara-hendidura';

@Component({
  selector: 'app-lampara-hendidura',
  templateUrl: './lampara-hendidura.component.html',
  styleUrls: ['./lampara-hendidura.component.css'],
})
export class LamparaHendiduraComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() lamparaHendiduraBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosLamparaHendidura;
  @Input() lamparaHendidura:LamparaHendidura;
  @Input() lamparaHendiduraService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() lamparaHendiduraChange = new EventEmitter<LamparaHendidura>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovLamparaHendiduraUsuario;
  usuarioUltMovLamparaHendiduraUsuarioEditar : boolean = false;
  @Input() lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud;
  idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEditar : boolean = false;
  @Input() public enable: boolean;

  constructor( ) { }
    actualizarLamparaHendidura() {
        if (this.lamparaHendidura.id == null) {
            this.lamparaHendiduraService.guardarLamparaHendidura(this.lamparaHendidura, this.evtGuardar, this);
        } else {
            this.lamparaHendiduraService.actualizarLamparaHendidura(this.lamparaHendidura, this.evtActualiza, this);
        }
    }
    evtGuardar(lamparaHendidura, obj) {
        obj.lamparaHendidura = lamparaHendidura;
        obj.lamparaHendiduraChange.emit(obj.lamparaHendidura);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.lamparaHendiduraChange.emit(obj.lamparaHendidura);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarLamparaHendidura() ;
            }
        }
    }


  ngOnInit() {
  }


}
