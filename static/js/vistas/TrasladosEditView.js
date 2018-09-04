var TrasladosEditView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
   }, 
   render: function(){ 
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#editinputidTraslado').val(this.model.get('idTraslado')).textinput('refresh'); 
    this.$('#editinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#editinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#editinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#editinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#editinputidEm').val(this.model.get('idEm')).textinput('refresh'); 
    this.$('#editinputidActo').val(this.model.get('idActo')).textinput('refresh'); 
    this.$('#editinputidPersona').val(this.model.get('idPersona')).textinput('refresh'); 
    this.$('#editinputfecha').val(this.model.get('fecha')); 
    this.$('#editinputchofer').val(this.model.get('chofer')).textinput('refresh'); 
    this.$('#editinputazafata').val(this.model.get('azafata')).textinput('refresh'); 
    this.$('#editinputsalida').val(this.model.get('salida')).textinput('refresh'); 
    this.$('#editinputrecogida').val(this.model.get('recogida')).textinput('refresh'); 
    this.$('#editinputdestino').val(this.model.get('destino')).textinput('refresh'); 
    this.$('#editinputllegada').val(this.model.get('llegada')).textinput('refresh'); 
    this.$('#editinputacompanantes').val(this.model.get('acompanantes')).textinput('refresh'); 
    this.$('#editinputobservaciones').val(this.model.get('observaciones')).textinput('refresh'); 
    if(this.enableRefresh){ 
    } 
   }, 
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     'change #editinputidTraslado': function(){ 
       this.model.set('idTraslado', this.$('#editinputidTraslado').val()); 
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
     'change #editinputfecha': function(){ 
       this.model.set('fecha', this.$('#editinputfecha').val()); 
     }, 
     'change #editinputchofer': function(){ 
       this.model.set('chofer', this.$('#editinputchofer').val()); 
     }, 
     'change #editinputazafata': function(){ 
       this.model.set('azafata', this.$('#editinputazafata').val()); 
     }, 
     'change #editinputsalida': function(){ 
       this.model.set('salida', this.$('#editinputsalida').val()); 
     }, 
     'change #editinputrecogida': function(){ 
       this.model.set('recogida', this.$('#editinputrecogida').val()); 
     }, 
     'change #editinputdestino': function(){ 
       this.model.set('destino', this.$('#editinputdestino').val()); 
     }, 
     'change #editinputllegada': function(){ 
       this.model.set('llegada', this.$('#editinputllegada').val()); 
     }, 
     'change #editinputacompanantes': function(){ 
       this.model.set('acompanantes', this.$('#editinputacompanantes').val()); 
     }, 
     'change #editinputobservaciones': function(){ 
       this.model.set('observaciones', this.$('#editinputobservaciones').val()); 
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
 