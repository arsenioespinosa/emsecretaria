//Create entity list 
var entityList = new AgendaList(); 
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new AgendaEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new AgendaListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new AgendaNewView({collection: entityList, el: '#pgNew'}); 
}); 
