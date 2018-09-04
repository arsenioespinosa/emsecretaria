var ProfesionesNewView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
       this.model = new ProfesionesEntity(); 
       //this.model.set('idProfesion', this.collection.get(this.collection.length -1).get('idProfesion')+1); 
       this.render(); 
   }, 
   render: function(){ 
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#newinputidProfesion').val(this.model.get('idProfesion')).textinput('refresh'); 
    this.$('#newinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#newinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#newinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#newinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#newinputdescripcion').val(this.model.get('descripcion')).textinput('refresh'); 
   }, 
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     'change #newinputidProfesion': function(){ 
       this.model.set('idProfesion', this.$('#newinputidProfesion').val()); 
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
     'change #newinputdescripcion': function(){ 
       this.model.set('descripcion', this.$('#newinputdescripcion').val()); 
     }, 
     'click #btGuardar': function(){ 
       this.model.set('idProfesion', undefined); 
       this.collection.add(this.model); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.model = new ProfesionesEntity(); 
       //this.model.set('idProfesion', this.collection.get(this.collection.length -1).get('idProfesion')+1); 
       this.render(); 
     }, 
     'click #btCancelar': function(){ 
       this.model = new ProfesionesEntity(); 
       //this.model.set('idProfesion', this.collection.get(this.collection.length -1).get('idProfesion')+1); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.render(); 
     }, 
     'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 