/** 
 * Define una colección de em_actos_voluntarios 
 */ 
var EmActosVoluntariosList = Backbone.Collection.extend({ 
  url: '/emsec/em_actos_voluntarios', 
  model: EmActosVoluntariosEntity, 
  initialize: function () { 
    this.on('add', function (model, col, opt) { 
      console.log('EmActosVoluntariosList:add ' + model.id); 
      model.save(); 
    }); 
    this.on('remove', function (model, col, opt) { 
      console.log('EmActosVoluntariosList:remove ' + model.id); 
      model.destroy({ silent: true }); 
    }); 
    this.on('change', function (model, opt) { 
      console.log('EmActosVoluntariosList:change ' + model.id); 
      if (model.changedAttributes().id) return; 
      model.save(); 
    }); 
    this.fetch({ reset: true }); 
  } 
}); 
