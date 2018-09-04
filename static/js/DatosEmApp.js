//Create entity list 
var entityList = new DatosEmList(); 
var userList = new UsuariosList();
userList.initialize();
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new DatosEmEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new DatosEmListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
  listView.SetUserList(userList);
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new DatosEmNewView({collection: entityList, el: '#pgNew'}); 
}); 
