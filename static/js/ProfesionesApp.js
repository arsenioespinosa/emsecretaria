//Create entity list 
var entityList = new ProfesionesList(); 
var userList = new UsuariosList();
userList.initialize();
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new ProfesionesEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new ProfesionesListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
  listView.SetUserList(userList);
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new ProfesionesNewView({collection: entityList, el: '#pgNew'}); 
}); 
