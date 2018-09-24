/** 
 * Define una colección de timing_actos 
 */ 
var TimingActosList = Backbone.Collection.extend({ 
  url: '/emsec/timingactos', 
  model: TimingActosEntity, 
  initialize: function () { 
    this.on('add', function (model, col, opt) { 
      console.log('TimingActosList:add ' + model.id); 
      model.save(); 
    }); 
    this.on('remove', function (model, col, opt) { 
      console.log('TimingActosList:remove ' + model.id); 
      model.destroy({ silent: true }); 
    }); 
    this.on('change', function (model, opt) { 
      console.log('TimingActosList:change ' + model.id); 
      if (model.changedAttributes().id) return; 
      model.save(); 
    }); 
    this.fetch({ reset: true }); 
  } 
}); 
