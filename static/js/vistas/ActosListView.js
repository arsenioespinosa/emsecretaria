var ActosListView = Backbone.View.extend({ 
   initialize: function(){ 

       var self = this; 
       if(window.localStorage.getItem('selectedEmId') == null){
          this.selectedEmId=0;
       }else{
          this.selectedEmId = window.localStorage.getItem('selectedEmId');
       }
       this.UpdateEm();
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
         //    var str = '<li><a id="'+m.idActo+'" href="#">'+m.get('titulo')+'</a></li>'; 
         //    this.$el.find('[data-role="listview"]').append(str); 
         //} 
         //this.$el.find('[data-role="listview"]').listview(); 
         this.renderEmList();
         this.renderActosList();
         this.renderUserInfo();
         this.CheckActo();
     }, 
     renderActosList: function(){
        this.$el.find('#lvActos').empty(); 
        if(this.selectedEmId != "0"){
          for(var i = 0; i < this.collection.size(); i++){ 
            var m= this.collection.at(i); 
            if(m.get('idEm') == this.selectedEmId){
              var str = '<li><a class="lvitem ui-btn" id="'+m.get('idActo')+'" href="#">'+m.get('dia')+' '+m.get('inicio')+' '+m.get('descripcion')+'</a></li>'; 
              this.$el.find('#lvActos').append(str); 
            }
          } 
        }
        this.$el.find('#lvActos').listview(); 
     },
     renderEmList: function(){
        this.$el.find('#lvEm').empty();
        if(this.emList != undefined){
          for (var i = 0; i < this.emList.length; i++){
              var m = this.emList.at(i);
              var str = '<li><a class="lvEmItem" id="'+m.get('idEm')+'" href="#">'+m.get('idEm')+' - '+m.get('lema')+'</a></li>';
              this.$el.find('#lvEm').append(str);
          }
          
        }
        this.$el.find('#lvEm').listview();
     },
     
     events:{ 
         'click .lvitem':'ShowEditView',
         'click .lvEmItem':'ChangeCurrentEm',
         'click #seleccionaPopup':'ShowPopup',
         'click #btnDoLogin':'GoToUserLogin'
     }, 
     SetEditView: function(editView){ 
         this.editView = editView; 
     }, 
     SetEmList: function(emList){
        this.emList = emList;
        this.emList.initialize();
        this.$el.find('#select-choice-1').selectmenu();
        this.renderEmList();
        this.UpdateEm();
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
     CheckActo: function(){
            var savedIdActo = window.localStorage.getItem('selectedActoId');
            
            if(savedIdActo != undefined){
                var acto = undefined;
              for(var i = 0; i < this.collection.size(); i++){
                  if(this.collection.at(i).get('idActo') == savedIdActo){
                    acto = this.collection.at(i);
                    i = this.collection.size();
                  }
              }
              if(acto != undefined){
                this.editView.model = acto;
                $(':mobile-pagecontainer').pagecontainer('change', '#pgEdit'); 
                this.editView.initialize(); 
                this.editView.render(); 
              }
            }
     },
     ShowEditView: function(e){ 
         ////recuperar id 
         var id = $(e.target).attr('id'); 
         var text = $(e.target).text();
         console.log('ShowEditView ('+id+')'); 
         //Get model
         var editmodel = this.collection.get(id);
         window.localStorage.setItem('selectedActoId', id);
         window.localStorage.setItem('selectedActoDesc', text);
         window.localStorage.setItem('selectedActoJSON', JSON.stringify(editmodel.toJSON()));
         this.editView.model = editmodel; 
         $(':mobile-pagecontainer').pagecontainer('change', '#pgEdit'); 
         this.editView.initialize(); 
         this.editView.render(); 
     },
     ShowPopup: function(e){
        this.renderEmList();
        $("#popUpEmList").popup("open"); 
     },
     UpdateEm: function(){
         window.localStorage.setItem('selectedEmId', this.selectedEmId);
        if(this.selectedEmId != 0){
            //this.$el.find('#lblEm').text('EM: '+this.selectedEmId);
            this.$el.find('#seleccionaPopup').text('EM: '+this.selectedEmId+' (Cambiar)');
        }else{
            //this.$el.find('#lblEm').text('EM: seleccionar valor');
            this.$el.find('#seleccionaPopup').text('EM: seleccionar valor');
        }
     },
     ChangeCurrentEm: function(e){
        $("#popUpEmList").popup("close");
        
        this.selectedEmId=$(e.target).attr('id');
        window.localStorage.setItem('selectedEmId', this.selectedEmId);
        this.UpdateEm();
        this.renderActosList();
        this.CheckActo();
     }
 }); 
 