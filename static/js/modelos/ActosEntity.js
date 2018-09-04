/** 
 * Clase que contiene los datos de actos 
 */ 
var ActosEntity = Backbone.Model.extend({ 
  urlRoot: 'http://localhost:8080/emsec/actos', 
  idAttribute:'idActo', 
  initialize: function () { 
    if (!this.has('idActo')) this.set('idActo', 0); 
    if (!this.has('lastModificationUser')) this.set('lastModificationUser', ''); 
    if (!this.has('lastModificationDate')) this.set('lastModificationDate', ''); 
    if (!this.has('creationUser')) this.set('creationUser', ''); 
    if (!this.has('creationDate')) this.set('creationDate', ''); 
    if (!this.has('idEm')) this.set('idEm', 0); 
    if (!this.has('descripcion')) this.set('descripcion', ''); 
    if (!this.has('dia')) this.set('dia', ''); 
    if (!this.has('asistencia')) this.set('asistencia', 0); 
    if (!this.has('avisos')) this.set('avisos', ''); 
    if (!this.has('turnoPreg')) this.set('turnoPreg', 0); 
    if (!this.has('turnoPregModo')) this.set('turnoPregModo', ''); 
    if (!this.has('microMesa')) this.set('microMesa', 0); 
    if (!this.has('microPie')) this.set('microPie', 0); 
    if (!this.has('microInalambrico')) this.set('microInalambrico', 0); 
    if (!this.has('matProyectar')) this.set('matProyectar', 0); 
    if (!this.has('descProyeccion')) this.set('descProyeccion', ''); 
    if (!this.has('tradActo')) this.set('tradActo', 0); 
    if (!this.has('idiomaActo')) this.set('idiomaActo', ''); 
    if (!this.has('modoActo')) this.set('modoActo', ''); 
    if (!this.has('tradPonente')) this.set('tradPonente', 0); 
    if (!this.has('idiomaPonente')) this.set('idiomaPonente', ''); 
    if (!this.has('modoPonente')) this.set('modoPonente', ''); 
    if (!this.has('comentarios')) this.set('comentarios', ''); 
    if (!this.has('reservAsientos')) this.set('reservAsientos', 0); 
    if (!this.has('detReservAsientos')) this.set('detReservAsientos', ''); 
    if (!this.has('incMediosTec')) this.set('incMediosTec', ''); 
    if (!this.has('incSala')) this.set('incSala', ''); 
    if (!this.has('puntComienzo')) this.set('puntComienzo', ''); 
    if (!this.has('puntFin')) this.set('puntFin', ''); 
    if (!this.has('respSala')) this.set('respSala', ''); 
    if (!this.has('valActo')) this.set('valActo', ''); 
    if (!this.has('comentFinal')) this.set('comentFinal', ''); 
    if (!this.has('sala')) this.set('sala', 0); 
    if (!this.has('distMesa')) this.set('distMesa', ''); 
    if (!this.has('patrocinador')) this.set('patrocinador', 0); 
    if (!this.has('obsPatrocinador')) this.set('obsPatrocinador', ''); 
    if (!this.has('azafata')) this.set('azafata', 0); 
    if (!this.has('otrasNecesidades')) this.set('otrasNecesidades', ''); 
    if (!this.has('aforo')) this.set('aforo', 0); 
    if (!this.has('quedaronFuera')) this.set('quedaronFuera', 0); 
    if (!this.has('otrasValoraciones')) this.set('otrasValoraciones', ''); 
    if (!this.has('traductorActo')) this.set('traductorActo', 0); 
    if (!this.has('traductorPonente')) this.set('traductorPonente', 0); 
    if (!this.has('responsableActo')) this.set('responsableActo', 0); 
  }, 
  defaults: { 
    idActo: 0, 
    lastModificationUser: '', 
    lastModificationDate: '', 
    creationUser: '', 
    creationDate: '', 
    idEm: 0, 
    descripcion: '', 
    dia: '', 
    asistencia: 0, 
    avisos: '', 
    turnoPreg: 0, 
    turnoPregModo: '', 
    microMesa: 0, 
    microPie: 0, 
    microInalambrico: 0, 
    matProyectar: 0, 
    descProyeccion: '', 
    tradActo: 0, 
    idiomaActo: '', 
    modoActo: '', 
    tradPonente: 0, 
    idiomaPonente: '', 
    modoPonente: '', 
    comentarios: '', 
    reservAsientos: 0, 
    detReservAsientos: '', 
    incMediosTec: '', 
    incSala: '', 
    puntComienzo: '', 
    puntFin: '', 
    respSala: '', 
    valActo: '', 
    comentFinal: '', 
    sala: 0, 
    distMesa: '', 
    patrocinador: 0, 
    obsPatrocinador: '', 
    azafata: 0, 
    otrasNecesidades: '', 
    aforo: 0, 
    quedaronFuera: 0, 
    otrasValoraciones: '', 
    traductorActo: 0, 
    traductorPonente: 0, 
    responsableActo: 0, 
  } 
}); 
