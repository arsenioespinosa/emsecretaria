//Create entity list 
var entityList = new ProfesionesList(); 
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new ProfesionesEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new ProfesionesListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new ProfesionesNewView({collection: entityList, el: '#pgNew'}); 
}); 
