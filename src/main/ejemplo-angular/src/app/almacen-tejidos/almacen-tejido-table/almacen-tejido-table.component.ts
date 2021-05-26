import { AlmacenEvaluacionService } from './../../almacen-evaluaciones/shared/almacen-evaluacion.service';
import { AlmacenTejido } from './../shared/almacen-tejido';
import { Component, OnInit } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { URLProvider } from '../../shared/url-provider';
import { PermisoAtributoService } from '../../permiso-atributos/shared/permiso-atributo.service';
import { PermisoTablaService } from '../../permiso-tablas/shared/permiso-tabla.service';
import { AlmacenTejidoService } from '../shared/almacen-tejido.service';
import { Router } from '@angular/router';

declare var $: any;
declare var DataTable: any;
declare var bootbox: any;
@Component({
    selector: 'app-almacen-tejido-table',
    templateUrl: './almacen-tejido-table.component.html',
    styleUrls: ['./almacen-tejido-table.component.css'],
    providers:[GlobalesService,
               PermisoAtributoService,
               PermisoTablaService,
               AlmacenTejidoService,
               AlmacenEvaluacionService
               ]
})
export class AlmacenTejidoTableComponent implements OnInit {
    public primero: boolean = true;
    public almacenTejidoSeleccionado: AlmacenTejido;
    public usuariologueado;
    public permisosAtributos = [];
    public permisosTabla = { "tabla": "almacenTejido", "permiso": 0, "etiqueta": "" };
    public ptabla: boolean = false;
    public pattr: boolean = false;

    public listaAlmacen: Array<any> = [];
    estatuses: Array<{ id: number; descripcion: string }> = [
      {
        id: 4,
        descripcion: "Morado Ingreso en Almacén"
      },
      {
        id: 5,
        descripcion: "Gris Registro Concluido"
      }
    ];

    idBTC: string;
    numeroExpediente: string;
    folioSolicitud: string;
    estatus: number;
    fechaInicio: Date;
    fechaFin: Date;

    idSeleccionado: number;

    constructor(public globalesService: GlobalesService,
        public permisoAtributoService: PermisoAtributoService,
        public permisoTablaService: PermisoTablaService,
        public urlProvider: URLProvider,
        private almacenTejidoService: AlmacenTejidoService,
        private router: Router,
        private almacenEvaluacionService: AlmacenEvaluacionService
    ) {
        this.almacenTejidoSeleccionado = new AlmacenTejido();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'almacenTejido'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    evtTablas(lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'almacenTejido'";
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
        if (!this.avisible("almacenTejido", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" } );
        if (!this.avisible("almacenTejido", "idoficioDonacion"))
            columnasNoVisibles.push(1);
        columnas.push({
                "data": function(oObj) {
		     if (oObj.idoficioDonacion)
                    	return "<span style=\"cursor: pointer\">"+ oObj.idoficioDonacion.botonCorneal +"</span>";
		     return "";
                }
        });
        if (!this.avisible("almacenTejido", "ubicacion"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "ubicacion" } );
        if (!this.avisible("almacenTejido", "temperaturaRefrigeracion"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "temperaturaRefrigeracion" } );
        if (!this.avisible("almacenTejido", "horaRefrigeracion"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "horaRefrigeracion" } );
        if (!this.avisible("almacenTejido", "comentario"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "comentario" } );
        if (!this.avisible("almacenTejido", "fechaRegistro"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "fechaRegistro" } );
        if (!this.avisible("almacenTejido", "fechaActualizacion"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "fechaActualizacion" } );
        if (!this.avisible("almacenTejido", "fechaBaja"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "fechaBaja" } );
        if (!this.avisible("almacenTejido", "estatusProceso"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "estatusProceso" } );
        if (!this.avisible("almacenTejido", "usuarioUltMov"))
            columnasNoVisibles.push(10);
        columnas.push({
                "data": function(oObj) {
		     if (oObj.usuarioUltMov)
                    	return "<span style=\"cursor: pointer\">"+ oObj.usuarioUltMov.username +"</span>";
		     return "";
                }
        });
        if (!this.avisible("almacenTejido", "status"))
            columnasNoVisibles.push(11);
        columnas.push({ "data": "status" } );

        if (self.pacutalizar("almacenTejido"))
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
        var tabla = $('#tabla_almacenTejido').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function(settings, json) {
                var xs = $("#tabla_almacenTejido_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function() {
                        self.almacenTejidoSeleccionado = new AlmacenTejido();
                        self.primero = false;
                    });
            },
            "ajax": {
                "url": self.urlProvider.serverURL+"almacenTejido/getAlmacenTejidos",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,

        });
        $('#tabla_almacenTejido tbody').on('click', 'td', function() {
            if (this.cellIndex == $(this).parent().find("td").length-1) {
                var data = $('#tabla_almacenTejido').DataTable().row(this).data();
                self.almacenTejidoSeleccionado = new AlmacenTejido();
                self.almacenTejidoSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_almacenTejido').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });

    }
    ngOnInit() {
      this.almacenTejidoService.getAlmacenTejidosConsulta( {}, this.evnAlmacenConsulta,this);
    }
    cambio_almacenTejido(almacenTejido) {
        $('#tabla_almacenTejido').DataTable().ajax.reload(null, false);
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

    evnAlmacenConsulta(lista, obj){
      obj.listaAlmacen = lista;
    }

    public editHandler(dataItem) {
      (dataItem);
      if (dataItem.tipo === 1) {
        this.router.navigateByUrl( `/almacen-evaluacion-crud/${dataItem.id}`);
      } else {
        this.router.navigateByUrl( `/ingreso-solictud-tejido/${dataItem.id}`);
      }
  }

  public removeHandler(dataItem) {
    bootbox.confirm({
      message: "¿Deseas eliminar el registro?",
      buttons: {
        confirm: {
          label: "Sí",
          className: "btn-primary"
        },
        cancel: {
          label: "No",
          className: ""
        }
      },
      callback: function(result) {
        if (result) {
          if (dataItem.tipo === 1) {
            this.almacenEvaluacionService.eliminarAlmacenEvaluacion({id: dataItem.id}, this.evnEliminar , this);
          } else {
            this.almacenTejidoService.eliminarAlmacenTejido({id: dataItem.id}, this.evnEliminar , this);
          }
        }
      }.bind(this)
    });
  }

  public detalleHandler(dataItem) {
    (dataItem);
    this.idSeleccionado = dataItem.id;
    if (dataItem.tipo === 1) {
      $('#modalDetalleEvaluacion').modal('show');
    } else {
      $('#modalDetalleSolicitudTejido').modal('show');
    }

  }

  valueChangeEstatus(data){
    this.estatus = data ? data.id : null;
  }

  buscar() {
    this.almacenTejidoService.getAlmacenTejidosConsulta(
      { idBTC: this.idBTC, numeroExpediente: this.numeroExpediente,
        folioSolicitud: this.folioSolicitud, estatus: this.estatus,
        fechaInicio: this.fechaInicio ? this.fechaInicio.getTime() : null, fechaFin: this.fechaFin ? this.fechaFin.getTime() : null
      },
      this.evnAlmacenConsulta, this);
  }

  evnEliminar(a, obj){
    bootbox.alert("Registro eliminado.");
    obj.buscar();
  }
}
