//Create entity list 
var entityList = new EmActosPersonasList(); 
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new EmActosPersonasEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new EmActosPersonasListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new EmActosPersonasNewView({collection: entityList, el: '#pgNew'}); 
}); 
