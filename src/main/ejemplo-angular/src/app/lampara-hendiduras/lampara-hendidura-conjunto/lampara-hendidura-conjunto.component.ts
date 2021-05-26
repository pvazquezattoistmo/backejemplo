import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LamparaHendidura } from '../shared/lampara-hendidura';

@Component({
  selector: 'app-lampara-hendidura-conjunto',
  templateUrl: './lampara-hendidura-conjunto.component.html',
  styleUrls: ['./lampara-hendidura-conjunto.component.css'],
})
export class LamparaHendiduraConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() lamparaHendiduraBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosLamparaHendidura;
  @Input() ocultarConjuntosLamparaHendidura;
  @Input() lamparaHendiduraService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovLamparaHendiduraUsuario;
  usuarioUltMovLamparaHendiduraUsuarioEditar : boolean = false;
  @Input() lista_idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitud;
  idevaluacionSolicitudLamparaHendiduraEvaluacionSolicitudEditar : boolean = false;

  public listaLamparaHendiduraN: LamparaHendidura[] = [];
  @Input() public listaLamparaHendidura: LamparaHendidura[] = [];
  @Output() public listaLamparaHendiduraChange = new EventEmitter<LamparaHendidura[]>();
  @Input() public lamparaHendiduraN: LamparaHendidura = new LamparaHendidura();
  @Output() public lamparaHendiduraNChange = new EventEmitter<LamparaHendidura>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(lamparaHendidura, tipo) {
        this.idSeleccionado = tipo + "-" + lamparaHendidura.id;
        this.lamparaHendiduraN = lamparaHendidura;
    }

    ngOnInit() {
        this.lamparaHendiduraN.id = 0;
        this.listaLamparaHendiduraN.push(Object.assign({}, this.lamparaHendiduraN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new LamparaHendidura();
        pg.id = this.listaLamparaHendiduraN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaLamparaHendiduraN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let lamparaHendidura of this.listaLamparaHendidura) {
            this.lamparaHendiduraService.actualizarLamparaHendidura(lamparaHendidura, this.evtActualiza, this);
        }
        for (let lamparaHendidura of this.listaLamparaHendiduraN) {
            lamparaHendidura.id = null;
            this.lamparaHendiduraService.guardarLamparaHendidura(lamparaHendidura, this.evtGuardar, this);
        }
    }
    evtGuardar(lamparaHendidura, obj) {
        obj.agregados++;
        obj.listaLamparaHendidura.push(lamparaHendidura);
        if (obj.agregados >= obj.listaLamparaHendiduraN.length) {
            obj.lamparaHendiduraN = new LamparaHendidura();
            obj.listaLamparaHendiduraN = [];
            obj.lamparaHendiduraN.id = 0;
            obj.idSeleccionado = "N-" + obj.lamparaHendiduraN.id;
            obj.listaLamparaHendiduraN.push(Object.assign({}, obj.lamparaHendiduraN));
            obj.listaLamparaHendiduraChange.emit(obj.listaLamparaHendidura);
        }
        if (obj.agregados >= obj.listaLamparaHendiduraN.length && 
            obj.actualizados >= obj.listaLamparaHendidura.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaLamparaHendiduraN.length && 
            obj.actualizados >= obj.listaLamparaHendidura.length  ) {
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
