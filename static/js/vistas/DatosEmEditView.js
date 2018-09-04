var DatosEmEditView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
   }, 
   render: function(){ 
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#editinputidEm').val(this.model.get('idEm')).textinput('refresh'); 
    this.$('#editinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#editinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#editinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#editinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#editinputfechas').val(this.model.get('fechas')).textinput('refresh'); 
    this.$('#editinputlema').val(this.model.get('lema')).textinput('refresh'); 
    this.$('#editinputobservaciones').val(this.model.get('observaciones')).textinput('refresh'); 
    this.$('#editinputlugar').val(this.model.get('lugar')).textinput('refresh'); 
    if(this.enableRefresh){ 
    } 
   }, 
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     'change #editinputidEm': function(){ 
       this.model.set('idEm', this.$('#editinputidEm').val()); 
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
     'change #editinputfechas': function(){ 
       this.model.set('fechas', this.$('#editinputfechas').val()); 
     }, 
     'change #editinputlema': function(){ 
       this.model.set('lema', this.$('#editinputlema').val()); 
     }, 
     'change #editinputobservaciones': function(){ 
       this.model.set('observaciones', this.$('#editinputobservaciones').val()); 
     }, 
     'change #editinputlugar': function(){ 
       this.model.set('lugar', this.$('#editinputlugar').val()); 
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
 