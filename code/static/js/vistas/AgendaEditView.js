var AgendaEditView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
   }, 
   render: function(){ 
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#editinputidAgenda').val(this.model.get('idAgenda')).textinput('refresh'); 
    this.$('#editinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#editinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#editinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#editinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#editinputidEm').val(this.model.get('idEm')).textinput('refresh'); 
    this.$('#editinputidActo').val(this.model.get('idActo')).textinput('refresh'); 
    this.$('#editinputidPersona').val(this.model.get('idPersona')).textinput('refresh'); 
    this.$('#editinputdescripcion').val(this.model.get('descripcion')).textinput('refresh'); 
    this.$('#editinputfecha').val(this.model.get('fecha')); 
    this.$('#editinputhoraInicio').val(this.model.get('horaInicio')).textinput('refresh'); 
    this.$('#editinputhoraFin').val(this.model.get('horaFin')).textinput('refresh'); 
    if(this.enableRefresh){ 
    } 
   }, 
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     'change #editinputidAgenda': function(){ 
       this.model.set('idAgenda', this.$('#editinputidAgenda').val()); 
     }, 
     'change #editinputlastModificationUser': function(){ 
       this.model.set('lastModificationUser', this.$('#editinputlastModificationUser').val()); 
     }, 
     'change #editinputlastModificationDate': function(){ 
       this.model.set('lastModificationDate', this.$('#editinputlastModificationDate').val()); 
     }, 
     'change #editinputcreationUser': function(){ 
       this.model.set('creationUser', this.$('#editinputcreationUser').val()); 
     }, 
     'change #editinputcreationDate': function(){ 
       this.model.set('creationDate', this.$('#editinputcreationDate').val()); 
     }, 
     'change #editinputidEm': function(){ 
       this.model.set('idEm', this.$('#editinputidEm').val()); 
     }, 
     'change #editinputidActo': function(){ 
       this.model.set('idActo', this.$('#editinputidActo').val()); 
     }, 
     'change #editinputidPersona': function(){ 
       this.model.set('idPersona', this.$('#editinputidPersona').val()); 
     }, 
     'change #editinputdescripcion': function(){ 
       this.model.set('descripcion', this.$('#editinputdescripcion').val()); 
     }, 
     'change #editinputfecha': function(){ 
       this.model.set('fecha', this.$('#editinputfecha').val()); 
     }, 
     'change #editinputhoraInicio': function(){ 
       this.model.set('horaInicio', this.$('#editinputhoraInicio').val()); 
     }, 
     'change #editinputhoraFin': function(){ 
       this.model.set('horaFin', this.$('#editinputhoraFin').val()); 
     }, 
     'click #btBorrar': function(){ 
       this.collection.remove(this.model); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
     }, 
     'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 