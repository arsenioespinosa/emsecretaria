//Create entity list 
var entityList = new DatosEmList(); 
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new DatosEmEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new DatosEmListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new DatosEmNewView({collection: entityList, el: '#pgNew'}); 
}); 
