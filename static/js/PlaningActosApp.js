//Create entity list 
var entityList = new PlaningActosList(); 
var userList = new UsuariosList();
userList.initialize();
var salasList = new SalasList();
salasList.initialize();
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new PlaningActosEditView({collection: entityList, el: '#pgEdit'}); 
  editView.SetSalasList(salasList);
  var listView = new PlaningActosListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
  listView.SetUserList(userList);
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new PlaningActosNewView({collection: entityList, el: '#pgNew'}); 
  newView.SetSalasList(salasList);
}); 
