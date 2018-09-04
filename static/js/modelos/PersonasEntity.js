/** 
 * Clase que contiene los datos de personas 
 */ 
var PersonasEntity = Backbone.Model.extend({ 
  urlRoot: 'http://localhost:8080/emsec/personas', 
  idAttribute:'idPersona', 
  initialize: function () { 
    if (!this.has('idPersona')) this.set('idPersona', 0); 
    if (!this.has('etiqueta')) this.set('etiqueta', 0); 
    if (!this.has('alta')) this.set('alta', ''); 
    if (!this.has('baja')) this.set('baja', ''); 
    if (!this.has('tratamiento')) this.set('tratamiento', ''); 
    if (!this.has('lastModificationUser')) this.set('lastModificationUser', ''); 
    if (!this.has('lastModificationDate')) this.set('lastModificationDate', ''); 
    if (!this.has('creationUser')) this.set('creationUser', ''); 
    if (!this.has('creationDate')) this.set('creationDate', ''); 
    if (!this.has('nombre')) this.set('nombre', ''); 
    if (!this.has('apellidos')) this.set('apellidos', ''); 
    if (!this.has('empresa')) this.set('empresa', ''); 
    if (!this.has('cargo')) this.set('cargo', ''); 
    if (!this.has('direccion')) this.set('direccion', ''); 
    if (!this.has('direccion2')) this.set('direccion2', ''); 
    if (!this.has('cp')) this.set('cp', ''); 
    if (!this.has('localidad')) this.set('localidad', ''); 
    if (!this.has('provincia')) this.set('provincia', ''); 
    if (!this.has('pais')) this.set('pais', ''); 
    if (!this.has('tfnoDomicilio')) this.set('tfnoDomicilio', ''); 
    if (!this.has('tfnoOficina')) this.set('tfnoOficina', ''); 
    if (!this.has('tfnoMovil')) this.set('tfnoMovil', ''); 
    if (!this.has('email')) this.set('email', ''); 
    if (!this.has('email2')) this.set('email2', ''); 
    if (!this.has('observaciones')) this.set('observaciones', ''); 
    if (!this.has('profesion')) this.set('profesion', 0); 
    if (!this.has('personaRef')) this.set('personaRef', ''); 
    if (!this.has('biografia')) this.set('biografia', ''); 
    if (!this.has('idioma')) this.set('idioma', ''); 
  }, 
  defaults: { 
    idPersona: 0, 
    etiqueta: 0, 
    alta: '', 
    baja: '', 
    tratamiento: '', 
    lastModificationUser: '', 
    lastModificationDate: '', 
    creationUser: '', 
    creationDate: '', 
    nombre: '', 
    apellidos: '', 
    empresa: '', 
    cargo: '', 
    direccion: '', 
    direccion2: '', 
    cp: '', 
    localidad: '', 
    provincia: '', 
    pais: '', 
    tfnoDomicilio: '', 
    tfnoOficina: '', 
    tfnoMovil: '', 
    email: '', 
    email2: '', 
    observaciones: '', 
    profesion: 0, 
    personaRef: '', 
    biografia: '', 
    idioma: '', 
  } 
}); 
