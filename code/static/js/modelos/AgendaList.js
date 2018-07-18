/** 
 * Define una colección de agenda 
 */ 
var AgendaList = Backbone.Collection.extend({ 
  url: 'http://localhost:8080/emsec/agenda', 
  model: AgendaEntity, 
  initialize: function () { 
    this.on('add', function (model, col, opt) { 
      console.log('AgendaList:add ' + model.id); 
      model.save(); 
    }); 
    this.on('remove', function (model, col, opt) { 
      console.log('AgendaList:remove ' + model.id); 
      model.destroy({ silent: true }); 
    }); 
    this.on('change', function (model, opt) { 
      console.log('AgendaList:change ' + model.id); 
      if (model.changedAttributes().id) return; 
      model.save(); 
    }); 
    this.fetch({ reset: true }); 
  } 
}); 
