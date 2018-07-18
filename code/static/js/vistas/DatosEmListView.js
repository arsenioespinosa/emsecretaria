var DatosEmListView = Backbone.View.extend({ 
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
         this.$el.find('[data-role="listview"]').empty(); 
         for(var i = 0; i < this.collection.size(); i++){ 
           var m= this.collection.at(i); 
           var str = '<li><a class="lvitem" id="'+m.get('idEm')+'" href="#">'+m.get('idEm')+' - '+m.get('lema')+'</a></li>'; 
           this.$el.find('[data-role="listview"]').append(str); 
            
         } 
         this.$el.find('[data-role="listview"]').listview(); 
          
     }, 
     events:{ 
         'click .lvitem':'ShowEditView' 
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
 