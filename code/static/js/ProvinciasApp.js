//Create entity list 
var entityList = new ProvinciasList(); 
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new ProvinciasEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new ProvinciasListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new ProvinciasNewView({collection: entityList, el: '#pgNew'}); 
}); 
