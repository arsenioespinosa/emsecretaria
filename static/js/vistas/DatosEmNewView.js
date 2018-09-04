var DatosEmNewView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
       this.model = new DatosEmEntity(); 
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
    this.$('#newinputfechas').val(this.model.get('fechas')).textinput('refresh'); 
    this.$('#newinputlema').val(this.model.get('lema')).textinput('refresh'); 
    this.$('#newinputobservaciones').val(this.model.get('observaciones')).textinput('refresh'); 
    this.$('#newinputlugar').val(this.model.get('lugar')).textinput('refresh'); 
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
     'change #newinputfechas': function(){ 
       this.model.set('fechas', this.$('#newinputfechas').val()); 
     }, 
     'change #newinputlema': function(){ 
       this.model.set('lema', this.$('#newinputlema').val()); 
     }, 
     'change #newinputobservaciones': function(){ 
       this.model.set('observaciones', this.$('#newinputobservaciones').val()); 
     }, 
     'change #newinputlugar': function(){ 
       this.model.set('lugar', this.$('#newinputlugar').val()); 
     }, 
     'click #btGuardar': function(){ 
       this.model.set('idEm', undefined); 
       this.collection.add(this.model); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.model = new DatosEmEntity(); 
       //this.model.set('idEm', this.collection.get(this.collection.length -1).get('idEm')+1); 
       this.render(); 
     }, 
     'click #btCancelar': function(){ 
       this.model = new DatosEmEntity(); 
       //this.model.set('idEm', this.collection.get(this.collection.length -1).get('idEm')+1); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.render(); 
     }, 
     'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 