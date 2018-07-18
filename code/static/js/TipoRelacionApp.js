//Create entity list 
var entityList = new TipoRelacionList(); 
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new TipoRelacionEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new TipoRelacionListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new TipoRelacionNewView({collection: entityList, el: '#pgNew'}); 
}); 
