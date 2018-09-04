//Create entity list 
var entityList = new TipoRelacionList(); 
var userList = new UsuariosList();
userList.initialize();
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new TipoRelacionEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new TipoRelacionListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
  listView.SetUserList(userList);
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new TipoRelacionNewView({collection: entityList, el: '#pgNew'}); 
}); 
