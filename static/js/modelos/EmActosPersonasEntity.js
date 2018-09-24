/** 
 * Clase que contiene los datos de em_actos_personas 
 */ 
var EmActosPersonasEntity = Backbone.Model.extend({ 
  urlRoot: '/emsec/em_actos_personas', 
  idAttribute:'idEm', 
  initialize: function () { 
    if (!this.has('idEm')) this.set('idEm', 0); 
    if (!this.has('lastModificationUser')) this.set('lastModificationUser', ''); 
    if (!this.has('lastModificationDate')) this.set('lastModificationDate', ''); 
    if (!this.has('creationUser')) this.set('creationUser', ''); 
    if (!this.has('creationDate')) this.set('creationDate', ''); 
    if (!this.has('idActo')) this.set('idActo', 0); 
    if (!this.has('idPersona')) this.set('idPersona', 0); 
    if (!this.has('idTipoRelacion')) this.set('idTipoRelacion', 0); 
  }, 
  defaults: { 
    idEm: 0, 
    lastModificationUser: '', 
    lastModificationDate: '', 
    creationUser: '', 
    creationDate: '', 
    idActo: 0, 
    idPersona: 0, 
    idTipoRelacion: 0, 
  } 
}); 
