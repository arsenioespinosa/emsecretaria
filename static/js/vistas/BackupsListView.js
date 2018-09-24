var BackupsListView = Backbone.View.extend({ 
   initialize: function(){ 
     var self = this; 
         this.collection.on('remove', function(){ self.render();}); 
         this.collection.on('sync', function(){self.render();}); 
         this.userList = undefined;
         this.render(); 
     }, 
     render: function(){ 
         //limpiar 
         //this.$el.html('<ul data-role="listview" data-filter="true"></ul>'); 
         //pintar rutas 
         //for(var i = 0; i < this.collection.size(); i++){ 
         //    var m= this.collection.at(i); 
         //    var str = '<li><a id="'+m.idbackups+'" href="#">'+m.get('titulo')+'</a></li>'; 
         //    this.$el.find('[data-role="listview"]').append(str); 
         //} 
         //this.$el.find('[data-role="listview"]').listview(); 

         this.$el.find('[data-role="listview"]').empty(); 
         for(var i = 0; i < this.collection.size(); i++){ 
           var m= this.collection.at(i); 
           var str = '<li id="'+m.get('idBackup')+'" data-id="'+m.get('idBackup')+'">'+m.get('descripcion')+' <a class="lvitemdownload ui-btn" id="'+m.get('idBackup')+'" href="'+m.get('ruta')+'">download</a>  <a class="lvitemdelete ui-btn" id="'+m.get('idBackup')+'" href="#">delete</a></li>'; 
           this.$el.find('[data-role="listview"]').append(str); 
            
         } 
         this.$el.find('[data-role="listview"]').listview(); 
          this.renderUserInfo();
     }, 
     events:{ 
         'click .lvitemdelete':'DeleteBackup' ,
         'click #seleccionaPopup':'ShowPopup',
         'click #btnDoLogin':'GoToUserLogin',
         'click #btnNuevo':'CreateBackup',
         'click .filter-button': 'ff'
     }, 
     SetUserList: function(userList){
        this.userList = userList;
        this.renderUserInfo();
     },
     renderUserInfo: function(){
      var text = "Log In";
      var btnNuevoDisabled=true;
        if(this.userList != undefined && this.userList.length > 0){
            text=this.userList.at(this.userList.length-1).get('name');
            btnNuevoDisabled=false;
        }
        this.$el.find('#fae').text(text);
        $('#btnNuevo').prop("disabled", btnNuevoDisabled);
     },
     GoToUserLogin: function(){
      window.location="./Usuarios.html";
     },
     SetEditView: function(editView){ 
         this.editView = editView; 
     }, 
     DeleteBackup: function(e){ 
         ////recuperar id 
         var id = $(e.target).attr('id'); 
         var selectedModel = null;
         console.log('ShowEditView ('+id+')'); 
         for(var i = 0; i < this.collection.size(); i++){
            var m = this.collection.at(i);
            console.log('bck:'+m.get('idBackup'));
            if(m.get('idBackup') == id){
                selectedModel = m;
                i = this.collection.size();
            }
         }
         if(selectedModel != null){
            console.log('delete performed');
            this.collection.remove(selectedModel);
            $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
         }

     },
     CreateBackup: function(e){
        var newBck = new BackupEntity();
        this.collection.add(newBck); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
     },
     ff: function(e){
        console.log("jj");
     }
 }); 
 