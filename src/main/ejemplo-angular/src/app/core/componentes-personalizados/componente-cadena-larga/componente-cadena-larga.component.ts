import {Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {GlobalesService} from '../../../shared/globales.service';
import {FormGroup, FormControl, NgForm, NgModel} from '@angular/forms';

@Component({
    selector: 'app-componente-cadena-larga',
    templateUrl: './componente-cadena-larga.component.html',
    styleUrls: ['./componente-cadena-larga.component.css'],
    providers: [GlobalesService]


})
export class ComponenteCadenaLargaComponent implements OnInit {
    @Input() public buscar: boolean = true;
    @Input() public componente: string;
    @Input() public atributo: string;
    @Input() public permisosAtributos;
    @Input() public dato: string;
    @Input() public maxlength: string;
    /*
     *----- Agregados start----
    */
    @Input() public posicion: string = 'default';
    @Input() public sizeLB: string = '100';
    @Input() public sizeInput: string = '100';
    @Input() public isVisibleLB: boolean = true;
    @Input() public isVisibleInput: boolean = true;
    @Input() public alineacion: string = 'text-justify';
    /*
     *----- Agregados end----
    */
    @Output() public datoChange = new EventEmitter<string>();
    public datointerno: any;
    @Input() public valido: boolean = false;
    @Output() public validoChange = new EventEmitter<boolean>();
    @ViewChild('componenteInput') componenteInput: NgModel;
    @Input() enable: boolean;
    datoCambio() {
      var root = this;

      // setTimeout(() => {
        root.dato = root.datointerno.toUpperCase();
        root.datoChange.emit(root.dato);
        root.validaGenerales();

      //  }
      //);
    }
    constructor(private globalesService: GlobalesService) {}
    validaGenerales(){
      let validacion = this.globalesService.avalidacion(this, this.componente, this.atributo);
      let datovalido = true;
      if (validacion != null) {
          let regexp = new RegExp(validacion);
          if (this.datointerno)
              datovalido = regexp.test(this.datointerno);
          else
              datovalido = false;
      }

      if (!this.requerido && this.dato == null) {
          if (!this.valido) {
            setTimeout(() => {
              this.valido = true;
              this.validoChange.emit(this.valido);
            });
          }
      } else {

          if (this.datointerno && datovalido) {
              if (!this.valido) {
                setTimeout(() => {
                  this.valido = true;
                  this.validoChange.emit(this.valido);
                });
              }
          } else {
              if (this.valido) {
                setTimeout(() => {
                  this.valido = false;
                  this.validoChange.emit(this.valido);
                });
              }
          }
      }
    }
    get alertar() {

        let salida = false;
        if (this.componenteInput && (this.componenteInput.dirty || this.componenteInput.touched)) {
            salida = !this.valido;
        }

        return salida;
    }
    get requerido() {

        return this.globalesService.arequerido(this, this.componente, this.atributo);
    }
    get patron() {
        let validacion = this.globalesService.avalidacion(this, this.componente, this.atributo);
        let datovalido = true;
        if (validacion != null) {
            let regexp = new RegExp(validacion);
            if (this.datointerno)
                datovalido = regexp.test(this.datointerno);
            else
                datovalido = false;
        }
        return datovalido;
//        if (this.componenteInput && this.componenteInput.errors && this.componenteInput.errors.pattern)
//            return true
//        return false;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes && changes.dato && (changes.dato.currentValue !== undefined)
             &&  changes.dato.currentValue != this.datointerno ){
               this.datointerno = changes.dato.currentValue;
               this.validaGenerales();

             }
    }
}
