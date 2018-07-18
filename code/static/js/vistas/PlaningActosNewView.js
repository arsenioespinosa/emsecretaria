var PlaningActosNewView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
       this.model = new PlaningActosEntity(); 
       //this.model.set('idPlaning', this.collection.get(this.collection.length -1).get('idPlaning')+1); 
       this.render(); 
   }, 
   render: function(){ 
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#newinputidPlaning').val(this.model.get('idPlaning')).textinput('refresh'); 
    this.$('#newinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#newinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#newinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#newinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#newinputidActo').val(this.model.get('idActo')).textinput('refresh'); 
    this.$('#newinputevento').val(this.model.get('evento')).textinput('refresh'); 
    this.$('#newinputfecha').val(this.model.get('fecha')); 
    this.$('#newinputdesde').val(this.model.get('desde')).textinput('refresh'); 
    this.$('#newinputhasta').val(this.model.get('hasta')).textinput('refresh'); 
    this.$('#newinputsala').val(this.model.get('sala')).textinput('refresh'); 
   }, 
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     'change #newinputidPlaning': function(){ 
       this.model.set('idPlaning', this.$('#newinputidPlaning').val()); 
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
     'change #newinputevento': function(){ 
       this.model.set('evento', this.$('#newinputevento').val()); 
     }, 
     'change #newinputfecha': function(){ 
       this.model.set('fecha', this.$('#newinputfecha').val()); 
     }, 
     'change #newinputdesde': function(){ 
       this.model.set('desde', this.$('#newinputdesde').val()); 
     }, 
     'change #newinputhasta': function(){ 
       this.model.set('hasta', this.$('#newinputhasta').val()); 
     }, 
     'change #newinputsala': function(){ 
       this.model.set('sala', this.$('#newinputsala').val()); 
     }, 
     'click #btGuardar': function(){ 
       this.model.set('idPlaning', undefined); 
       this.collection.add(this.model); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.model = new PlaningActosEntity(); 
       //this.model.set('idPlaning', this.collection.get(this.collection.length -1).get('idPlaning')+1); 
       this.render(); 
     }, 
     'click #btCancelar': function(){ 
       this.model = new PlaningActosEntity(); 
       //this.model.set('idPlaning', this.collection.get(this.collection.length -1).get('idPlaning')+1); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.render(); 
     }, 
     'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 