var EmActosVoluntariosListView = Backbone.View.extend({ 
   initialize: function(){ 
     var self = this; 
         this.collection.on('remove', function(){ self.render();}); 
         this.collection.on('sync', function(){self.render();}); 
         this.render(); 
     }, 
     render: function(){ 
         //limpiar 
         //this.$el.html('<ul data-role="listview" data-filter="true"></ul>'); 
         //pintar rutas 
         //for(var i = 0; i < this.collection.size(); i++){ 
         //    var m= this.collection.at(i); 
         //    var str = '<li><a id="'+m.idEm+'" href="#">'+m.get('titulo')+'</a></li>'; 
         //    this.$el.find('[data-role="listview"]').append(str); 
         //} 
         //this.$el.find('[data-role="listview"]').listview(); 
         var title = window.localStorage.getItem('selectedEmId') +" > "+ window.localStorage.getItem('selectedActoDesc');
         this.$el.find('#lblIdEm').text(title);
         this.$el.find('[data-role="listview"]').empty(); 
         for(var i = 0; i < this.collection.size(); i++){ 
           var m= this.collection.at(i); 
           var per = this.GetPersonaById(m.get('idPersona'));
           var tip = this.GetTipoRelacionById(m.get('idTipoRelacion'));
           var str = '<li><a class="lvitem ui-btn" id="'+m.get('idEm')+'" href="#">undefined</a></li>'; 
           if(per != undefined && tip != undefined){
            str = '<li><a class="lvitem ui-btn" id="'+m.get('idEm')+'" href="#">'+per.get('nombre')+' '+per.get('apellidos')+' - '+tip.get('descripcion')+'</a></li>'; 
           }
           
           this.$el.find('[data-role="listview"]').append(str); 
            
         } 
         this.$el.find('[data-role="listview"]').listview(); 
          this.renderUserInfo();
     }, 
     SetPersonasList: function(personasList){
    this.personasList = personasList;
    //this.personasList.initialize();
   },
   GetPersonaById: function(searchId){
     var searchIndex = 0;
     if(this.personasList != undefined){
        while(searchIndex < this.personasList.size()){
          if(this.personasList.at(searchIndex).get('idPersona')==searchId)
          {
            return this.personasList.at(searchIndex);
          }
          searchIndex++;
        }
     }
     return undefined;
   },
   SetTipoRelacionesList: function(tipoRelacionesList){
    this.tipoRelacionesList = tipoRelacionesList;
    this.render();
   },
   GetTipoRelacionById: function(searchId){
     var searchIndex = 0;
     if(this.tipoRelacionesList != undefined){
       while(searchIndex < this.tipoRelacionesList.size()){
         if(this.tipoRelacionesList.at(searchIndex).get('idRelacion')==searchId)
         {
           return this.tipoRelacionesList.at(searchIndex);
         }
         searchIndex++;
       }
     }
     return undefined;
   },
     events:{ 
         'click .lvitem':'ShowEditView' ,
         'click #seleccionaPopup':'ShowPopup',
         'click #btnDoLogin':'GoToUserLogin'
     }, 
     SetUserList: function(userList){
        this.userList = userList;
        this.renderUserInfo();
     },
     renderUserInfo: function(){
      var text = "Log In";
        if(this.userList != undefined && this.userList.length > 0){
            text=this.userList.at(this.userList.length-1).get('name');
        }
        this.$el.find('#fae').text(text);
     },
     GoToUserLogin: function(){
      window.location="./Usuarios.html";
     },
     SetEditView: function(editView){ 
         this.editView = editView; 
     }, 
     ShowEditView: function(e){ 
         ////recuperar id 
         var id = $(e.target).attr('id'); 
         console.log('ShowEditView ('+id+')'); 
         this.editView.model = this.collection.get(id); 
         $(':mobile-pagecontainer').pagecontainer('change', '#pgEdit'); 
         this.editView.initialize(); 
         this.editView.render(); 
     } 
 }); 
 