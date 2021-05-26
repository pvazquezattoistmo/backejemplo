import { EvaluacionSolicitudService } from './../shared/evaluacion-solicitud.service';
import { Component, OnInit } from '@angular/core';
import { EvaluacionSolicitud } from '../shared/evaluacion-solicitud';
import { GlobalesService } from '../../shared/globales.service';
import { URLProvider } from '../../shared/url-provider';
import { PermisoAtributoService } from '../../permiso-atributos/shared/permiso-atributo.service';
import { PermisoTablaService } from '../../permiso-tablas/shared/permiso-tabla.service';
// import { EvaluacionSolicitudService } from '../../evaluacion-solicitudes/shared/evaluacion-solicitud.service';
import { Router } from '@angular/router';

declare var $: any;
declare var DataTable: any;
declare var bootbox: any;

@Component({
    selector: 'app-evaluacion-solicitud-table',
    templateUrl: './evaluacion-solicitud-table.component.html',
    styleUrls: ['./evaluacion-solicitud-table.component.css'],
    providers:[GlobalesService,
               PermisoAtributoService,
               PermisoTablaService,
               EvaluacionSolicitudService
               ]
})
export class EvaluacionSolicitudTableComponent implements OnInit {
    public primero: boolean = true;
    public evaluacionSolicitudSeleccionado: EvaluacionSolicitud;
    public usuariologueado;
    public permisosAtributos = [];
    public permisosTabla = { "tabla": "evaluacionSolicitud", "permiso": 0, "etiqueta": "" };
    public ptabla: boolean = false;
    public pattr: boolean = false;
    public datosBusqueda: any = {
      idEvaluacion: '',
      folioSolicitudEvaluacion: '',
      nombre: '',
      apellido1: '',
      noExpediente: ''
    };
    public validos: any = {
      idEvaluacion: true,
      folioSolicitudEvaluacion: true,
      nombre: true,
      apellido1: true,
      noExpediente: true
    };
    public permisosBusquedas: any = [
      {
        etiqueta: 'Folio de la Solicitud de Evaluaci?n',
        validacion: '^[0-9]*$',
        permiso: 3,
        tabla: 'EvaluacionSolicitud',
        atributo: 'folioSolicitudEvaluacion'
      },
      {
        etiqueta: 'nombre',
        permiso: 3,
        tabla: 'EvaluacionSolicitud',
        atributo: 'nombre',
        validacion: '[A-Za-z]',
        mensaje: "Solo se aceptan caracteres"
      },
      {
        etiqueta: 'Primer Apellido',
        validacion: '[A-Za-z]',
        permiso: 3,
        tabla: 'EvaluacionSolicitud',
        atributo: 'apellido1',
        mensaje: "Solo se aceptan caracteres"
      },
      {
        etiqueta: 'N?mero de expediente',
        validacion: null,
        permiso: 3,
        tabla: 'EvaluacionSolicitud',
        atributo: 'noExpediente'
      },
      {
        etiqueta: 'Id Evuación',
        validacion: null,
        permiso: 3,
        tabla: 'EvaluacionSolicitud',
        atributo: 'idEvaluacion'
      }
    ];
    public idSeleccionada= null;
    constructor(public globalesService: GlobalesService,
        public permisoAtributoService: PermisoAtributoService,
        public permisoTablaService: PermisoTablaService,
        public urlProvider: URLProvider,
        public router :Router,
        public evaluacionSolicitud_Service: EvaluacionSolicitudService
    ) {
        this.evaluacionSolicitudSeleccionado = new EvaluacionSolicitud();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
    this.getColumnas(this);
    }
    getColumnas(obj) {
      if ($('#tabla_evaluacionSolicitud').length == 0) {
        setTimeout(() => {
          obj.getColumnas(obj);
        }, 500);
      }
      var dato: any = {};
      var self = obj;
      var columnas = [];
      var columnasNoVisibles = [];
      // columnasNoVisibles.push({ data: 'idEvaluacion' });
      columnasNoVisibles.push({ data: 'idEvaluacion' });
      columnas.push({ data: 'folioSolicitudEvaluacion' });
      columnas.push({ data: 'nombre' });
      columnas.push({ data: 'apellido1' });
      columnas.push({ data: 'noExpediente' });
      columnas.push({
        data: function(oObj) {
          // tslint:disable-next-line:max-line-length
          return '<div style=\'  text-align: center;\' ><span style="cursor: pointer"> <img src="assets/imagenes/svg/binocular.svg" alt="Detalle"  style="width: 30px;" /> </span></div>';
        }
      });
      columnas.push({
        data: function(oObj) {
          return '<div style=\'  text-align: center;\' ><span class="glyphicon glyphicon-edit"  style="cursor: pointer"></span></div>';
        }
      });
      columnas.push({
        data: function(oObj) {
          return '<div style=\'  text-align: center;\' ><span class="glyphicon glyphicon-trash"  style="cursor: pointer"></span> </div>';
        }
      });

      var novisibles: any;
      novisibles = [
        {
          targets: columnasNoVisibles,
          visible: false,
          searchable: false
        }
      ];
      $.fn.dataTableExt.sErrMode = 'none';
      var tabla = $('#tabla_evaluacionSolicitud').DataTable({
        columnDefs: novisibles,
        language: {
          url: 'assets/Spanish.json'
        },
        columns: columnas
      });
      this.llena({});
      $('#tabla_evaluacionSolicitud tbody').on(
        'click',
        'td',
        function(evt) {
          if (
            evt.currentTarget.cellIndex ==
            $(evt.currentTarget)
              .parent()
              .find('td').length -
              3
          ) {
            var data = $('#tabla_evaluacionSolicitud')
              .DataTable()
              .row(evt.currentTarget)
              .data();
            this.detalle(data);
          }
          if (
            evt.currentTarget.cellIndex ==
            $(evt.currentTarget)
              .parent()
              .find('td').length -
              2
          ) {
            var data = $('#tabla_evaluacionSolicitud')
              .DataTable()
              .row(evt.currentTarget)
              .data();
            this.editar(data);
          }
          if (
            evt.currentTarget.cellIndex ==
            $(evt.currentTarget)
              .parent()
              .find('td').length -
              1
          ) {
            var data = $('#tabla_evaluacionSolicitud')
              .DataTable()
              .row(evt.currentTarge)
              .data();
            this.borrar(data);
          }
        }.bind(this)
      );
    }
  detalle(dato) {
    (dato);
    this.idSeleccionada = undefined;
    this.idSeleccionada = dato.idEvaluacion;
      $('#myModal').modal('show');
    }
    ngOnInit() {
    }
    cambio_evaluacionSolicitud(evaluacionSolicitud) {
        $('#tabla_evaluacionSolicitud').DataTable().ajax.reload(null, false);
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
    editar(dato) {
      (dato);
      bootbox.dialog({
        title: 'Mensaje de confirmación de edición',
        message:
          '¿Qué desea editar?',
        size: 'large',
        onEscape: true,
        backdrop: true,
        buttons: {
          se: {
            label: 'Estudios de Laboratorio',
            className: 'btn-primary',
            callback: function () {
              this.router.navigateByUrl('/estudio-laboratorio-crud/'+dato.idEvaluacion);
             }.bind(this)
          },
          re: {
            label: 'Revisión de Lámpara de Hendidura',
            className: 'btn-info',
            callback: function () {
              this.router.navigateByUrl('/lampara-hendidura-crud/'+dato.idEvaluacion);

            }.bind(this)
          },
          te: {
            label: 'Conteo Celular',
            className: 'btn-info',
            callback: function () {
              this.router.navigateByUrl('/conteo-celular-crud/'+dato.idEvaluacion);

            }.bind(this)
          },
        }
      });
    }
    borrar(dato) {
      (dato);
      // bootbox.confirm("¿Está seguro de eliminar?", function (result) {
        bootbox.confirm({
          message: "¿Está seguro de eliminar?",
          buttons: {
            confirm: {
              label: "Sí",
              className: "btn-primary"
            },
            cancel: {
              label: "No",
              className: 'btn-danger'
            }
          },
          callback: function(result) {
        if (result) {
          let envio = {
            id: dato.idEvaluacion,
            baja: true
          };
          this.evaluacionSolicitud_Service.bajaEvaluacionSolicitudByID(
            envio,
            this.evtBorrar,
            this
          );
        }
      }.bind(this)});
    }
    evtBorrar(bandera, obj) {
      if (bandera) {
        bootbox.alert('Datos eliminados con éxito');
        obj.llena({});
      }
    }
    llena(dato) {
      var datoenviar = Object.assign({}, dato);
      let tabla = $('#tabla_evaluacionSolicitud').DataTable();
       tabla.clear().draw();
      $.ajax({
        url:
          this.urlProvider.serverURL + 'evaluacionSolicitud/getTramitesIngresados',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data) {
          data.forEach(function(enty) {
            var obj: any = {};
            obj.idEvaluacion = enty.idEvaluacion;
            obj.folioSolicitudEvaluacion = enty.folioSolicitudEvaluacion;
            obj.nombre = enty.nombre;
            obj.apellido1 = enty.apellido1;
            obj.noExpediente = enty.noExpediente;
            tabla.row.add(obj).draw(false);
          });
        },
        data: JSON.stringify(datoenviar)
      });
    }

}
