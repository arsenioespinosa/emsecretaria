var PersonasEditView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
   }, 
   render: function(){ 
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#editinputidPersona').val(this.model.get('idPersona')).textinput('refresh'); 
    this.$('#editinputetiqueta').val(this.model.get('etiqueta')).flipswitch('refresh'); 
    this.$('#editinputalta').val(this.model.get('alta')); 
    this.$('#editinputbaja').val(this.model.get('baja')); 
    this.$('#editinputtratamiento').val(this.model.get('tratamiento')).textinput('refresh'); 
    this.$('#editinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#editinputlastModificationDate').val(this.model.get('lastModificationDate')).textinput('refresh'); 
    this.$('#editinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#editinputcreationDate').val(this.model.get('creationDate')).textinput('refresh'); 
    this.$('#editinputnombre').val(this.model.get('nombre')).textinput('refresh'); 
    this.$('#editinputapellidos').val(this.model.get('apellidos')).textinput('refresh'); 
    this.$('#editinputempresa').val(this.model.get('empresa')).textinput('refresh'); 
    this.$('#editinputcargo').val(this.model.get('cargo')).textinput('refresh'); 
    this.$('#editinputdireccion').val(this.model.get('direccion')).textinput('refresh'); 
    this.$('#editinputdireccion2').val(this.model.get('direccion2')).textinput('refresh'); 
    this.$('#editinputcp').val(this.model.get('cp')).textinput('refresh'); 
    this.$('#editinputlocalidad').val(this.model.get('localidad')).textinput('refresh'); 
    this.$('#editinputprovincia').val(this.model.get('provincia')).textinput('refresh'); 
    this.$('#editinputpais').val(this.model.get('pais')).textinput('refresh'); 
    this.$('#editinputtfnoDomicilio').val(this.model.get('tfnoDomicilio')).textinput('refresh'); 
    this.$('#editinputtfnoOficina').val(this.model.get('tfnoOficina')).textinput('refresh'); 
    this.$('#editinputtfnoMovil').val(this.model.get('tfnoMovil')).textinput('refresh'); 
    this.$('#editinputemail').val(this.model.get('email')).textinput('refresh'); 
    this.$('#editinputemail2').val(this.model.get('email2')).textinput('refresh'); 
    this.$('#editinputobservaciones').val(this.model.get('observaciones')).textinput('refresh'); 
    this.$('#editinputprofesion').val(this.model.get('profesion')).textinput('refresh'); 
    var pEnt = this.GetProfesionById(this.model.get('profesion'));
    if(pEnt != null){
      this.$('#editinputprofesiondesc').val(pEnt.get('descripcion')).textinput('refresh'); 
    }else{
      this.$('#editinputprofesiondesc').val('').textinput('refresh'); 
    }
    this.$('#editinputpersonaRef').val(this.model.get('personaRef')).textinput('refresh'); 
    this.$('#editinputbiografia').val(this.model.get('biografia')).textinput('refresh'); 
    this.$('#editinputidioma').val(this.model.get('idioma')).textinput('refresh'); 
    this.renderProfesionesList();
  }, 
  renderProfesionesList: function(){
   this.$el.find('#editlvProfesiones').empty();
   if(this.profesionesList != undefined){
     for (var i = 0; i < this.profesionesList.length; i++){
         var m = this.profesionesList.at(i);
         var str = '<li><a class="editlvProfesionesItem" id="'+m.get('idProfesion')+'" href="#">'+m.get('descripcion')+'</a></li>';
         this.$el.find('#editlvProfesiones').append(str);
     }
     
   }
   this.$el.find('#editlvProfesiones').listview();
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
     'change #editinputidPersona': function(){ 
       this.model.set('idPersona', this.$('#editinputidPersona').val()); 
     }, 
     'change #editinputetiqueta': function(){ 
       this.model.set('etiqueta', this.$('#editinputetiqueta').val()); 
     }, 
     'change #editinputalta': function(){ 
       this.model.set('alta', this.$('#editinputalta').val()); 
     }, 
     'change #editinputbaja': function(){ 
       this.model.set('baja', this.$('#editinputbaja').val()); 
     }, 
     'change #editinputtratamiento': function(){ 
       this.model.set('tratamiento', this.$('#editinputtratamiento').val()); 
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
     'change #editinputnombre': function(){ 
       this.model.set('nombre', this.$('#editinputnombre').val()); 
     }, 
     'change #editinputapellidos': function(){ 
       this.model.set('apellidos', this.$('#editinputapellidos').val()); 
     }, 
     'change #editinputempresa': function(){ 
       this.model.set('empresa', this.$('#editinputempresa').val()); 
     }, 
     'change #editinputcargo': function(){ 
       this.model.set('cargo', this.$('#editinputcargo').val()); 
     }, 
     'change #editinputdireccion': function(){ 
       this.model.set('direccion', this.$('#editinputdireccion').val()); 
     }, 
     'change #editinputdireccion2': function(){ 
       this.model.set('direccion2', this.$('#editinputdireccion2').val()); 
     }, 
     'change #editinputcp': function(){ 
       this.model.set('cp', this.$('#editinputcp').val()); 
     }, 
     'change #editinputlocalidad': function(){ 
       this.model.set('localidad', this.$('#editinputlocalidad').val()); 
     }, 
     'change #editinputprovincia': function(){ 
       this.model.set('provincia', this.$('#editinputprovincia').val()); 
     }, 
     'change #editinputpais': function(){ 
       this.model.set('pais', this.$('#editinputpais').val()); 
     }, 
     'change #editinputtfnoDomicilio': function(){ 
       this.model.set('tfnoDomicilio', this.$('#editinputtfnoDomicilio').val()); 
     }, 
     'change #editinputtfnoOficina': function(){ 
       this.model.set('tfnoOficina', this.$('#editinputtfnoOficina').val()); 
     }, 
     'change #editinputtfnoMovil': function(){ 
       this.model.set('tfnoMovil', this.$('#editinputtfnoMovil').val()); 
     }, 
     'change #editinputemail': function(){ 
       this.model.set('email', this.$('#editinputemail').val()); 
     }, 
     'change #editinputemail2': function(){ 
       this.model.set('email2', this.$('#editinputemail2').val()); 
     }, 
     'change #editinputobservaciones': function(){ 
       this.model.set('observaciones', this.$('#editinputobservaciones').val()); 
     }, 
     'change #editinputprofesion': function(){ 
       this.model.set('profesion', this.$('#editinputprofesion').val()); 
     }, 
     'change #editinputpersonaRef': function(){ 
       this.model.set('personaRef', this.$('#editinputpersonaRef').val()); 
     }, 
     'change #editinputbiografia': function(){ 
       this.model.set('biografia', this.$('#editinputbiografia').val()); 
     }, 
     'change #editinputidioma': function(){ 
       this.model.set('idioma', this.$('#editinputidioma').val()); 
     }, 
     'click #btBorrar': function(){ 
       this.collection.remove(this.model); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
     }, 
     'click #editinputprofesionbtn': function(){
      this.renderProfesionesList();
      $("#editpopUpProfesionesList").popup("open");
    },
    'click .editlvProfesionesItem': function(e){
      $("#editpopUpProfesionesList").popup("close");
      var pId = $(e.target).attr('id');
      var pEnt = this.GetProfesionById(pId);
      
      if(pEnt != null){
        var pDes = pEnt.get('descripcion');
         this.$('#editinputprofesion').val(pId).textinput('refresh'); 
         this.model.set('profesion', pId); 
         this.$('#editinputprofesiondesc').val(pDes).textinput('refresh'); 
      }
    },
     'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 