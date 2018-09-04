//Create entity list 
var entityList = new TimingActosList(); 
var userList = new UsuariosList();
userList.initialize();

$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new TimingActosEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new TimingActosListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
  listView.SetUserList(userList);
}); 

$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new TimingActosNewView({collection: entityList, el: '#pgNew'}); 
}); 
