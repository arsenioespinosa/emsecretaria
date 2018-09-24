/** 
 * Define una colección de usuarios 
 */ 
var UsuariosList = Backbone.Collection.extend({ 
  url: '/emsec/appusers', 
  model: UsuariosEntity, 
  initialize: function () { 
    this.on('add', function (model, col, opt) { 
      console.log('UsuariosList:add ' + model.id); 
      model.save(); 
    }); 
    this.on('remove', function (model, col, opt) { 
        console.log('UsuariosList:remove ' + model.id);
      model.destroy({ silent: true }); 
    }); 
    this.on('change', function (model, opt) { 
        console.log('UsuariosList:change ' + model.id);
        if (model.changedAttributes().id) return;
        model.save(); 
    }); 
    this.fetch({ reset: true }); 
  } 
}); 
