import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EstudioLaboratorio } from '../shared/estudio-laboratorio';

@Component({
  selector: 'app-estudio-laboratorio-conjunto',
  templateUrl: './estudio-laboratorio-conjunto.component.html',
  styleUrls: ['./estudio-laboratorio-conjunto.component.css'],
})
export class EstudioLaboratorioConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() estudioLaboratorioBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosEstudioLaboratorio;
  @Input() ocultarConjuntosEstudioLaboratorio;
  @Input() estudioLaboratorioService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovEstudioLaboratorioUsuario;
  usuarioUltMovEstudioLaboratorioUsuarioEditar : boolean = false;
  @Input() lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud;
  idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEditar : boolean = false;

  public listaEstudioLaboratorioN: EstudioLaboratorio[] = [];
  @Input() public listaEstudioLaboratorio: EstudioLaboratorio[] = [];
  @Output() public listaEstudioLaboratorioChange = new EventEmitter<EstudioLaboratorio[]>();
  @Input() public estudioLaboratorioN: EstudioLaboratorio = new EstudioLaboratorio();
  @Output() public estudioLaboratorioNChange = new EventEmitter<EstudioLaboratorio>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(estudioLaboratorio, tipo) {
        this.idSeleccionado = tipo + "-" + estudioLaboratorio.id;
        this.estudioLaboratorioN = estudioLaboratorio;
    }

    ngOnInit() {
        this.estudioLaboratorioN.id = 0;
        this.listaEstudioLaboratorioN.push(Object.assign({}, this.estudioLaboratorioN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new EstudioLaboratorio();
        pg.id = this.listaEstudioLaboratorioN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaEstudioLaboratorioN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let estudioLaboratorio of this.listaEstudioLaboratorio) {
            this.estudioLaboratorioService.actualizarEstudioLaboratorio(estudioLaboratorio, this.evtActualiza, this);
        }
        for (let estudioLaboratorio of this.listaEstudioLaboratorioN) {
            estudioLaboratorio.id = null;
            this.estudioLaboratorioService.guardarEstudioLaboratorio(estudioLaboratorio, this.evtGuardar, this);
        }
    }
    evtGuardar(estudioLaboratorio, obj) {
        obj.agregados++;
        obj.listaEstudioLaboratorio.push(estudioLaboratorio);
        if (obj.agregados >= obj.listaEstudioLaboratorioN.length) {
            obj.estudioLaboratorioN = new EstudioLaboratorio();
            obj.listaEstudioLaboratorioN = [];
            obj.estudioLaboratorioN.id = 0;
            obj.idSeleccionado = "N-" + obj.estudioLaboratorioN.id;
            obj.listaEstudioLaboratorioN.push(Object.assign({}, obj.estudioLaboratorioN));
            obj.listaEstudioLaboratorioChange.emit(obj.listaEstudioLaboratorio);
        }
        if (obj.agregados >= obj.listaEstudioLaboratorioN.length && 
            obj.actualizados >= obj.listaEstudioLaboratorio.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaEstudioLaboratorioN.length && 
            obj.actualizados >= obj.listaEstudioLaboratorio.length  ) {
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
