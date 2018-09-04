/** 
 * Define una colección de planing_actos 
 */ 
var PlaningActosList = Backbone.Collection.extend({ 
  url: 'http://localhost:8080/emsec/planing_actos', 
  model: PlaningActosEntity, 
  initialize: function () { 
    this.on('add', function (model, col, opt) { 
      console.log('PlaningActosList:add ' + model.id); 
      model.save(); 
    }); 
    this.on('remove', function (model, col, opt) { 
      console.log('PlaningActosList:remove ' + model.id); 
      model.destroy({ silent: true }); 
    }); 
    this.on('change', function (model, opt) { 
      console.log('PlaningActosList:change ' + model.id); 
      if (model.changedAttributes().id) return; 
      model.save(); 
    }); 
    this.fetch({ reset: true }); 
  } 
}); 
