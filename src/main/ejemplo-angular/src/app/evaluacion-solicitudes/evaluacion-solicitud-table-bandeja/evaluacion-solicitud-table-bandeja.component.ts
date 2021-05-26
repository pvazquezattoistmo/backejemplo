import { Component, OnInit } from '@angular/core';
import { EvaluacionSolicitud } from '../shared/evaluacion-solicitud';
import { GlobalesService } from '../../shared/globales.service';
import { URLProvider } from '../../shared/url-provider';
import { PermisoAtributoService } from '../../permiso-atributos/shared/permiso-atributo.service';
import { PermisoTablaService } from '../../permiso-tablas/shared/permiso-tabla.service';
import { timeout } from 'rxjs/operators';
import { Router } from '@angular/router';

declare var $: any;
declare var DataTable: any;

@Component({
  selector: 'app-evaluacion-solicitud-table-bandeja',
  templateUrl: './evaluacion-solicitud-table-bandeja.component.html',
  styleUrls: ['./evaluacion-solicitud-table-bandeja.component.css'],
  providers: [GlobalesService, PermisoAtributoService, PermisoTablaService]
})
export class EvaluacionSolicitudTableBandejaComponent implements OnInit {
  public primero: boolean = true;
  public usuariologueado: any;

  constructor(
    public globalesService: GlobalesService,
    public urlProvider: URLProvider,
    public router: Router  ) {
       this.usuariologueado = globalesService.dameUsuario();
      this.getColumnas(this);
  }

  getColumnas(obj) {

    if ($('#tabla_evaluacionSolicitudBandeja').length ==  0) {
         setTimeout(() => {
            obj.getColumnas(obj);
            return;
         }, 500);
    }
    if ($('#tabla_evaluacionSolicitudBandeja').length == 0) return;
    var self = obj;
    var columnas = [];
    var columnasNoVisibles = [];
    columnasNoVisibles.push(0);
    columnas.push({ data: 'idEvaluacion' });
    columnas.push({
      data: function(oObj) {
        if (oObj)
          if (oObj.estatusProceso == '1')
            return "<i data-toggle='tooltip' data-placement='top' title='Solicitud Nueva' class='icon-infocircle text-danger'  ></i>";
        if (oObj.estatusProceso == '2')
          return "<i data-toggle='tooltip' data-placement='top' title='Solicitud en Recepción' class='icon-infocircle text-warning' ></i>";
        if (oObj.estatusProceso == '3')
          return "<i data-toggle='tooltip' data-placement='top' title='Solicitud en Evaluación' class='icon-infocircle text-primary' ></i>";
        if (oObj.estatusProceso == '4')
          return "<i data-toggle='tooltip' data-placement='top' title='Solicitud en  Almacén' class='icon-infocircle text-success' ></i>";
      }
    });
    columnas.push({ data: 'folio' });
    columnas.push({ data: 'fechaIngreso' });
    columnas.push({ data: 'horaIngreso' });
    columnas.push({
      data: function(obj) {
        let salida = "<div style='text-align:center;width:100%'> <input type='checkbox' disabled /> </div>";
        if (obj.corneaIz == 1) salida = "<div style='text-align:center;width:100%'><input type='checkbox' disabled checked /> </div>";
        return salida;
      }
    });
    columnas.push({
      data: function(obj) {
        let salida = "<div style='text-align:center;width:100%'><input type='checkbox' disabled /></div>";
        if (obj.corneaDr == 1) salida = "<div style='text-align:center;width:100%'><input type='checkbox' disabled checked /></div>";
        return salida;
      }
    });
    columnas.push({
      data: function (oObj) {
        if (oObj)
        return "<span style=\"cursor: pointer\">Estudios Laboratorio</span>";
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
    var tabla = $('#tabla_evaluacionSolicitudBandeja').DataTable({
      columnDefs: novisibles,
      language: {
        url: 'assets/Spanish.json'
      },
      ajax: {
        url: self.urlProvider.serverURL + 'evaluacionSolicitud/getEvaluacionSolicitudesBandeja',
        type: 'POST',
        contentType: 'application/json',
        datatype: 'json',
        dataSrc: ''
      },
      columns: columnas
    });

    $('#tabla_evaluacionSolicitudBandeja tbody').on('click', 'td', function(evt) {
        if ( evt.currentTarget.cellIndex ==
          $(evt.currentTarget)
            .parent()
            .find('td').length -
            1
        ) {
          var data = $('#tabla_evaluacionSolicitudBandeja')
            .DataTable()
            .row(evt.currentTarget)
            .data();
          self.evaluacionSolicitudSeleccionado = new EvaluacionSolicitud();
          self.evaluacionSolicitudSeleccionado.from(data);
          self.primero = false;
          this.globalesService.registraIdEvaluacion(data.idEvaluacion);
          this.router.navigateByUrl('/estudio-laboratorio-crud/' + data.idEvaluacion);
        }
      }.bind(this)
    );
  }

  ngOnInit() {
  }


  cambio_evaluacionSolicitud(evaluacionSolicitud) {
    $('#tabla_evaluacionSolicitudBandeja')
      .DataTable()
      .ajax.reload(null, false);
    this.primero = true;
  }

}
