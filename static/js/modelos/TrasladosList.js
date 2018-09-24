/** 
 * Define una colección de traslados 
 */ 
var TrasladosList = Backbone.Collection.extend({ 
  url: '/emsec/traslados', 
  model: TrasladosEntity, 
  initialize: function () { 
    this.on('add', function (model, col, opt) { 
      console.log('TrasladosList:add ' + model.id); 
      model.save(); 
    }); 
    this.on('remove', function (model, col, opt) { 
      console.log('TrasladosList:remove ' + model.id); 
      model.destroy({ silent: true }); 
    }); 
    this.on('change', function (model, opt) { 
      console.log('TrasladosList:change ' + model.id); 
      if (model.changedAttributes().id) return; 
      model.save(); 
    }); 
    this.fetch({ reset: true }); 
  } 
}); 
