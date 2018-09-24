var TimingActosNewView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
       this.model = new TimingActosEntity(); 
       this.selectedActosId = window.localStorage.getItem('selectedActoId');
       var parseEntity = JSON.parse(window.localStorage.getItem('selectedActoJSON'));
       this.actosEnt = new ActosEntity(parseEntity);
       //this.model.set('idTiming', this.collection.get(this.collection.length -1).get('idTiming')+1); 
       // this.render(); 
   }, 
   render: function(){ 
   var title = window.localStorage.getItem('selectedEmId') +" > "+ window.localStorage.getItem('selectedActoDesc');
     this.$el.find('#lblIdEmNew').text(title);
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#newinputidTiming').val(this.model.get('idTiming')).textinput('refresh'); 
    this.$('#newinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#newinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#newinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#newinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#newinputidActo').val(this.model.get('idActo')).textinput('refresh'); 
    this.$('#newinputevento').val(this.model.get('evento')).textinput('refresh'); 
    this.$('#newinputdesde').val(this.model.get('desde')).textinput('refresh'); 
    this.$('#newinputhasta').val(this.model.get('hasta')).textinput('refresh'); 
   }, 
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     'change #newinputidTiming': function(){ 
       this.model.set('idTiming', this.$('#newinputidTiming').val()); 
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
     'change #newinputdesde': function(){ 
       this.model.set('desde', this.$('#newinputdesde').val()); 
     }, 
     'change #newinputhasta': function(){ 
       this.model.set('hasta', this.$('#newinputhasta').val()); 
     }, 
     'click #btGuardar': function(){ 
       this.model.set('idActo', this.selectedActosId);
       this.model.set('idTiming', undefined); 
       this.collection.add(this.model); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.model = new TimingActosEntity(); 
       //this.model.set('idTiming', this.collection.get(this.collection.length -1).get('idTiming')+1); 
       this.render(); 
     }, 
     'click #btCancelar': function(){ 
       this.model = new TimingActosEntity(); 
       //this.model.set('idTiming', this.collection.get(this.collection.length -1).get('idTiming')+1); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.render(); 
     }, 
     'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 