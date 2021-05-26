import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PerfilRedIssste } from '../shared/perfil-red-issste';

@Component({
  selector: 'app-perfil-red-issste-conjunto',
  templateUrl: './perfil-red-issste-conjunto.component.html',
  styleUrls: ['./perfil-red-issste-conjunto.component.css'],
})
export class PerfilRedIsssteConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() perfilRedIsssteBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosPerfilRedIssste;
  @Input() ocultarConjuntosPerfilRedIssste;
  @Input() perfilRedIsssteService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovPerfilRedIsssteUsuario;
  usuarioUltMovPerfilRedIsssteUsuarioEditar : boolean = false;

  public listaPerfilRedIsssteN: PerfilRedIssste[] = [];
  @Input() public listaPerfilRedIssste: PerfilRedIssste[] = [];
  @Output() public listaPerfilRedIsssteChange = new EventEmitter<PerfilRedIssste[]>();
  @Input() public perfilRedIsssteN: PerfilRedIssste = new PerfilRedIssste();
  @Output() public perfilRedIsssteNChange = new EventEmitter<PerfilRedIssste>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(perfilRedIssste, tipo) {
        this.idSeleccionado = tipo + "-" + perfilRedIssste.id;
        this.perfilRedIsssteN = perfilRedIssste;
    }

    ngOnInit() {
        this.perfilRedIsssteN.id = 0;
        this.listaPerfilRedIsssteN.push(Object.assign({}, this.perfilRedIsssteN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new PerfilRedIssste();
        pg.id = this.listaPerfilRedIsssteN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaPerfilRedIsssteN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let perfilRedIssste of this.listaPerfilRedIssste) {
            this.perfilRedIsssteService.actualizarPerfilRedIssste(perfilRedIssste, this.evtActualiza, this);
        }
        for (let perfilRedIssste of this.listaPerfilRedIsssteN) {
            perfilRedIssste.id = null;
            this.perfilRedIsssteService.guardarPerfilRedIssste(perfilRedIssste, this.evtGuardar, this);
        }
    }
    evtGuardar(perfilRedIssste, obj) {
        obj.agregados++;
        obj.listaPerfilRedIssste.push(perfilRedIssste);
        if (obj.agregados >= obj.listaPerfilRedIsssteN.length) {
            obj.perfilRedIsssteN = new PerfilRedIssste();
            obj.listaPerfilRedIsssteN = [];
            obj.perfilRedIsssteN.id = 0;
            obj.idSeleccionado = "N-" + obj.perfilRedIsssteN.id;
            obj.listaPerfilRedIsssteN.push(Object.assign({}, obj.perfilRedIsssteN));
            obj.listaPerfilRedIsssteChange.emit(obj.listaPerfilRedIssste);
        }
        if (obj.agregados >= obj.listaPerfilRedIsssteN.length && 
            obj.actualizados >= obj.listaPerfilRedIssste.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaPerfilRedIsssteN.length && 
            obj.actualizados >= obj.listaPerfilRedIssste.length  ) {
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
