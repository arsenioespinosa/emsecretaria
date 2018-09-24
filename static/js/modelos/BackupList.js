/** 
 * Define una colección de backups 
 */ 
var BackupList = Backbone.Collection.extend({ 
  url: '/emsec/backups', 
  model: BackupEntity, 
  initialize: function () { 
    this.on('add', function (model, col, opt) { 
      console.log('BackupsList:add ' + model.id); 
      model.save(); 
    }); 
    this.on('remove', function (model, col, opt) { 
      console.log('BackupsList:remove ' + model.id); 
      model.destroy({ silent: true }); 
    }); 
    this.on('change', function (model, opt) { 
      console.log('BackupsList:change ' + model.id); 
      if (model.changedAttributes().id) return; 
      model.save(); 
    }); 
    this.fetch({ reset: true }); 
  } 
}); 
