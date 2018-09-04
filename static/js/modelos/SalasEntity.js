/** 
 * Clase que contiene los datos de salas 
 */ 
var SalasEntity = Backbone.Model.extend({ 
  urlRoot: 'http://localhost:8080/emsec/salas', 
  idAttribute:'idSala', 
  initialize: function () { 
    if (!this.has('idSala')) this.set('idSala', 0); 
    if (!this.has('lastModificationUser')) this.set('lastModificationUser', ''); 
    if (!this.has('lastModificationDate')) this.set('lastModificationDate', ''); 
    if (!this.has('creationUser')) this.set('creationUser', ''); 
    if (!this.has('creationDate')) this.set('creationDate', ''); 
    if (!this.has('descripcion')) this.set('descripcion', ''); 
  }, 
  defaults: { 
    idSala: 0, 
    lastModificationUser: '', 
    lastModificationDate: '', 
    creationUser: '', 
    creationDate: '', 
    descripcion: '', 
  } 
}); 
