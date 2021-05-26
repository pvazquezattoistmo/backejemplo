import { SolicitudEvaluacionCorneal } from "./solicitud-evaluacion-corneal";
import { URLProvider } from '../../shared/url-provider'

export class ConfigurarSolicitudEvaluacionCorneal {
    crudServiceBaseUrl;
    solicitudEvaluacionCornealConsulta;
    tipocampoAgEl;
    campoAgEl;
    rutaAgregar: string;
    rutaActualizar: string;
    rutaEliminar: string;
    rutaLista: string;
    urlprovider: URLProvider;
    titulo:string;
    permisosAtributos;
    permisosTabla;
	altoComponente:number ;
    //   rutaAgregar:string;
    constructor() {
        this.urlprovider= new URLProvider();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "solicitudEvaluacionCorneal";
        this.rutaLista = this.crudServiceBaseUrl + "/getSolicitudEvaluacionCorneales";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarSolicitudEvaluacionCorneal";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarSolicitudEvaluacionCorneal";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarSolicitudEvaluacionCorneal";
        this.titulo="Catálogo SolicitudEvaluacionCorneal";
        this.permisosAtributos= null;
        this.permisosTabla= null;
        this.solicitudEvaluacionCornealConsulta = null;
        this.campoAgEl=null;
        this.tipocampoAgEl= null;
		this.altoComponente=500;
    }
    lectura() {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    }
    lecturaP(evt,dat) {
        if (!dat) return null;
		if (typeof dat === 'object')
        return{
            url: this.rutaLista,
            contentType: "application/json",
            data: { models: dat.toDto() },
            type: "POST",
            complete:evt
        };
		return{
            url: this.rutaLista,
            contentType: "application/json",
            data: { models: dat },
            type: "POST",
            complete:evt
        };
    }
    eliminar() {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    }
    eliminarP(evt,dat) {
        if (!dat) return null;
        return{
            url: this.rutaEliminar,
            contentType: "application/json",
            data: { models: dat },
            type: "POST",
            complete:evt
        };
    }
    agregar() {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    }
    agregarP(evt,dat) {
        if (!dat) return null;
        return{
            url: this.rutaAgregar,
            contentType: "application/json",
            data: { models: dat },
            type: "POST",
            complete:evt
        };
    }
}
