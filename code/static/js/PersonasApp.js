//Create entity list 
var profesionesList = new ProfesionesList();
var entityList = new PersonasList(); 
profesionesList.initialize();
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new PersonasEditView({collection: entityList, el: '#pgEdit'}); 
  editView.SetProfesionesList(profesionesList);
  var listView = new PersonasListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new PersonasNewView({collection: entityList, el: '#pgNew'}); 
  newView.SetProfesionesList(profesionesList);
}); 
