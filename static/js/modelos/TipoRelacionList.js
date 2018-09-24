/** 
 * Define una colección de tipo_relacion 
 */ 
var TipoRelacionList = Backbone.Collection.extend({ 
  url: '/emsec/tipo_relacion', 
  model: TipoRelacionEntity, 
  initialize: function () { 
    this.on('add', function (model, col, opt) { 
      console.log('TipoRelacionList:add ' + model.id); 
      model.save(); 
    }); 
    this.on('remove', function (model, col, opt) { 
      console.log('TipoRelacionList:remove ' + model.id); 
      model.destroy({ silent: true }); 
    }); 
    this.on('change', function (model, opt) { 
      console.log('TipoRelacionList:change ' + model.id); 
      if (model.changedAttributes().id) return; 
      model.save(); 
    }); 
    this.fetch({ reset: true }); 
  } 
}); 
