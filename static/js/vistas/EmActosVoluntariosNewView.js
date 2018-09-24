var EmActosVoluntariosNewView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
       this.model = new EmActosVoluntariosEntity(); 
       //this.model.set('idEm', this.collection.get(this.collection.length -1).get('idEm')+1); 
       this.render(); 
   }, 
   render: function(){ 
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
     var title = window.localStorage.getItem('selectedEmId') +" > "+ window.localStorage.getItem('selectedActoDesc');
         this.$el.find('#lblIdEmNew').text(title);
    this.$('#newinputidEm').val(this.model.get('idEm')).textinput('refresh'); 
    this.$('#newinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#newinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#newinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#newinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#newinputidActo').val(this.model.get('idActo')).textinput('refresh'); 
    this.$('#newinputidPersona').val(this.model.get('idPersona')).textinput('refresh'); 
    this.$('#newinputidTipoRelacion').val(this.model.get('idTipoRelacion')).textinput('refresh'); 
    this.$('#newinputobservaciones').val(this.model.get('observaciones')).textinput('refresh'); 
    this.renderPersonasList();
    this.renderTipoRelacionesList();
   }, 
   renderPersonasList: function(){
    this.$el.find('#newlvPersonas').empty();
    if(this.personasList != undefined){
      for (var i = 0; i < this.personasList.length; i++){
          var m = this.personasList.at(i);
          var str = '<li><a class="newlvPersonasItem" id="'+m.get('idPersona')+'" href="#">'+m.get('apellidos')+', '+m.get('nombre')+'</a></li>';
          this.$el.find('#newlvPersonas').append(str);
      }
      
    }
    this.$el.find('#newlvPersonas').listview();
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
    this.$el.find('#newlvTipoRelaciones').empty();
    if(this.tipoRelacionesList != undefined){
      for (var i = 0; i < this.tipoRelacionesList.length; i++){
          var m = this.tipoRelacionesList.at(i);
          var str = '<li><a class="newlvTipoRelacionesItem" id="'+m.get('idRelacion')+'" href="#">'+m.get('descripcion')+'</a></li>';
          this.$el.find('#newlvTipoRelaciones').append(str);
      }
      
    }
    this.$el.find('#newlvTipoRelaciones').listview();
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
     'change #newinputidEm': function(){ 
       this.model.set('idEm', this.$('#newinputidEm').val()); 
     }, 
     'change #newinputlastModificationUser': function(){ 
       this.model.set('lastModificationUser', this.$('#newinputlastModificationUser').val()); 
     }, 
     'change #newinputlastModificationDate': function(){ 
       this.model.set('lastModificationDate', this.$('#newinputlastModificationDate').val()); 
     }, 
     'change #newinputcreationUser': function(){ 
       this.model.set('creationUser', this.$('#newinputcreationUser').val()); 
     }, 
     'change #newinputcreationDate': function(){ 
       this.model.set('creationDate', this.$('#newinputcreationDate').val()); 
     }, 
     'change #newinputidActo': function(){ 
       this.model.set('idActo', this.$('#newinputidActo').val()); 
     }, 
     'change #newinputidPersona': function(){ 
       this.model.set('idPersona', this.$('#newinputidPersona').val()); 
     }, 
     'change #newinputidTipoRelacion': function(){ 
       this.model.set('idTipoRelacion', this.$('#newinputidTipoRelacion').val()); 
     }, 
     'change #newinputobservaciones': function(){ 
       this.model.set('observaciones', this.$('#newinputobservaciones').val()); 
     }, 
     'click #btGuardar': function(){ 
       this.model.set('idEm', undefined); 
       this.collection.add(this.model); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.model = new EmActosVoluntariosEntity(); 
       //this.model.set('idEm', this.collection.get(this.collection.length -1).get('idEm')+1); 
       this.render(); 
     }, 
     'click #btCancelar': function(){ 
       this.model = new EmActosVoluntariosEntity(); 
       //this.model.set('idEm', this.collection.get(this.collection.length -1).get('idEm')+1); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.render(); 
     }, 
     'click #newinputpersonabtn': function(){
       this.renderPersonasList();
       $("#newpopUpPersonasList").popup("open");
     },
     'click .newlvPersonasItem': function(e){
       $("#newpopUpPersonasList").popup("close");
       var pId = $(e.target).attr('id');
       var pEnt = this.GetPersonaById(pId);
       
       if(pEnt != null){
         var pDes = pEnt.get('nombre') + ' ' + pEnt.get('apellidos');
          this.$('#newinputpersona').val(pId).textinput('refresh'); 
          this.model.set('idPersona', pId); 
          this.$('#newinputpersonadesc').val(pDes).textinput('refresh'); 
       }
     },
     'click #newinputtiporelacionbtn': function(){
       this.renderTipoRelacionesList();
       $("#newpopUpTipoRelacionesList").popup("open");
     },
     'click .newlvTipoRelacionesItem': function(e){
       $("#newpopUpTipoRelacionesList").popup("close");
       var pId = $(e.target).attr('id');
       var pEnt = this.GetTipoRelacionById(pId);
       
       if(pEnt != null){
         var pDes = pEnt.get('descripcion');
          this.$('#newinputtiporelacion').val(pId).textinput('refresh'); 
          this.model.set('idTipoRelacion', pId); 
          this.$('#newinputtiporelaciondesc').val(pDes).textinput('refresh'); 
       }
     },
     'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 