//Create entity list 
var entityList = new EmActosVoluntariosList(); 
var userList = new UsuariosList();
userList.initialize();
var personasList = new PersonasList();
personasList.initialize();
var tipoRelacionesList = new TipoRelacionList();
tipoRelacionesList.initialize();
 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new EmActosVoluntariosEditView({collection: entityList, el: '#pgEdit'}); 
  editView.SetPersonasList(personasList);
  editView.SetTipoRelacionesList(tipoRelacionesList);
  var listView = new EmActosVoluntariosListView({collection: entityList, el: '#pgHome'}); 
  listView.SetPersonasList(personasList);
  listView.SetTipoRelacionesList(tipoRelacionesList);
  listView.SetEditView(editView); 
  listView.SetUserList(userList);

}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new EmActosVoluntariosNewView({collection: entityList, el: '#pgNew'}); 
  newView.SetPersonasList(personasList);
  newView.SetTipoRelacionesList(tipoRelacionesList);
}); 
