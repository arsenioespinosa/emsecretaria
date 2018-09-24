/** 
 * Define una colección de actos 
 */ 
var ActosList = Backbone.Collection.extend({ 
  url: '/emsec/actos', 
  model: ActosEntity, 
  initialize: function () { 
    this.on('add', function (model, col, opt) { 
      console.log('ActosList:add ' + model.id); 
      model.save(); 
    }); 
    this.on('remove', function (model, col, opt) { 
      console.log('ActosList:remove ' + model.id); 
      model.destroy({ silent: true }); 
    }); 
    this.on('change', function (model, opt) { 
      console.log('ActosList:change ' + model.id); 
      if (model.changedAttributes().id) return; 
      model.save(); 
    }); 
    this.fetch({ reset: true }); 
  } 
}); 
