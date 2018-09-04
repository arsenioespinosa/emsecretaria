//Create entity list 
var entityList = new EmActosPersonasList(); 
var userList = new UsuariosList();
userList.initialize();
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new EmActosPersonasEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new EmActosPersonasListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
  listView.SetUserList(userList);
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new EmActosPersonasNewView({collection: entityList, el: '#pgNew'}); 
}); 
