/** 
 * Define una colección de em_actos_personas 
 */ 
var EmActosPersonasList = Backbone.Collection.extend({ 
  url: 'http://localhost:8080/emsec/em_actos_personas', 
  model: EmActosPersonasEntity, 
  initialize: function () { 
    this.on('add', function (model, col, opt) { 
      console.log('EmActosPersonasList:add ' + model.id); 
      model.save(); 
    }); 
    this.on('remove', function (model, col, opt) { 
      console.log('EmActosPersonasList:remove ' + model.id); 
      model.destroy({ silent: true }); 
    }); 
    this.on('change', function (model, opt) { 
      console.log('EmActosPersonasList:change ' + model.id); 
      if (model.changedAttributes().id) return; 
      model.save(); 
    }); 
    this.fetch({ reset: true }); 
  } 
}); 
