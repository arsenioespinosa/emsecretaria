var PlaningActosEditView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
   }, 
   render: function(){ 
    var title = window.localStorage.getItem('selectedEmId') +" > "+ window.localStorage.getItem('selectedActoDesc');
     this.$el.find('#lblIdEmEdit').text(title);
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#editinputidPlaning').val(this.model.get('idPlaning')).textinput('refresh'); 
    this.$('#editinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#editinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#editinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#editinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#editinputidActo').val(this.model.get('idActo')).textinput('refresh'); 
    this.$('#editinputevento').val(this.model.get('evento')).textinput('refresh'); 
    this.$('#editinputfecha').val(this.model.get('fecha')); 
    this.$('#editinputdesde').val(this.model.get('desde')).textinput('refresh'); 
    this.$('#editinputhasta').val(this.model.get('hasta')).textinput('refresh'); 
    this.$('#editinputsala').val(this.model.get('sala')).textinput('refresh'); 
    var pEnt = this.GetSalaById(this.model.get('sala'));
    if(pEnt != null){
      this.$('#editinputsaladesc').val(pEnt.get('descripcion')).textinput('refresh'); 
    }else{
      this.$('#editinputsaladesc').val('').textinput('refresh'); 
    }
    if(this.enableRefresh){ 
    } 
    renderSalasList();
   }, 
   renderSalasList: function(){
   this.$el.find('#editlvSalas').empty();
   if(this.salasList != undefined){
     for (var i = 0; i < this.salasList.length; i++){
         var m = this.salasList.at(i);
         var str = '<li><a class="editlvSalasItem" id="'+m.get('idSala')+'" href="#">'+m.get('descripcion')+'</a></li>';
         this.$el.find('#editlvSalas').append(str);
     }
     
   }
   this.$el.find('#editlvSalas').listview();
  },
  SetSalasList: function(salasList){
   this.salasList = salasList;
   //this.personasList.initialize();
   this.renderSalasList();
  },
  GetSalaById: function(searchId){
    var searchIndex = 0;
    while(searchIndex < this.salasList.length){
      if(this.salasList.at(searchIndex).get('idSala')==searchId)
      {
        return this.salasList.at(searchIndex);
      }
      searchIndex++;
    }
    return null;
  },
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     'change #editinputidPlaning': function(){ 
       this.model.set('idPlaning', this.$('#editinputidPlaning').val()); 
     }, 
     'change #editinputlastModificationUser': function(){ 
       this.model.set('lastModificationUser', this.$('#editinputlastModificationUser').val()); 
     }, 
     'change #editinputlastModificationDate': function(){ 
       this.model.set('lastModificationDate', this.$('#editinputlastModificationDate').val()); 
     }, 
     'change #editinputcreationUser': function(){ 
       this.model.set('creationUser', this.$('#editinputcreationUser').val()); 
     }, 
     'change #editinputcreationDate': function(){ 
       this.model.set('creationDate', this.$('#editinputcreationDate').val()); 
     }, 
     'change #editinputidActo': function(){ 
       this.model.set('idActo', this.$('#editinputidActo').val()); 
     }, 
     'change #editinputevento': function(){ 
       this.model.set('evento', this.$('#editinputevento').val()); 
     }, 
     'change #editinputfecha': function(){ 
       this.model.set('fecha', this.$('#editinputfecha').val()); 
     }, 
     'change #editinputdesde': function(){ 
       this.model.set('desde', this.$('#editinputdesde').val()); 
     }, 
     'change #editinputhasta': function(){ 
       this.model.set('hasta', this.$('#editinputhasta').val()); 
     }, 
     'change #editinputsala': function(){ 
       this.model.set('sala', this.$('#editinputsala').val()); 
     }, 
     'click #btBorrar': function(){ 
       this.collection.remove(this.model); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
     }, 
      'click #editinputsalabtn': function(){
      this.renderSalasList();
      $("#editpopUpSalasList").popup("open");
    },
    'click .editlvSalasItem': function(e){
      $("#editpopUpSalasList").popup("close");
      var pId = $(e.target).attr('id');
      var pEnt = this.GetSalaById(pId);
      
      if(pEnt != null){
        var pDes = pEnt.get('descripcion');
         this.$('#editinputsala').val(pId).textinput('refresh'); 
         this.model.set('sala', pId); 
         this.$('#editinputsaladesc').val(pDes).textinput('refresh'); 
      }
    },
     'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 