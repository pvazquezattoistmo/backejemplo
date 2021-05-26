import { Component, OnInit } from '@angular/core';
import { ConteoCelular } from '../shared/conteo-celular';
import { GlobalesService } from '../../shared/globales.service';
import { URLProvider } from '../../shared/url-provider';
import { PermisoAtributoService } from '../../permiso-atributos/shared/permiso-atributo.service';
import { PermisoTablaService } from '../../permiso-tablas/shared/permiso-tabla.service';

declare var $: any;
declare var DataTable: any;

@Component({
    selector: 'app-conteo-celular-table',
    templateUrl: './conteo-celular-table.component.html',
    styleUrls: ['./conteo-celular-table.component.css'],
    providers:[GlobalesService, 
               PermisoAtributoService,
               PermisoTablaService,
               ] 
})
export class ConteoCelularTableComponent implements OnInit {
    public primero: boolean = true;
    public conteoCelularSeleccionado: ConteoCelular;
    public usuariologueado;
    public permisosAtributos = [];
    public permisosTabla = { "tabla": "conteoCelular", "permiso": 0, "etiqueta": "" };
    public ptabla: boolean = false;
    public pattr: boolean = false;
    constructor(public globalesService: GlobalesService,
        public permisoAtributoService: PermisoAtributoService,
        public permisoTablaService: PermisoTablaService,
        public urlProvider: URLProvider
    ) {
        this.conteoCelularSeleccionado = new ConteoCelular();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'conteoCelular'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    evtTablas(lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'conteoCelular'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    }
    evtAtributos(lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function() {  obj.getColumnas(obj); }, 500);
        }
    }
    get muestraTabla() {
        return this.ptabla && this.pattr;
    }
    getColumnas(obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("conteoCelular", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" } );
        if (!this.avisible("conteoCelular", "idevaluacionSolicitud"))
            columnasNoVisibles.push(1);
        columnas.push({
                "data": function(oObj) {
		     if (oObj.idevaluacionSolicitud)
                    	return "<span style=\"cursor: pointer\">"+ oObj.idevaluacionSolicitud.status +"</span>";
		     return "";	
                }
        });
        if (!this.avisible("conteoCelular", "numeroCelular"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "numeroCelular" } );
        if (!this.avisible("conteoCelular", "idnumeroCelula"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "idnumeroCelula" } );
        if (!this.avisible("conteoCelular", "hexagonalidad"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "hexagonalidad" } );
        if (!this.avisible("conteoCelular", "mayor60"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "mayor60" } );
        if (!this.avisible("conteoCelular", "plemorfismo"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "plemorfismo" } );
        if (!this.avisible("conteoCelular", "cvtamano"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "cvtamano" } );
        if (!this.avisible("conteoCelular", "normalMenor33"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "normalMenor33" } );
        if (!this.avisible("conteoCelular", "polimegatismo"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "polimegatismo" } );
        if (!this.avisible("conteoCelular", "paquimetria"))
            columnasNoVisibles.push(10);
        columnas.push({ "data": "paquimetria" } );
        if (!this.avisible("conteoCelular", "idpaquimetria"))
            columnasNoVisibles.push(11);
        columnas.push({ "data": "idpaquimetria" } );
        if (!this.avisible("conteoCelular", "homogeneidad"))
            columnasNoVisibles.push(12);
        columnas.push({ "data": "homogeneidad" } );
        if (!this.avisible("conteoCelular", "numeroCampo"))
            columnasNoVisibles.push(13);
        columnas.push({ "data": "numeroCampo" } );
        if (!this.avisible("conteoCelular", "gutta"))
            columnasNoVisibles.push(14);
        columnas.push({ "data": "gutta" } );
        if (!this.avisible("conteoCelular", "pliegue"))
            columnasNoVisibles.push(15);
        columnas.push({ "data": "pliegue" } );
        if (!this.avisible("conteoCelular", "estriaRotura"))
            columnasNoVisibles.push(16);
        columnas.push({ "data": "estriaRotura" } );
        if (!this.avisible("conteoCelular", "deposito"))
            columnasNoVisibles.push(17);
        columnas.push({ "data": "deposito" } );
        if (!this.avisible("conteoCelular", "discontinuidad"))
            columnasNoVisibles.push(18);
        columnas.push({ "data": "discontinuidad" } );
        if (!this.avisible("conteoCelular", "otra"))
            columnasNoVisibles.push(19);
        columnas.push({ "data": "otra" } );
        if (!this.avisible("conteoCelular", "otraDescripcion"))
            columnasNoVisibles.push(20);
        columnas.push({ "data": "otraDescripcion" } );
        if (!this.avisible("conteoCelular", "zonaCelular"))
            columnasNoVisibles.push(21);
        columnas.push({ "data": "zonaCelular" } );
        if (!this.avisible("conteoCelular", "valoracionCi"))
            columnasNoVisibles.push(22);
        columnas.push({ "data": "valoracionCi" } );
        if (!this.avisible("conteoCelular", "valoracionCd"))
            columnasNoVisibles.push(23);
        columnas.push({ "data": "valoracionCd" } );
        if (!this.avisible("conteoCelular", "observacionCd"))
            columnasNoVisibles.push(24);
        columnas.push({ "data": "observacionCd" } );
        if (!this.avisible("conteoCelular", "valoracionFinalEndotelioCi"))
            columnasNoVisibles.push(25);
        columnas.push({ "data": "valoracionFinalEndotelioCi" } );
        if (!this.avisible("conteoCelular", "valoracionFinalEndotelioCd"))
            columnasNoVisibles.push(26);
        columnas.push({ "data": "valoracionFinalEndotelioCd" } );
        if (!this.avisible("conteoCelular", "responsableMicroscopio"))
            columnasNoVisibles.push(27);
        columnas.push({ "data": "responsableMicroscopio" } );
        if (!this.avisible("conteoCelular", "fechaRegistro"))
            columnasNoVisibles.push(28);
        columnas.push({ "data": "fechaRegistro" } );
        if (!this.avisible("conteoCelular", "fechaActualizacion"))
            columnasNoVisibles.push(29);
        columnas.push({ "data": "fechaActualizacion" } );
        if (!this.avisible("conteoCelular", "fechaBaja"))
            columnasNoVisibles.push(30);
        columnas.push({ "data": "fechaBaja" } );
        if (!this.avisible("conteoCelular", "usuarioUltMov"))
            columnasNoVisibles.push(31);
        columnas.push({
                "data": function(oObj) {
		     if (oObj.usuarioUltMov)
                    	return "<span style=\"cursor: pointer\">"+ oObj.usuarioUltMov.username +"</span>";
		     return "";	
                }
        });
        if (!this.avisible("conteoCelular", "status"))
            columnasNoVisibles.push(32);
        columnas.push({ "data": "status" } );

        if (self.pacutalizar("conteoCelular"))
            columnas.push({
                "data": function(oObj) {
                    return "<span style=\"cursor: pointer\">Editar</span>";
                }
            });
        var novisibles: any;
        novisibles = [
            {
                "targets": columnasNoVisibles,
                "visible": false,
                "searchable": false
            }
        ];
        $.fn.dataTableExt.sErrMode = 'none';
        var tabla = $('#tabla_conteoCelular').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function(settings, json) {
                var xs = $("#tabla_conteoCelular_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function() {
                        self.conteoCelularSeleccionado = new ConteoCelular();
                        self.primero = false;
                    });
            },
            "ajax": {
                "url": self.urlProvider.serverURL+"conteoCelular/getConteoCelulares",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,

        });
        $('#tabla_conteoCelular tbody').on('click', 'td', function() {
            if (this.cellIndex == $(this).parent().find("td").length-1) {
                var data = $('#tabla_conteoCelular').DataTable().row(this).data();
                self.conteoCelularSeleccionado = new ConteoCelular();
                self.conteoCelularSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_conteoCelular').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    
    }
    ngOnInit() {
    }
    cambio_conteoCelular(conteoCelular) {
        $('#tabla_conteoCelular').DataTable().ajax.reload(null, false);
           this.primero =true;
    }
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    paux(tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    }
    preporteWord(tabla) { return this.paux(tabla, 64); }
    preporteExcel(tabla) { return this.paux(tabla, 32); }
    preportePdf(tabla) { return this.paux(tabla, 16); }
    pbuscar(tabla) { return this.paux(tabla, 8); }
    pacutalizar(tabla) { return this.paux(tabla, 4); }
    peliminar(tabla) { return this.paux(tabla, 2); }
    pagregar(tabla) { return this.paux(tabla, 1); }
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    aetiqueta(tabla, atributo) {
        for (let elemento of this.permisosAtributos) {
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    }
    avalidacion(tabla, atributo) {
        var salida = ".*";
        for (let elemento of this.permisosAtributos) {
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                if (elemento.validacion)
                    return elemento.validacion;
                else return salida;
            }
        }
        return salida;
    }
    amensaje(tabla, atributo) {
        for (let elemento of this.permisosAtributos) {
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    }
    aeditable(tabla, atributo) {
        for (let elemento of this.permisosAtributos) {
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    }
    arequerido(tabla, atributo) {
        for (let elemento of this.permisosAtributos) {
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    }
    avisible(tabla, atributo) {
        for (let elemento of this.permisosAtributos) {
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    }
    aenable(tabla, atributo) {
        for (let elemento of this.permisosAtributos) {
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    }
    // **********************************************************************************
    // **********************************************************************************

}
