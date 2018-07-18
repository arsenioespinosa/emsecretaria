//Create entity list 
var entityList = new TrasladosList(); 
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new TrasladosEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new TrasladosListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new TrasladosNewView({collection: entityList, el: '#pgNew'}); 
}); 
