/** 
 * Clase que contiene los datos de planing_actos 
 */ 
var PlaningActosEntity = Backbone.Model.extend({ 
  urlRoot: 'http://localhost:8080/emsec/planing_actos', 
  idAttribute:'idPlaning', 
  initialize: function () { 
    if (!this.has('idPlaning')) this.set('idPlaning', 0); 
    if (!this.has('lastModificationUser')) this.set('lastModificationUser', ''); 
    if (!this.has('lastModificationDate')) this.set('lastModificationDate', ''); 
    if (!this.has('creationUser')) this.set('creationUser', ''); 
    if (!this.has('creationDate')) this.set('creationDate', ''); 
    if (!this.has('idActo')) this.set('idActo', 0); 
    if (!this.has('evento')) this.set('evento', ''); 
    if (!this.has('fecha')) this.set('fecha', ''); 
    if (!this.has('sala')) this.set('sala', 0); 
  }, 
  defaults: { 
    idPlaning: 0, 
    lastModificationUser: '', 
    lastModificationDate: '', 
    creationUser: '', 
    creationDate: '', 
    idActo: 0, 
    evento: '', 
    fecha: '', 
    sala: 0, 
  } 
}); 
