/** 
 * Define una colección de provincias 
 */ 
var ProvinciasList = Backbone.Collection.extend({ 
  url: '/emsec/provincias', 
  model: ProvinciasEntity, 
  initialize: function () { 
    this.on('add', function (model, col, opt) { 
      console.log('ProvinciasList:add ' + model.id); 
      model.save(); 
    }); 
    this.on('remove', function (model, col, opt) { 
      console.log('ProvinciasList:remove ' + model.id); 
      model.destroy({ silent: true }); 
    }); 
    this.on('change', function (model, opt) { 
      console.log('ProvinciasList:change ' + model.id); 
      if (model.changedAttributes().id) return; 
      model.save(); 
    }); 
    this.fetch({ reset: true }); 
  } 
}); 
