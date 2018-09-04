var ProvinciasEditView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
   }, 
   render: function(){ 
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#editinputcodigo').val(this.model.get('codigo')).textinput('refresh'); 
    this.$('#editinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#editinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#editinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#editinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#editinputprovincia').val(this.model.get('provincia')).textinput('refresh'); 
    this.$('#editinputcomunidad').val(this.model.get('comunidad')).textinput('refresh'); 
    this.$('#editinputcod182').val(this.model.get('cod182')).textinput('refresh'); 
    this.$('#editinputpro182').val(this.model.get('pro182')).textinput('refresh'); 
    if(this.enableRefresh){ 
    } 
   }, 
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     'change #editinputcodigo': function(){ 
       this.model.set('codigo', this.$('#editinputcodigo').val()); 
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
     'change #editinputprovincia': function(){ 
       this.model.set('provincia', this.$('#editinputprovincia').val()); 
     }, 
     'change #editinputcomunidad': function(){ 
       this.model.set('comunidad', this.$('#editinputcomunidad').val()); 
     }, 
     'change #editinputcod182': function(){ 
       this.model.set('cod182', this.$('#editinputcod182').val()); 
     }, 
     'change #editinputpro182': function(){ 
       this.model.set('pro182', this.$('#editinputpro182').val()); 
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
 