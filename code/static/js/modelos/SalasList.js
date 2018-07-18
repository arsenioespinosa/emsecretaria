/** 
 * Define una colección de salas 
 */ 
var SalasList = Backbone.Collection.extend({ 
  url: 'http://localhost:8080/emsec/salas', 
  model: SalasEntity, 
  initialize: function () { 
    this.on('add', function (model, col, opt) { 
      console.log('SalasList:add ' + model.id); 
      model.save(); 
    }); 
    this.on('remove', function (model, col, opt) { 
      console.log('SalasList:remove ' + model.id); 
      model.destroy({ silent: true }); 
    }); 
    this.on('change', function (model, opt) { 
      console.log('SalasList:change ' + model.id); 
      if (model.changedAttributes().id) return; 
      model.save(); 
    }); 
    this.fetch({ reset: true }); 
  } 
}); 
