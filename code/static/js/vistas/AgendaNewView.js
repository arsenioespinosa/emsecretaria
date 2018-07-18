var AgendaNewView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
       this.model = new AgendaEntity(); 
       //this.model.set('idAgenda', this.collection.get(this.collection.length -1).get('idAgenda')+1); 
       this.render(); 
   }, 
   render: function(){ 
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#newinputidAgenda').val(this.model.get('idAgenda')).textinput('refresh'); 
    this.$('#newinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#newinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#newinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#newinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#newinputidEm').val(this.model.get('idEm')).textinput('refresh'); 
    this.$('#newinputidActo').val(this.model.get('idActo')).textinput('refresh'); 
    this.$('#newinputidPersona').val(this.model.get('idPersona')).textinput('refresh'); 
    this.$('#newinputdescripcion').val(this.model.get('descripcion')).textinput('refresh'); 
    this.$('#newinputfecha').val(this.model.get('fecha')); 
    this.$('#newinputhoraInicio').val(this.model.get('horaInicio')).textinput('refresh'); 
    this.$('#newinputhoraFin').val(this.model.get('horaFin')).textinput('refresh'); 
   }, 
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     'change #newinputidAgenda': function(){ 
       this.model.set('idAgenda', this.$('#newinputidAgenda').val()); 
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
     'change #newinputidEm': function(){ 
       this.model.set('idEm', this.$('#newinputidEm').val()); 
     }, 
     'change #newinputidActo': function(){ 
       this.model.set('idActo', this.$('#newinputidActo').val()); 
     }, 
     'change #newinputidPersona': function(){ 
       this.model.set('idPersona', this.$('#newinputidPersona').val()); 
     }, 
     'change #newinputdescripcion': function(){ 
       this.model.set('descripcion', this.$('#newinputdescripcion').val()); 
     }, 
     'change #newinputfecha': function(){ 
       this.model.set('fecha', this.$('#newinputfecha').val()); 
     }, 
     'change #newinputhoraInicio': function(){ 
       this.model.set('horaInicio', this.$('#newinputhoraInicio').val()); 
     }, 
     'change #newinputhoraFin': function(){ 
       this.model.set('horaFin', this.$('#newinputhoraFin').val()); 
     }, 
     'click #btGuardar': function(){ 
       this.model.set('idAgenda', undefined); 
       this.collection.add(this.model); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.model = new AgendaEntity(); 
       //this.model.set('idAgenda', this.collection.get(this.collection.length -1).get('idAgenda')+1); 
       this.render(); 
     }, 
     'click #btCancelar': function(){ 
       this.model = new AgendaEntity(); 
       //this.model.set('idAgenda', this.collection.get(this.collection.length -1).get('idAgenda')+1); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.render(); 
     }, 
     'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 