var LoginView = Backbone.View.extend({
     initialize: function () {
         var self = this;
         this.collection.on('remove', function () { self.render(); });
         this.collection.on('sync', function () { self.render(); });
         this.model = new UsuariosEntity();
         this.render();
     }, 
     render: function(){ 
        console.log('render');
        if(this.collection.length > 0){
            $('#divDoLogin').hide();
            $('#divUndoLogin').show();
            $('#currentUser').val(this.collection.at(this.collection.length-1).get('name'));
            //console.log(this.collection.at(0).get('name'));
        }else{
            $('#divDoLogin').show();
            $('#divUndoLogin').hide();
            $('#currentUser').val();
        }
        $('#currentUser').prop("disabled", true);
         //limpiar 
         //this.$el.html('<ul data-role="listview" data-filter="true"></ul>'); 
         //pintar rutas 
         //for(var i = 0; i < this.collection.size(); i++){ 
         //    var m= this.collection.at(i); 
         //    var str = '<li><a id="'+m.idProfesion+'" href="#">'+m.get('titulo')+'</a></li>'; 
         //    this.$el.find('[data-role="listview"]').append(str); 
         //} 
         //this.$el.find('[data-role="listview"]').listview(); 
         // this.$el.find('[data-role="listview"]').empty(); 
         // for(var i = 0; i < this.collection.size(); i++){ 
         //   var m= this.collection.at(i); 
         //   var str = '<li><a class="lvitem" id="'+m.get('idProfesion')+'" href="#">'+m.get('descripcion')+'</a></li>'; 
         //   this.$el.find('[data-role="listview"]').append(str); 
            
         // } 
         // this.$el.find('[data-role="listview"]').listview(); 
          
     }, 
     setToken: function(){
        if(this.collection.length > 0){
            //console.log("session token: "+this.collection[0].sessionToken);
            //window.location.href = 'http://localhost:8080/';
        }
     },
     events: {
         'change #editinputUsuario': function () {
             this.model.set('username', this.$('#editinputUsuario').val());
         },
         'change #editinputPassword': function () {
             var hash = md5.create();
             hash.update(this.$('#editinputPassword').val());
             this.model.set('password', hash.hex());
         },
         'click #tryLog': function () {
             console.log("Try login " + this.model.get('username'));
             this.model.set('email', undefined);
             this.model.set('name', undefined);
             this.model.set('passordConf', 'md5');
             this.model.set('sessionToken', undefined);
             this.model.set('sessionDeadline', undefined);
             this.collection.add(this.model);
             $(':mobile-pagecontainer').pagecontainer('change', '#pgHome');
             this.model = new UsuariosEntity();
             //this.model.set('idPersona', this.collection.get(this.collection.length -1).get('idPersona')+1); 
             this.$('#editinputUsuario').val('').textinput('refresh');
             this.$('#editinputPassword').val('').textinput('refresh');
             this.setToken();
         },
         'click #tryUnlog': function(){
            this.collection.remove(this.collection.at(0));
            this.render();
         },
         'click #goHome': function(){
            window.location.href = 'http://localhost:8080/'
         }
     }, 
     SetEditView: function(editView){ 
         this.editView = editView; 
     }, 
     ShowEditView: function (e) {
         var login = $('#editinputUsuario').val();
         var pass = $('#editinputPassword').val();
         console.log('Try login ' + login + ' pwd ' + pass);
         ////recuperar id 
         // var id = $(e.target).attr('id'); 
         // console.log('ShowEditView ('+id+')'); 
         // this.editView.model = this.collection.get(id); 
         // $(':mobile-pagecontainer').pagecontainer('change', '#pgEdit'); 
         // this.editView.initialize(); 
         // this.editView.render(); 
     } 
 }); 
 