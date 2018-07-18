var TipoRelacionNewView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
       this.model = new TipoRelacionEntity(); 
       //this.model.set('idRelacion', this.collection.get(this.collection.length -1).get('idRelacion')+1); 
       this.render(); 
   }, 
   render: function(){ 
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#newinputidRelacion').val(this.model.get('idRelacion')).textinput('refresh'); 
    this.$('#newinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#newinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#newinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#newinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#newinputdescripcion').val(this.model.get('descripcion')).textinput('refresh'); 
    this.$('#newinputobservaciones').val(this.model.get('observaciones')).textinput('refresh'); 
    this.$('#newinputesVoluntario').val(this.model.get('esVoluntario')).flipswitch('refresh'); 
   }, 
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     'change #newinputidRelacion': function(){ 
       this.model.set('idRelacion', this.$('#newinputidRelacion').val()); 
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
     'change #newinputobservaciones': function(){ 
       this.model.set('observaciones', this.$('#newinputobservaciones').val()); 
     }, 
     'change #newinputesVoluntario': function(){ 
       this.model.set('esVoluntario', this.$('#newinputesVoluntario').val()); 
     }, 
     'click #btGuardar': function(){ 
       this.model.set('idRelacion', undefined); 
       this.collection.add(this.model); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.model = new TipoRelacionEntity(); 
       //this.model.set('idRelacion', this.collection.get(this.collection.length -1).get('idRelacion')+1); 
       this.render(); 
     }, 
     'click #btCancelar': function(){ 
       this.model = new TipoRelacionEntity(); 
       //this.model.set('idRelacion', this.collection.get(this.collection.length -1).get('idRelacion')+1); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.render(); 
     }, 
     'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 