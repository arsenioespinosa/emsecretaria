/** 
 * Clase que contiene los datos de backups 
 */ 
var BackupEntity = Backbone.Model.extend({ 
  urlRoot: '/emsec/backups', 
  idAttribute:'idBackup', 
  initialize: function () { 
    if (!this.has('idBackup')) this.set('idBackup', 0); 
    if (!this.has('descripcion')) this.set('descripcion', ''); 
    if (!this.has('ruta')) this.set('ruta', ''); 
  }, 
  defaults: { 
    idBackup: 0, 
    descripcion: '', 
    ruta:'',
  } 
}); 
