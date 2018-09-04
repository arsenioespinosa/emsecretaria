/** 
 * Clase que contiene los datos de timing_actos 
 */ 
var TimingActosEntity = Backbone.Model.extend({ 
  urlRoot: 'http://localhost:8080/emsec/timingactos', 
  idAttribute:'idTiming', 
  initialize: function () { 
    if (!this.has('idTiming')) this.set('idTiming', 0); 
    if (!this.has('lastModificationUser')) this.set('lastModificationUser', ''); 
    if (!this.has('lastModificationDate')) this.set('lastModificationDate', ''); 
    if (!this.has('creationUser')) this.set('creationUser', ''); 
    if (!this.has('creationDate')) this.set('creationDate', ''); 
    if (!this.has('idActo')) this.set('idActo', 0); 
    if (!this.has('evento')) this.set('evento', ''); 
    if (!this.has('desde')) this.set('desde', ''); 
    if (!this.has('hasta')) this.set('hasta', ''); 
  }, 
  defaults: { 
    idTiming: 0, 
    lastModificationUser: '', 
    lastModificationDate: '', 
    creationUser: '', 
    creationDate: '', 
    idActo: 0, 
    evento: '', 
    desde: '',
    hasta: ''
  } 
}); 
