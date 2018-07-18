var TimingActosEditView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       var self = this; 
     this.selectedActosId = window.localStorage.getItem('selectedActoId');
     var parseEntity = JSON.parse(window.localStorage.getItem('selectedActoJSON'));
     this.actosEnt = new ActosEntity(parseEntity);
   }, 
   render: function(){ 
     var descActo = this.actosEnt.get('descripcion');
     this.$el.find('#tituloEdit').text(descActo);
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#editinputidTiming').val(this.model.get('idTiming')).textinput('refresh'); 
    this.$('#editinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#editinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#editinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#editinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#editinputidActo').val(this.selectedActosId).textinput('refresh'); 
    //this.$('#editinputidActo').val(this.model.get('idActo')).textinput('refresh'); 
    this.$('#editinputevento').val(this.model.get('evento')).textinput('refresh'); 
    this.$('#editinputdesde').val(this.model.get('desde')).textinput('refresh'); 
    this.$('#editinputhasta').val(this.model.get('hasta')).textinput('refresh'); 
    if(this.enableRefresh){ 
    } 
   }, 
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     'change #editinputidTiming': function(){ 
       this.model.set('idTiming', this.$('#editinputidTiming').val()); 
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
     'change #editinputidActo': function(){ 
       this.model.set('idActo', this.$('#editinputidActo').val()); 
     }, 
     'change #editinputevento': function(){ 
       this.model.set('evento', this.$('#editinputevento').val()); 
     }, 
     'change #editinputdesde': function(){ 
       this.model.set('desde', this.$('#editinputdesde').val()); 
     }, 
     'change #editinputhasta': function(){ 
       this.model.set('hasta', this.$('#editinputhasta').val()); 
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
 