/** 
 * Clase que contiene los datos de tipo_relacion 
 */ 
var TipoRelacionEntity = Backbone.Model.extend({ 
  urlRoot: '/emsec/tipo_relacion', 
  idAttribute:'idRelacion', 
  initialize: function () { 
    if (!this.has('idRelacion')) this.set('idRelacion', 0); 
    if (!this.has('lastModificationUser')) this.set('lastModificationUser', ''); 
    if (!this.has('lastModificationDate')) this.set('lastModificationDate', ''); 
    if (!this.has('creationUser')) this.set('creationUser', ''); 
    if (!this.has('creationDate')) this.set('creationDate', ''); 
    if (!this.has('descripcion')) this.set('descripcion', ''); 
    if (!this.has('observaciones')) this.set('observaciones', ''); 
    if (!this.has('esVoluntario')) this.set('esVoluntario', 0); 
  }, 
  defaults: { 
    idRelacion: 0, 
    lastModificationUser: '', 
    lastModificationDate: '', 
    creationUser: '', 
    creationDate: '', 
    descripcion: '', 
    observaciones: '', 
    esVoluntario: 0, 
  } 
}); 
