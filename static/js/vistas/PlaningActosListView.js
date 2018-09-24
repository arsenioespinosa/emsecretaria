var PlaningActosListView = Backbone.View.extend({ 
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
         //    var str = '<li><a id="'+m.idPlaning+'" href="#">'+m.get('titulo')+'</a></li>'; 
         //    this.$el.find('[data-role="listview"]').append(str); 
         //} 
         //this.$el.find('[data-role="listview"]').listview(); 
         var title = window.localStorage.getItem('selectedEmId') +" > "+ window.localStorage.getItem('selectedActoDesc');
         this.$el.find('#lblIdEm').text(title);
         this.$el.find('[data-role="listview"]').empty(); 
         for(var i = 0; i < this.collection.size(); i++){ 
           var m= this.collection.at(i); 
           var str = '<li><a class="lvitem ui-btn" id="'+m.get('idPlaning')+'" href="#">'+m.get('fecha')+' '+m.get('desde')+'-'+m.get('hasta')+' '+m.get('evento')+'</a></li>'; 
           this.$el.find('[data-role="listview"]').append(str); 
            
         } 
         this.$el.find('[data-role="listview"]').listview(); 
          this.renderUserInfo();
     }, 
     events:{ 
         'click .lvitem':'ShowEditView',
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
 