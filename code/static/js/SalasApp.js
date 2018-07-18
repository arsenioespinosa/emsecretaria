//Create entity list 
var entityList = new SalasList(); 
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new SalasEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new SalasListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new SalasNewView({collection: entityList, el: '#pgNew'}); 
}); 
