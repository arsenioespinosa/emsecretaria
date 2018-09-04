//Create entity list 
var datosEmList = new DatosEmList();
datosEmList.initialize();
var personasList = new PersonasList();
personasList.initialize();
var salasList = new SalasList();
salasList.initialize();
var userList = new UsuariosList();
userList.initialize();
var entityList = new ActosList(); 

 
$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new ActosEditView({collection: entityList, el: '#pgEdit'}); 
  editView.SetPersonasList(personasList);
  editView.SetSalasList(salasList);

  var listView = new ActosListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
  listView.SetEmList(datosEmList);
  listView.SetUserList(userList);
}); 
$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new ActosNewView({collection: entityList, el: '#pgNew'}); 
  newView.SetPersonasList(personasList);
  newView.SetSalasList(salasList);
}); 
//$(document).on('pageinit', '#pgTables', function(){ 
//  var newView = new ActosTablasView({collection: entityList, el: '#pgTables'}); 
//}); 

