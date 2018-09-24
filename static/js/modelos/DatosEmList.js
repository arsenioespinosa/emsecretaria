/** 
 * Define una colección de datos_em 
 */ 
var DatosEmList = Backbone.Collection.extend({ 
  url: '/emsec/datos_em', 
  model: DatosEmEntity, 
  initialize: function () { 
    this.on('add', function (model, col, opt) { 
      console.log('DatosEmList:add ' + model.id); 
      model.save(); 
    }); 
    this.on('remove', function (model, col, opt) { 
      console.log('DatosEmList:remove ' + model.id); 
      model.destroy({ silent: true }); 
    }); 
    this.on('change', function (model, opt) { 
      console.log('DatosEmList:change ' + model.id); 
      if (model.changedAttributes().id) return; 
      model.save(); 
    }); 
    this.fetch({ reset: true }); 
  } 
}); 
