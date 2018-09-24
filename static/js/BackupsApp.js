//Create entity list 
var entityList = new BackupList(); 
var userList = new UsuariosList();
userList.initialize();

$(document).on('pageinit', '#pgHome', function(){ 
	var editView = new BackupsListView({collection: entityList, el: '#pgEdit'}); 
    var listView = new BackupsListView({collection: entityList, el: '#pgHome'}); 
    listView.SetEditView(editView);
    listView.SetUserList(userList);
}); 

