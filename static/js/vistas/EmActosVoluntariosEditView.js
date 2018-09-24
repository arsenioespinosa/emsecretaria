var EmActosVoluntariosEditView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
   }, 
   render: function(){ 
    var title = window.localStorage.getItem('selectedEmId') +" > "+ window.localStorage.getItem('selectedActoDesc');
         this.$el.find('#lblIdEmEdit').text(title);
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#editinputidEm').val(this.model.get('idEm')).textinput('refresh'); 
    this.$('#editinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#editinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#editinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#editinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#editinputidActo').val(this.model.get('idActo')).textinput('refresh'); 
    this.$('#editinputidPersona').val(this.model.get('idPersona')).textinput('refresh'); 
    this.$('#editinputidTipoRelacion').val(this.model.get('idTipoRelacion')).textinput('refresh'); 
    this.$('#editinputobservaciones').val(this.model.get('observaciones')).textinput('refresh'); 
    if(this.enableRefresh){ 
    } 
    var pEnt = this.GetPersonaById(this.model.get('idPersona'));
    if(pEnt != null){
      this.$('#editinputpersonadesc').val(pEnt.get('nombre')+' '+pEnt.get('apellidos')).textinput('refresh'); 
    }else{
      this.$('#editinputpersonadesc').val('').textinput('refresh'); 
    }
    var pEnt = this.GetTipoRelacionById(this.model.get('idTipoRelacion'));
    if(pEnt != null){
      this.$('#editinputtiporelaciondesc').val(pEnt.get('descripcion')).textinput('refresh'); 
    }else{
      this.$('#editinputtiporelaciondesc').val('').textinput('refresh'); 
    }
    renderPersonasList();
    renderTipoRelacionesList();

   },
   renderPersonasList: function(){
   this.$el.find('#editlvPersonas').empty();
   if(this.personasList != undefined){
     for (var i = 0; i < this.personasList.length; i++){
         var m = this.personasList.at(i);
         var str = '<li><a class="editlvPersonasItem" id="'+m.get('idPersona')+'" href="#">'+m.get('apellidos')+', '+m.get('nombre')+'</a></li>';
         this.$el.find('#editlvPersonas').append(str);
     }
     
   }
   this.$el.find('#editlvPersonas').listview();
  },
  SetPersonasList: function(personasList){
   this.personasList = personasList;
   //this.personasList.initialize();
   this.renderPersonasList();
  },
  GetPersonaById: function(searchId){
    var searchIndex = 0;
    while(searchIndex < this.personasList.length){
      if(this.personasList.at(searchIndex).get('idPersona')==searchId)
      {
        return this.personasList.at(searchIndex);
      }
      searchIndex++;
    }
    return null;
  },
  renderTipoRelacionesList: function(){
   this.$el.find('#editlvTipoRelaciones').empty();
   if(this.tipoRelacionesList != undefined){
     for (var i = 0; i < this.tipoRelacionesList.length; i++){
         var m = this.tipoRelacionesList.at(i);
         var str = '<li><a class="editlvTipoRelacionesItem" id="'+m.get('idRelacion')+'" href="#">'+m.get('descripcion')+'</a></li>';
         this.$el.find('#editlvTipoRelaciones').append(str);
     }
     
   }
   this.$el.find('#editlvTipoRelaciones').listview();
  },
  SetTipoRelacionesList: function(tipoRelacionesList){
   this.tipoRelacionesList = tipoRelacionesList;
   //this.personasList.initialize();
   this.renderTipoRelacionesList();
  },
  GetTipoRelacionById: function(searchId){
    var searchIndex = 0;
    while(searchIndex < this.tipoRelacionesList.length){
      if(this.tipoRelacionesList.at(searchIndex).get('idRelacion')==searchId)
      {
        return this.tipoRelacionesList.at(searchIndex);
      }
      searchIndex++;
    }
    return null;
  },
 
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     'change #editinputidEm': function(){ 
       this.model.set('idEm', this.$('#editinputidEm').val()); 
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
     'change #editinputidPersona': function(){ 
       this.model.set('idPersona', this.$('#editinputidPersona').val()); 
     }, 
     'change #editinputidTipoRelacion': function(){ 
       this.model.set('idTipoRelacion', this.$('#editinputidTipoRelacion').val()); 
     }, 
     'change #editinputobservaciones': function(){ 
       this.model.set('observaciones', this.$('#editinputobservaciones').val()); 
     }, 
     'click #btBorrar': function(){ 
       this.collection.remove(this.model); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
     }, 
     'click #editinputpersonabtn': function(){
      this.renderPersonasList();
      $("#editpopUpPersonasList").popup("open");
    },
    'click .editlvPersonasItem': function(e){
      $("#editpopUpPersonasList").popup("close");
      var pId = $(e.target).attr('id');
      var pEnt = this.GetPersonaById(pId);
      
      if(pEnt != null){
        var pDes = pEnt.get('nombre') + ' ' + pEnt.get('apellidos');
         this.$('#editinputpersona').val(pId).textinput('refresh'); 
         this.model.set('idPersona', pId); 
         this.$('#editinputpersonadesc').val(pDes).textinput('refresh'); 
      }
    },
    'click #editinputtiporelacionbtn': function(){
      this.renderTipoRelacionesList();
      $("#editpopUpTipoRelacionesList").popup("open");
    },
    'click .editlvTipoRelacionesItem': function(e){
      $("#editpopUpTipoRelacionesList").popup("close");
      var pId = $(e.target).attr('id');
      var pEnt = this.GetTipoRelacionById(pId);
      
      if(pEnt != null){
        var pDes = pEnt.get('descripcion');
         this.$('#editinputtiporelacion').val(pId).textinput('refresh'); 
         this.model.set('idTipoRelacion', pId); 
         this.$('#editinputtiporelaciondesc').val(pDes).textinput('refresh'); 
      }
    },
    'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 