/** 
 * Clase que contiene los datos de datos_em 
 */ 
var DatosEmEntity = Backbone.Model.extend({ 
  urlRoot: 'http://localhost:8080/emsec/datos_em', 
  idAttribute:'idEm', 
  initialize: function () { 
    if (!this.has('idEm')) this.set('idEm', 0); 
    if (!this.has('lastModificationUser')) this.set('lastModificationUser', ''); 
    if (!this.has('lastModificationDate')) this.set('lastModificationDate', ''); 
    if (!this.has('creationUser')) this.set('creationUser', ''); 
    if (!this.has('creationDate')) this.set('creationDate', ''); 
    if (!this.has('fechas')) this.set('fechas', ''); 
    if (!this.has('lema')) this.set('lema', ''); 
    if (!this.has('observaciones')) this.set('observaciones', ''); 
    if (!this.has('lugar')) this.set('lugar', ''); 
  }, 
  defaults: { 
    idEm: 0, 
    lastModificationUser: '', 
    lastModificationDate: '', 
    creationUser: '', 
    creationDate: '', 
    fechas: '', 
    lema: '', 
    observaciones: '', 
    lugar: '', 
  } 
}); 
