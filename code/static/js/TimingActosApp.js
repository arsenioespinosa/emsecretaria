//Create entity list 
var entityList = new TimingActosList(); 

$(document).on('pageinit', '#pgHome', function(){ 
  var editView = new TimingActosEditView({collection: entityList, el: '#pgEdit'}); 
  var listView = new TimingActosListView({collection: entityList, el: '#pgHome'}); 
  listView.SetEditView(editView); 
}); 

$(document).on('pageinit', '#pgNew', function(){ 
  var newView = new TimingActosNewView({collection: entityList, el: '#pgNew'}); 
}); 
