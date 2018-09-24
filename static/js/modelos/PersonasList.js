/** 
 * Define una colección de personas 
 */ 
var PersonasList = Backbone.Collection.extend({ 
  url: '/emsec/personas', 
  model: PersonasEntity, 
  initialize: function () { 
    this.on('add', function (model, col, opt) { 
      console.log('PersonasList:add ' + model.id); 
      model.save(); 
    }); 
    this.on('remove', function (model, col, opt) { 
      console.log('PersonasList:remove ' + model.id); 
      model.destroy({ silent: true }); 
    }); 
    this.on('change', function (model, opt) { 
      console.log('PersonasList:change ' + model.id); 
      if (model.changedAttributes().id) return; 
      model.save(); 
    }); 
    this.fetch({ reset: true }); 
  } 
}); 
