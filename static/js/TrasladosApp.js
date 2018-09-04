//Create entity list 
var entityList = new TrasladosList(); 
var userList = new UsuariosList();
userList.initialize();
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new TrasladosEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new TrasladosListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
  listView.SetUserList(userList);
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new TrasladosNewView({collection: entityList, el: '#pgNew'}); 
}); 
