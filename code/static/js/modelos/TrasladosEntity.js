/** 
 * Clase que contiene los datos de traslados 
 */ 
var TrasladosEntity = Backbone.Model.extend({ 
  urlRoot: 'http://localhost:8080/emsec/traslados', 
  idAttribute:'idTraslado', 
  initialize: function () { 
    if (!this.has('idTraslado')) this.set('idTraslado', 0); 
    if (!this.has('lastModificationUser')) this.set('lastModificationUser', ''); 
    if (!this.has('lastModificationDate')) this.set('lastModificationDate', ''); 
    if (!this.has('creationUser')) this.set('creationUser', ''); 
    if (!this.has('creationDate')) this.set('creationDate', ''); 
    if (!this.has('idEm')) this.set('idEm', 0); 
    if (!this.has('idActo')) this.set('idActo', 0); 
    if (!this.has('idPersona')) this.set('idPersona', 0); 
    if (!this.has('fecha')) this.set('fecha', ''); 
    if (!this.has('chofer')) this.set('chofer', 0); 
    if (!this.has('azafata')) this.set('azafata', 0); 
    if (!this.has('recogida')) this.set('recogida', ''); 
    if (!this.has('destino')) this.set('destino', ''); 
    if (!this.has('acompanantes')) this.set('acompanantes', ''); 
    if (!this.has('observaciones')) this.set('observaciones', ''); 
  }, 
  defaults: { 
    idTraslado: 0, 
    lastModificationUser: '', 
    lastModificationDate: '', 
    creationUser: '', 
    creationDate: '', 
    idEm: 0, 
    idActo: 0, 
    idPersona: 0, 
    fecha: '', 
    chofer: 0, 
    azafata: 0, 
    recogida: '', 
    destino: '', 
    acompanantes: '', 
    observaciones: '', 
  } 
}); 
