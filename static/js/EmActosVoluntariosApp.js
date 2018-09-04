//Create entity list 
var entityList = new EmActosVoluntariosList(); 
var userList = new UsuariosList();
userList.initialize();
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new EmActosVoluntariosEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new EmActosVoluntariosListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
  listView.SetUserList(userList);
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new EmActosVoluntariosNewView({collection: entityList, el: '#pgNew'}); 
}); 
