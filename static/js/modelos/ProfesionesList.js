/** 
 * Define una colección de profesiones 
 */ 
var ProfesionesList = Backbone.Collection.extend({ 
  url: '/emsec/profesiones', 
  model: ProfesionesEntity, 
  initialize: function () { 
    this.on('add', function (model, col, opt) { 
      console.log('ProfesionesList:add ' + model.id); 
      model.save(); 
    }); 
    this.on('remove', function (model, col, opt) { 
      console.log('ProfesionesList:remove ' + model.id); 
      model.destroy({ silent: true }); 
    }); 
    this.on('change', function (model, opt) { 
      console.log('ProfesionesList:change ' + model.id); 
      if (model.changedAttributes().id) return; 
      model.save(); 
    }); 
    this.fetch({ reset: true }); 
  } 
}); 
