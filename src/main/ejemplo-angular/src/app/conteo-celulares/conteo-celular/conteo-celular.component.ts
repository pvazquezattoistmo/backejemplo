import { DesgloseCornea } from './../../desglose-corneas/shared/desglose-cornea';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConteoCelular } from '../shared/conteo-celular';

@Component({
  selector: 'app-conteo-celular',
  templateUrl: './conteo-celular.component.html',
  styleUrls: ['./conteo-celular.component.css'],
})
export class ConteoCelularComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() conteoCelularBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosConteoCelular;
  @Input() conteoCelular:ConteoCelular;
  @Input() conteoCelularService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() conteoCelularChange = new EventEmitter<ConteoCelular>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovConteoCelularUsuario;
  usuarioUltMovConteoCelularUsuarioEditar : boolean = false;
  @Input() lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud;
  idevaluacionSolicitudConteoCelularEvaluacionSolicitudEditar : boolean = false;
  @Input() public enable: boolean;
  @Input() desgloseCornea: DesgloseCornea;
  @Output() public saveDesgloseCorneaEvent = new EventEmitter<void>();
  @Input() listaDesgloseCornea: DesgloseCornea[] = [];

  public modalActive = false;

  constructor( ) { }
    actualizarConteoCelular() {
        if (this.conteoCelular.id == null) {
            this.conteoCelularService.guardarConteoCelular(this.conteoCelular, this.evtGuardar, this);
        } else {
            this.conteoCelularService.actualizarConteoCelular(this.conteoCelular, this.evtActualiza, this);
        }
    }
    evtGuardar(conteoCelular, obj) {
        obj.conteoCelular = conteoCelular;
        obj.conteoCelularChange.emit(obj.conteoCelular);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.conteoCelularChange.emit(obj.conteoCelular);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarConteoCelular() ;
            }
        }
    }


  ngOnInit() {
  }

  public addHandler() {
    this.modalActive = true;
  }

  public closeModal(): void {
    this.modalActive = false;
  }

  public onSaveDesgloseCornea() {
    this.saveDesgloseCorneaEvent.emit();
    this.closeModal();
  }

}
