var TrasladosNewView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
       this.model = new TrasladosEntity(); 
       //this.model.set('idTraslado', this.collection.get(this.collection.length -1).get('idTraslado')+1); 
       this.render(); 
   }, 
   render: function(){ 
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#newinputidTraslado').val(this.model.get('idTraslado')).textinput('refresh'); 
    this.$('#newinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#newinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#newinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#newinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#newinputidEm').val(this.model.get('idEm')).textinput('refresh'); 
    this.$('#newinputidActo').val(this.model.get('idActo')).textinput('refresh'); 
    this.$('#newinputidPersona').val(this.model.get('idPersona')).textinput('refresh'); 
    this.$('#newinputfecha').val(this.model.get('fecha')); 
    this.$('#newinputchofer').val(this.model.get('chofer')).textinput('refresh'); 
    this.$('#newinputazafata').val(this.model.get('azafata')).textinput('refresh'); 
    this.$('#newinputsalida').val(this.model.get('salida')).textinput('refresh'); 
    this.$('#newinputrecogida').val(this.model.get('recogida')).textinput('refresh'); 
    this.$('#newinputdestino').val(this.model.get('destino')).textinput('refresh'); 
    this.$('#newinputllegada').val(this.model.get('llegada')).textinput('refresh'); 
    this.$('#newinputacompanantes').val(this.model.get('acompanantes')).textinput('refresh'); 
    this.$('#newinputobservaciones').val(this.model.get('observaciones')).textinput('refresh'); 
   }, 
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     'change #newinputidTraslado': function(){ 
       this.model.set('idTraslado', this.$('#newinputidTraslado').val()); 
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
     'change #newinputfecha': function(){ 
       this.model.set('fecha', this.$('#newinputfecha').val()); 
     }, 
     'change #newinputchofer': function(){ 
       this.model.set('chofer', this.$('#newinputchofer').val()); 
     }, 
     'change #newinputazafata': function(){ 
       this.model.set('azafata', this.$('#newinputazafata').val()); 
     }, 
     'change #newinputsalida': function(){ 
       this.model.set('salida', this.$('#newinputsalida').val()); 
     }, 
     'change #newinputrecogida': function(){ 
       this.model.set('recogida', this.$('#newinputrecogida').val()); 
     }, 
     'change #newinputdestino': function(){ 
       this.model.set('destino', this.$('#newinputdestino').val()); 
     }, 
     'change #newinputllegada': function(){ 
       this.model.set('llegada', this.$('#newinputllegada').val()); 
     }, 
     'change #newinputacompanantes': function(){ 
       this.model.set('acompanantes', this.$('#newinputacompanantes').val()); 
     }, 
     'change #newinputobservaciones': function(){ 
       this.model.set('observaciones', this.$('#newinputobservaciones').val()); 
     }, 
     'click #btGuardar': function(){ 
       this.model.set('idTraslado', undefined); 
       this.collection.add(this.model); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.model = new TrasladosEntity(); 
       //this.model.set('idTraslado', this.collection.get(this.collection.length -1).get('idTraslado')+1); 
       this.render(); 
     }, 
     'click #btCancelar': function(){ 
       this.model = new TrasladosEntity(); 
       //this.model.set('idTraslado', this.collection.get(this.collection.length -1).get('idTraslado')+1); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.render(); 
     }, 
     'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 