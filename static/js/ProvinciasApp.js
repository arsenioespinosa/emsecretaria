//Create entity list 
var entityList = new ProvinciasList(); 
var userList = new UsuariosList();
userList.initialize();
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new ProvinciasEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new ProvinciasListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
  listView.SetUserList(userList);
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new ProvinciasNewView({collection: entityList, el: '#pgNew'}); 
}); 
