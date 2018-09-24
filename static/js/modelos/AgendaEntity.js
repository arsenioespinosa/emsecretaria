/** 
 * Clase que contiene los datos de agenda 
 */ 
var AgendaEntity = Backbone.Model.extend({ 
  urlRoot: '/emsec/agenda', 
  idAttribute:'idAgenda', 
  initialize: function () { 
    if (!this.has('idAgenda')) this.set('idAgenda', 0); 
    if (!this.has('lastModificationUser')) this.set('lastModificationUser', ''); 
    if (!this.has('lastModificationDate')) this.set('lastModificationDate', ''); 
    if (!this.has('creationUser')) this.set('creationUser', ''); 
    if (!this.has('creationDate')) this.set('creationDate', ''); 
    if (!this.has('idEm')) this.set('idEm', 0); 
    if (!this.has('idActo')) this.set('idActo', 0); 
    if (!this.has('idPersona')) this.set('idPersona', 0); 
    if (!this.has('descripcion')) this.set('descripcion', ''); 
    if (!this.has('fecha')) this.set('fecha', ''); 
  }, 
  defaults: { 
    idAgenda: 0, 
    lastModificationUser: '', 
    lastModificationDate: '', 
    creationUser: '', 
    creationDate: '', 
    idEm: 0, 
    idActo: 0, 
    idPersona: 0, 
    descripcion: '', 
    fecha: '', 
  } 
}); 
