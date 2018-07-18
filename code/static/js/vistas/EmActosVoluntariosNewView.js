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
    this.$('#newinputidEm').val(this.model.get('idEm')).textinput('refresh'); 
    this.$('#newinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#newinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#newinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#newinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#newinputidActo').val(this.model.get('idActo')).textinput('refresh'); 
    this.$('#newinputidPersona').val(this.model.get('idPersona')).textinput('refresh'); 
    this.$('#newinputidTipoRelacion').val(this.model.get('idTipoRelacion')).textinput('refresh'); 
    this.$('#newinputobservaciones').val(this.model.get('observaciones')).textinput('refresh'); 
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
     'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 