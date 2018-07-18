var PersonasNewView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
       this.model = new PersonasEntity(); 
       //this.model.set('idPersona', this.collection.get(this.collection.length -1).get('idPersona')+1); 
       this.render(); 
   }, 
   render: function(){ 
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#newinputidPersona').val(this.model.get('idPersona')).textinput('refresh'); 
    this.$('#newinputetiqueta').val(this.model.get('etiqueta')).flipswitch('refresh'); 
    this.$('#newinputalta').val(this.model.get('alta')); 
    this.$('#newinputbaja').val(this.model.get('baja')); 
    this.$('#newinputtratamiento').val(this.model.get('tratamiento')).textinput('refresh'); 
    this.$('#newinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#newinputlastModificationDate').val(this.model.get('lastModificationDate')).textinput('refresh'); 
    this.$('#newinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#newinputcreationDate').val(this.model.get('creationDate')).textinput('refresh'); 
    this.$('#newinputnombre').val(this.model.get('nombre')).textinput('refresh'); 
    this.$('#newinputapellidos').val(this.model.get('apellidos')).textinput('refresh'); 
    this.$('#newinputempresa').val(this.model.get('empresa')).textinput('refresh'); 
    this.$('#newinputcargo').val(this.model.get('cargo')).textinput('refresh'); 
    this.$('#newinputdireccion').val(this.model.get('direccion')).textinput('refresh'); 
    this.$('#newinputdireccion2').val(this.model.get('direccion2')).textinput('refresh'); 
    this.$('#newinputcp').val(this.model.get('cp')).textinput('refresh'); 
    this.$('#newinputlocalidad').val(this.model.get('localidad')).textinput('refresh'); 
    this.$('#newinputprovincia').val(this.model.get('provincia')).textinput('refresh'); 
    this.$('#newinputpais').val(this.model.get('pais')).textinput('refresh'); 
    this.$('#newinputtfnoDomicilio').val(this.model.get('tfnoDomicilio')).textinput('refresh'); 
    this.$('#newinputtfnoOficina').val(this.model.get('tfnoOficina')).textinput('refresh'); 
    this.$('#newinputtfnoMovil').val(this.model.get('tfnoMovil')).textinput('refresh'); 
    this.$('#newinputemail').val(this.model.get('email')).textinput('refresh'); 
    this.$('#newinputemail2').val(this.model.get('email2')).textinput('refresh'); 
    this.$('#newinputobservaciones').val(this.model.get('observaciones')).textinput('refresh'); 
    this.$('#newinputprofesion').val(this.model.get('profesion')).textinput('refresh'); 
    this.$('#newinputpersonaRef').val(this.model.get('personaRef')).textinput('refresh'); 
    this.$('#newinputbiografia').val(this.model.get('biografia')).textinput('refresh'); 
    this.$('#newinputidioma').val(this.model.get('idioma')).textinput('refresh'); 
    this.renderProfesionesList();
   }, 
   renderProfesionesList: function(){
    this.$el.find('#newlvProfesiones').empty();
    if(this.profesionesList != undefined){
      for (var i = 0; i < this.profesionesList.length; i++){
          var m = this.profesionesList.at(i);
          var str = '<li><a class="newlvProfesionesItem" id="'+m.get('idProfesion')+'" href="#">'+m.get('descripcion')+'</a></li>';
          this.$el.find('#newlvProfesiones').append(str);
      }
      
    }
    this.$el.find('#newlvProfesiones').listview();
   },
   SetProfesionesList: function(profesionesList){
    this.profesionesList = profesionesList;
    //this.personasList.initialize();
    this.renderProfesionesList();
   },
   GetProfesionById: function(searchId){
     var searchIndex = 0;
     while(searchIndex < this.profesionesList.length){
       if(this.profesionesList.at(searchIndex).get('idProfesion')==searchId)
       {
         return this.profesionesList.at(searchIndex);
       }
       searchIndex++;
     }
     return null;
   },
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     'change #newinputidPersona': function(){ 
       this.model.set('idPersona', this.$('#newinputidPersona').val()); 
     }, 
     'change #newinputetiqueta': function(){ 
       this.model.set('etiqueta', this.$('#newinputetiqueta').val()); 
     }, 
     'change #newinputalta': function(){ 
       this.model.set('alta', this.$('#newinputalta').val()); 
     }, 
     'change #newinputbaja': function(){ 
       this.model.set('baja', this.$('#newinputbaja').val()); 
     }, 
     'change #newinputtratamiento': function(){ 
       this.model.set('tratamiento', this.$('#newinputtratamiento').val()); 
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
     'change #newinputnombre': function(){ 
       this.model.set('nombre', this.$('#newinputnombre').val()); 
     }, 
     'change #newinputapellidos': function(){ 
       this.model.set('apellidos', this.$('#newinputapellidos').val()); 
     }, 
     'change #newinputempresa': function(){ 
       this.model.set('empresa', this.$('#newinputempresa').val()); 
     }, 
     'change #newinputcargo': function(){ 
       this.model.set('cargo', this.$('#newinputcargo').val()); 
     }, 
     'change #newinputdireccion': function(){ 
       this.model.set('direccion', this.$('#newinputdireccion').val()); 
     }, 
     'change #newinputdireccion2': function(){ 
       this.model.set('direccion2', this.$('#newinputdireccion2').val()); 
     }, 
     'change #newinputcp': function(){ 
       this.model.set('cp', this.$('#newinputcp').val()); 
     }, 
     'change #newinputlocalidad': function(){ 
       this.model.set('localidad', this.$('#newinputlocalidad').val()); 
     }, 
     'change #newinputprovincia': function(){ 
       this.model.set('provincia', this.$('#newinputprovincia').val()); 
     }, 
     'change #newinputpais': function(){ 
       this.model.set('pais', this.$('#newinputpais').val()); 
     }, 
     'change #newinputtfnoDomicilio': function(){ 
       this.model.set('tfnoDomicilio', this.$('#newinputtfnoDomicilio').val()); 
     }, 
     'change #newinputtfnoOficina': function(){ 
       this.model.set('tfnoOficina', this.$('#newinputtfnoOficina').val()); 
     }, 
     'change #newinputtfnoMovil': function(){ 
       this.model.set('tfnoMovil', this.$('#newinputtfnoMovil').val()); 
     }, 
     'change #newinputemail': function(){ 
       this.model.set('email', this.$('#newinputemail').val()); 
     }, 
     'change #newinputemail2': function(){ 
       this.model.set('email2', this.$('#newinputemail2').val()); 
     }, 
     'change #newinputobservaciones': function(){ 
       this.model.set('observaciones', this.$('#newinputobservaciones').val()); 
     }, 
     'change #newinputprofesion': function(){ 
       this.model.set('profesion', this.$('#newinputprofesion').val()); 
     }, 
     'change #newinputpersonaRef': function(){ 
       this.model.set('personaRef', this.$('#newinputpersonaRef').val()); 
     }, 
     'change #newinputbiografia': function(){ 
       this.model.set('biografia', this.$('#newinputbiografia').val()); 
     }, 
     'change #newinputidioma': function(){ 
       this.model.set('idioma', this.$('#newinputidioma').val()); 
     }, 
     'click #btGuardar': function(){ 
       this.model.set('idPersona', undefined); 
       this.collection.add(this.model); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.model = new PersonasEntity(); 
       //this.model.set('idPersona', this.collection.get(this.collection.length -1).get('idPersona')+1); 
       this.$('#newinputprofesiondesc').val('').textinput('refresh'); 
       this.render(); 
     }, 
     'click #btCancelar': function(){ 
       this.model = new PersonasEntity(); 
       //this.model.set('idPersona', this.collection.get(this.collection.length -1).get('idPersona')+1); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.render(); 
     }, 
     'click #newinputprofesionbtn': function(){
       this.renderProfesionesList();
       $("#newpopUpProfesionesList").popup("open");
     },
     'click .newlvProfesionesItem': function(e){
       $("#newpopUpProfesionesList").popup("close");
       var pId = $(e.target).attr('id');
       var pEnt = this.GetProfesionById(pId);
       
       if(pEnt != null){
         var pDes = pEnt.get('descripcion');
          this.$('#newinputprofesion').val(pId).textinput('refresh'); 
          this.model.set('profesion', pId); 
          this.$('#newinputprofesiondesc').val(pDes).textinput('refresh'); 
       }
     },
     'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 