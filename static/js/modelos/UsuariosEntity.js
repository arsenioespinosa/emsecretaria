/** 
 * Clase que contiene los datos de usuarios
 */ 
var UsuariosEntity = Backbone.Model.extend({ 
  urlRoot: '/emsec/appusers', 
  idAttribute: 'email',

  initialize: function () { 
    if (!this.has('username')) this.set('username', ''); 
    if (!this.has('email')) this.set('email', ''); 
    if (!this.has('name')) this.set('name', ''); 
    if (!this.has('password')) this.set('password', ''); 
    if (!this.has('passwordConf')) this.set('passwordConf', ''); 
    if (!this.has('sessionToken')) this.set('sessionToken', '');
    if (!this.has('sessionDeadline')) this.set('sessionDeadline', dateToDbFormat(new Date()));
  }, 
  defaults: { 
    username: '',
    email: '',
    name: '',
    password: '',
    passwordConf: '',
    sessionToken: '',
    sessionDeadline: '',
  },
  getDeadline: function(){
    var d = new Date();
    return this.dateToDbFormat(new Date(d.getTime() + 1800000));
  },
  dateToDbFormat: function(d){
    var intYear, intMonth, intDay, intHour, intMin, intSec;
    var spMonth, spDay, spHour, spMin, spSec;

    intYear = d.getFullYear();
    intMonth = d.getMonth()+1;
    intDay = d.getDate();
    intHour = d.getHours();
    intMin = d.getMinutes();
    intSec = d.getSeconds();
    
    spMonth = (intMonth < 10) ? '0':'';
    spDay = (intDay < 10) ? '0':'';
    spHour = (intHour < 10) ? '0':'';
    spMin = (intMin < 10) ? '0':'';
    spSec = (intSec < 10) ? '0':'';

    return ''+intYear+'-'+spMonth+intMonth+'-'+spDay+intDay+' '+spHour+intHour+':'+spMin+intMin+':'+spSec+intSec;
  },
  stringToDate: function(d){
    
    if(d.length == 19){
      var intYear, intMonth, intDay, intHour, intMin, intSec;
      intYear = parseInt(d.substring(0,4));
      intMonth = parseInt(d.substring(5,7))-1;
      intDay = parseInt(d.substring(8,10));
      intHour = parseInt(d.substring(11,13));
      intMin = parseInt(d.substring(14,16));
      intSec = parseInt(d.substring(17,19));
      return new Date(intYear, intMonth, intDay, intHour, intMin, intSec);
    }else{
      return new Date(1999,0,0,0,0,0);
    }
  },
}); 
