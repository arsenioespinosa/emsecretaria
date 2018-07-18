//Create entity list 
var entityList = new PlaningActosList(); 
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new PlaningActosEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new PlaningActosListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new PlaningActosNewView({collection: entityList, el: '#pgNew'}); 
}); 
