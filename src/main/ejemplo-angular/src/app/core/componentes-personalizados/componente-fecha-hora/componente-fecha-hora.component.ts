import {Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {GlobalesService} from '../../../shared/globales.service';
import {NgModel} from '@angular/forms';

declare var $: any;
@Component({
    selector: 'app-componente-fecha-hora',
    templateUrl: './componente-fecha-hora.component.html',
    styleUrls: ['./componente-fecha-hora.component.css']
})
export class ComponenteFechaHoraComponent implements OnInit {
    @Input() public buscar: boolean = true;
    @Input() public componente: string;
    @Input() public atributo: string;
    @Input() public permisosAtributos;
    @Input() public dato: Date;
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
    @Output() public datoChange = new EventEmitter<Date>();
    public datointerno: Date;
    @Input() public valido: boolean = false;
    @Output() public validoChange = new EventEmitter<boolean>();
    @ViewChild('componenteInput') componenteInput: ElementRef;
    idFecha;
    constructor(private globalesService: GlobalesService
    ) {
        let d = new Date();
        this.idFecha = d.getTime();
    }

    ngOnInit() {
        this.fechaValidarFecha();
    }
    fechaValidarFecha() {
        if ($("input[id='" + this.componente + "_" + this.atributo + this.idFecha+"']").length &&
            this.permisosAtributos.length > 0) {
//            let formatoFecha = "dd/MM/yyyy";
            if (this.permisosAtributos.length > 0) {
//                formatoFecha = this.globalesService.avalidacion(this, this.componente, this.atributo);
            }
            $("input[id='" + this.componente + "_" + this.atributo +this.idFecha+ "']").kendoDateTimePicker({
//                format: formatoFecha,
                dateInput: true,
                change: this.changeFechaValidarFecha.bind(this)
            });
            $("input[id='" + this.componente + "_" + this.atributo + this.idFecha+"']").click(this.abreComponenteFecha.bind(this));
            $("input[id='" + this.componente + "_" + this.atributo +this.idFecha+ "']").parent()
                .children("span.k-select")
                .children("span.k-i-calendar")
                .click(this.abreComponenteFecha.bind(this));
            $("input[id='" + this.componente + "_" + this.atributo + this.idFecha+"']").parent()
                .children("span.k-select")
                .children("span.k-i-clock")
                .click(this.abreComponenteFechaHora.bind(this));
//            $("input[id='" + this.componente + "_" + this.atributo + "']").keydown(function (event) {event.preventDefault(); return false;});
            $("input[id='" + this.componente + "_" + this.atributo + this.idFecha + "']").parent().css("height", "100%");
        } else {
            setTimeout(() => {this.fechaValidarFecha();}, 300);
        }
    }
    abreComponenteFecha(entrada) {
        let datepicker = $("input[id='" + this.componente + "_" + this.atributo +this.idFecha+ "']").data("kendoDateTimePicker");
        datepicker.open("date");
    }
    abreComponenteFechaHora(entrada) {
        let datepicker = $("input[id='" + this.componente + "_" + this.atributo +this.idFecha+ "']").data("kendoDateTimePicker");
        datepicker.open("time");
    }
    changeFechaValidarFecha(entrada) {
        if (entrada.sender.value) {
          setTimeout(() => {
            this.datointerno = entrada.sender.value();
            this.dato = this.datointerno;
            this.datoChange.emit(this.dato);
          });
        }
    }
    get alertar() {
        if (!this.requerido) {
            if (!this.valido) {
              setTimeout(() => {
                this.valido = true;
                this.validoChange.emit(this.valido);
              });
            }
        } else {
            if (this.datointerno instanceof Date) {
                if (!this.valido) {
                  setTimeout(() => {
                    this.valido = true;
                    this.validoChange.emit(this.valido);
                  });
                }
            }else{
                if (this.valido) {
                  setTimeout(() => {
                    this.valido = false;
                    this.validoChange.emit(this.valido);
                  });
                }
            }
        }
        return (this.requerido || this.patron) && !this.buscar;
    }
    get requerido() {
        let salida: boolean = false;
        if (this.permisosAtributos.length > 0) {
            if (this.globalesService.arequerido(this, this.componente, this.atributo)) {
                if (this.dato != null)
                    salida = false;
                else
                    salida = true;
            } else {
                salida = false;
            }
        }
        return salida;
    }
    get patron() {
        return false;
    }
    ngOnChanges(changes) {
        if (changes && changes.dato && (changes.dato.currentValue !== undefined) &&
            changes.dato.currentValue != this.datointerno) {
            if (typeof changes.dato.currentValue === 'string'){
                this.datointerno = this.globalesService.toDate(changes.dato.currentValue);
            }else{
               this.datointerno = changes.dato.currentValue;
            }
            if ($("input[id='" + this.componente + "_" + this.atributo + this.idFecha+"']").length) {
                $("input[id='" + this.componente + "_" + this.atributo + this.idFecha+"']").data("kendoDateTimePicker").value(this.datointerno);
            }
        }
        if (changes && changes.permisosAtributos && (changes.permisosAtributos.currentValue !== undefined)) {
            if (this.permisosAtributos.length > 0 && $("input[id='" + this.componente + "_" + this.atributo + this.idFecha+"']").data("kendoDateTimePicker") !== undefined) {
                $("input[id='" + this.componente + "_" + this.atributo + this.idFecha+"']").data("kendoDateTimePicker").setOptions({
//                    format: "dd/MM/yyyy",
                    dateInput: true,
                    change: this.changeFechaValidarFecha.bind(this)
                });
            }
        }
    }
}
