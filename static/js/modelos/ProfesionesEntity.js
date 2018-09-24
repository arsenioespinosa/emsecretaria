/** 
 * Clase que contiene los datos de profesiones 
 */ 
var ProfesionesEntity = Backbone.Model.extend({ 
  urlRoot: '/emsec/profesiones', 
  idAttribute:'idProfesion', 
  initialize: function () { 
    if (!this.has('idProfesion')) this.set('idProfesion', 0); 
    if (!this.has('lastModificationUser')) this.set('lastModificationUser', ''); 
    if (!this.has('lastModificationDate')) this.set('lastModificationDate', ''); 
    if (!this.has('creationUser')) this.set('creationUser', ''); 
    if (!this.has('creationDate')) this.set('creationDate', ''); 
    if (!this.has('descripcion')) this.set('descripcion', ''); 
  }, 
  defaults: { 
    idProfesion: 0, 
    lastModificationUser: '', 
    lastModificationDate: '', 
    creationUser: '', 
    creationDate: '', 
    descripcion: '', 
  } 
}); 
