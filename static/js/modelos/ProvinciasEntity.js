/** 
 * Clase que contiene los datos de provincias 
 */ 
var ProvinciasEntity = Backbone.Model.extend({ 
  urlRoot: '/emsec/provincias', 
  idAttribute:'idProvincia', 
  initialize: function () { 
    if (!this.has('codigo')) this.set('codigo', ''); 
    if (!this.has('lastModificationUser')) this.set('lastModificationUser', ''); 
    if (!this.has('lastModificationDate')) this.set('lastModificationDate', ''); 
    if (!this.has('creationUser')) this.set('creationUser', ''); 
    if (!this.has('creationDate')) this.set('creationDate', ''); 
    if (!this.has('provincia')) this.set('provincia', ''); 
    if (!this.has('comunidad')) this.set('comunidad', ''); 
    if (!this.has('cod182')) this.set('cod182', ''); 
    if (!this.has('pro182')) this.set('pro182', ''); 
  }, 
  defaults: { 
    codigo: '', 
    lastModificationUser: '', 
    lastModificationDate: '', 
    creationUser: '', 
    creationDate: '', 
    provincia: '', 
    comunidad: '', 
    cod182: '', 
    pro182: '', 
  } 
}); 
