var ProvinciasNewView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
       this.model = new ProvinciasEntity(); 
       //this.model.set('idProvincia', this.collection.get(this.collection.length -1).get('idProvincia')+1); 
       this.render(); 
   }, 
   render: function(){ 
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#newinputcodigo').val(this.model.get('codigo')).textinput('refresh'); 
    this.$('#newinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#newinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#newinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#newinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#newinputprovincia').val(this.model.get('provincia')).textinput('refresh'); 
    this.$('#newinputcomunidad').val(this.model.get('comunidad')).textinput('refresh'); 
    this.$('#newinputcod182').val(this.model.get('cod182')).textinput('refresh'); 
    this.$('#newinputpro182').val(this.model.get('pro182')).textinput('refresh'); 
   }, 
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     'change #newinputcodigo': function(){ 
       this.model.set('codigo', this.$('#newinputcodigo').val()); 
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
     'change #newinputprovincia': function(){ 
       this.model.set('provincia', this.$('#newinputprovincia').val()); 
     }, 
     'change #newinputcomunidad': function(){ 
       this.model.set('comunidad', this.$('#newinputcomunidad').val()); 
     }, 
     'change #newinputcod182': function(){ 
       this.model.set('cod182', this.$('#newinputcod182').val()); 
     }, 
     'change #newinputpro182': function(){ 
       this.model.set('pro182', this.$('#newinputpro182').val()); 
     }, 
     'click #btGuardar': function(){ 
       this.model.set('idProvincia', undefined); 
       this.collection.add(this.model); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.model = new ProvinciasEntity(); 
       //this.model.set('idProvincia', this.collection.get(this.collection.length -1).get('idProvincia')+1); 
       this.render(); 
     }, 
     'click #btCancelar': function(){ 
       this.model = new ProvinciasEntity(); 
       //this.model.set('idProvincia', this.collection.get(this.collection.length -1).get('idProvincia')+1); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.render(); 
     }, 
     'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 