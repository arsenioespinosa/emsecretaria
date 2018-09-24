var ActosEditView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
   }, 
   render: function(){ 
     //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    //this.$('#editinputidActo').val(this.model.get('idActo')).textinput('refresh'); 
    this.$('#editinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#editinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#editinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#editinputcreationDate').val(this.model.get('creationDate')); 
    this.$('#editinputidEm').val(this.model.get('idEm')).textinput('refresh'); 
    this.$('#editinputdescripcion').val(this.model.get('descripcion')).textinput('refresh'); 
    this.$('#editinputdia').val(this.model.get('dia')); 
    this.$('#editinputinicio').val(this.model.get('inicio')).textinput('refresh'); 
    this.$('#editinputfin').val(this.model.get('fin')).textinput('refresh'); 
    this.$('#editinputasistencia').val(this.model.get('asistencia')).textinput('refresh'); 
    this.$('#editinputavisos').val(this.model.get('avisos')).textinput('refresh'); 
    this.$('#editinputturnoPreg').val(this.model.get('turnoPreg')).flipswitch('refresh'); 
    this.$('#editinputturnoPregModo').val(this.model.get('turnoPregModo')).textinput('refresh'); 
    this.$('#editinputmicroMesa').val(this.model.get('microMesa')).textinput('refresh'); 
    this.$('#editinputmicroPie').val(this.model.get('microPie')).textinput('refresh'); 
    this.$('#editinputmicroInalambrico').val(this.model.get('microInalambrico')).textinput('refresh'); 
    this.$('#editinputmatProyectar').val(this.model.get('matProyectar')).flipswitch('refresh'); 
    this.$('#editinputdescProyeccion').val(this.model.get('descProyeccion')).textinput('refresh'); 
    this.$('#editinputtradActo').val(this.model.get('tradActo')).flipswitch('refresh'); 
    this.$('#editinputidiomaActo').val(this.model.get('idiomaActo')).textinput('refresh'); 
    this.$('#editinputmodoActo').val(this.model.get('modoActo')).textinput('refresh'); 
    this.$('#editinputtradPonente').val(this.model.get('tradPonente')).flipswitch('refresh'); 
    this.$('#editinputidiomaPonente').val(this.model.get('idiomaPonente')).textinput('refresh'); 
    this.$('#editinputmodoPonente').val(this.model.get('modoPonente')).textinput('refresh'); 
    this.$('#editinputcomentarios').val(this.model.get('comentarios')).textinput('refresh'); 
    this.$('#editinputreservAsientos').val(this.model.get('reservAsientos')).textinput('refresh'); 
    this.$('#editinputdetReservAsientos').val(this.model.get('detReservAsientos')).textinput('refresh'); 
    this.$('#editinputincMediosTec').val(this.model.get('incMediosTec')).textinput('refresh'); 
    this.$('#editinputincSala').val(this.model.get('incSala')).textinput('refresh'); 
    this.$('#editinputpuntComienzo').val(this.model.get('puntComienzo')).textinput('refresh'); 
    this.$('#editinputpuntFin').val(this.model.get('puntFin')).textinput('refresh'); 
    this.$('#editinputrespSala').val(this.model.get('respSala')).textinput('refresh'); 
    this.$('#editinputvalActo').val(this.model.get('valActo')).textinput('refresh'); 
    this.$('#editinputcomentFinal').val(this.model.get('comentFinal')).textinput('refresh'); 
    this.$('#editinputsala').val(this.model.get('sala')).textinput('refresh'); 
    var pEnt = this.GetSalaById(this.model.get('sala'));
    if(pEnt != null){
      this.$('#editinputsaladesc').val(pEnt.get('descripcion')).textinput('refresh'); 
    }else{
      this.$('#editinputsaladesc').val('').textinput('refresh'); 
    }
    this.$('#editinputdistMesa').val(this.model.get('distMesa')).textinput('refresh'); 
    this.$('#editinputpatrocinador').val(this.model.get('patrocinador')).textinput('refresh'); 
    pEnt = this.GetPersonaById(this.model.get('patrocinador'));
    if(pEnt != null){
      var pDes = pEnt.get('nombre')+' '+pEnt.get('apellidos');
      this.$('#editinputpatrocinadordesc').val(pDes).textinput('refresh'); 
    }else{
      this.$('#editinputpatrocinadordesc').val('').textinput('refresh'); 
    }
    this.$('#editinputobsPatrocinador').val(this.model.get('obsPatrocinador')).textinput('refresh'); 
    this.$('#editinputazafata').val(this.model.get('azafata')).textinput('refresh'); 
    pEnt = this.GetPersonaById(this.model.get('azafata'));
    if(pEnt != null){
      var pDes = pEnt.get('nombre')+' '+pEnt.get('apellidos');
      this.$('#editinputazafatadesc').val(pDes).textinput('refresh'); 
    }else{
      this.$('#editinputazafatadesc').val('').textinput('refresh'); 
    }
    this.$('#editinputotrasNecesidades').val(this.model.get('otrasNecesidades')).textinput('refresh'); 
    this.$('#editinputaforo').val(this.model.get('aforo')).textinput('refresh'); 
    this.$('#editinputquedaronFuera').val(this.model.get('quedaronFuera')).textinput('refresh'); 
    this.$('#editinputotrasValoraciones').val(this.model.get('otrasValoraciones')).textinput('refresh'); 
    this.$('#editinputtraductorActo').val(this.model.get('traductorActo')).textinput('refresh'); 
    pEnt = this.GetPersonaById(this.model.get('traductorActo'));
    if(pEnt != null){
      var pDes = pEnt.get('nombre')+' '+pEnt.get('apellidos');
      this.$('#editinputtraductorActodesc').val(pDes).textinput('refresh'); 
    }else{
      this.$('#editinputtraductorActodesc').val('').textinput('refresh'); 
    }
    this.$('#editinputtraductorPonente').val(this.model.get('traductorPonente')).textinput('refresh'); 
    pEnt = this.GetPersonaById(this.model.get('traductorPonente'));
    if(pEnt != null){
      var pDes = pEnt.get('nombre')+' '+pEnt.get('apellidos');
      this.$('#editinputtraductorPonentedesc').val(pDes).textinput('refresh'); 
    }else{
      this.$('#editinputtraductorPonentedesc').val('').textinput('refresh'); 
    }
    this.$('#editinputresponsableActo').val(this.model.get('responsableActo')).textinput('refresh'); 
    pEnt = this.GetPersonaById(this.model.get('responsableActo'));
    if(pEnt != null){
      var pDes = pEnt.get('nombre')+' '+pEnt.get('apellidos');
      this.$('#editinputresponsableActodesc').val(pDes).textinput('refresh'); 
    }else{
      this.$('#editinputresponsableActodesc').val('').textinput('refresh'); 
    }
   }, 
   renderPersonasList: function(){
    this.$el.find('#editlvPersonas').empty();
    if(this.personasList != undefined){
      for (var i = 0; i < this.personasList.length; i++){
          var m = this.personasList.at(i);
          var str = '<li><a class="editlvPersonasItem" id="'+m.get('idPersona')+'" href="#">'+m.get('nombre')+' '+m.get('apellidos')+'</a></li>';
          this.$el.find('#editlvPersonas').append(str);
      }
      
    }
    this.$el.find('#editlvPersonas').listview();
   },
   renderSalasList: function(){
     this.$el.find('#editlvSalas').empty();
     if(this.salasList != undefined){
       for(var i = 0; i < this.salasList.length; i++){
         var m = this.salasList.at(i);
         var str = '<li><a class="editlvSalasItem" id="'+m.get('idSala')+'" href="#">'+m.get('descripcion')+'</a></li>';
         this.$el.find('#editlvSalas').append(str);
       }
     }
     this.$el.find('#editlvSalas').listview();
   },
   SetPersonasList: function(personasList){
    this.personasList = personasList;
    //this.personasList.initialize();
    this.renderPersonasList();
   },
   SetSalasList: function(salasList){
     this.salasList = salasList;
     this.renderSalasList();
   },
   GetPersonaById: function(searchId){
    var searchIndex = 0;
    while(searchIndex < this.personasList.length){
      if(this.personasList.at(searchIndex).get('idPersona')==searchId)
      {
        return this.personasList.at(searchIndex);
      }
      searchIndex++;
    }
    return null;
  },
  GetSalaById: function(searchId){
    var searchIndex = 0;
    while(searchIndex < this.salasList.length){
      if(this.salasList.at(searchIndex).get('idSala')==searchId){
        return this.salasList.at(searchIndex);
      }
      searchIndex++;
    }
    return null;
  },
   events:{ 
     //'change #txtEditarTitulo': function(){ 
     //  this.model.set('titulo', this.$('#txtEditarTitulo').val()); 
     //}, 
     //'change #editinputidActo': function(){ 
     //  this.model.set('idActo', this.$('#editinputidActo').val()); 
     //}, 

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
     'change #editinputidEm': function(){ 
       this.model.set('idEm', this.$('#editinputidEm').val()); 
     }, 
     'change #editinputdescripcion': function(){ 
       this.model.set('descripcion', this.$('#editinputdescripcion').val()); 
     }, 
     'change #editinputdia': function(){ 
       this.model.set('dia', this.$('#editinputdia').val()); 
     }, 
     'change #editinputinicio': function(){ 
       this.model.set('inicio', this.$('#editinputinicio').val()); 
     }, 
     'change #editinputfin': function(){ 
       this.model.set('fin', this.$('#editinputfin').val()); 
     }, 
     'change #editinputasistencia': function(){ 
       this.model.set('asistencia', this.$('#editinputasistencia').val()); 
     }, 
     'change #editinputavisos': function(){ 
       this.model.set('avisos', this.$('#editinputavisos').val()); 
     }, 
     'change #editinputturnoPreg': function(){ 
       this.model.set('turnoPreg', this.$('#editinputturnoPreg').val()); 
     }, 
     'change #editinputturnoPregModo': function(){ 
       this.model.set('turnoPregModo', this.$('#editinputturnoPregModo').val()); 
     }, 
     'change #editinputmicroMesa': function(){ 
       this.model.set('microMesa', this.$('#editinputmicroMesa').val()); 
     }, 
     'change #editinputmicroPie': function(){ 
       this.model.set('microPie', this.$('#editinputmicroPie').val()); 
     }, 
     'change #editinputmicroInalambrico': function(){ 
       this.model.set('microInalambrico', this.$('#editinputmicroInalambrico').val()); 
     }, 
     'change #editinputmatProyectar': function(){ 
       this.model.set('matProyectar', this.$('#editinputmatProyectar').val()); 
     }, 
     'change #editinputdescProyeccion': function(){ 
       this.model.set('descProyeccion', this.$('#editinputdescProyeccion').val()); 
     }, 
     'change #editinputtradActo': function(){ 
       this.model.set('tradActo', this.$('#editinputtradActo').val()); 
     }, 
     'change #editinputidiomaActo': function(){ 
       this.model.set('idiomaActo', this.$('#editinputidiomaActo').val()); 
     }, 
     'change #editinputmodoActo': function(){ 
       this.model.set('modoActo', this.$('#editinputmodoActo').val()); 
     }, 
     'change #editinputtradPonente': function(){ 
       this.model.set('tradPonente', this.$('#editinputtradPonente').val()); 
     }, 
     'change #editinputidiomaPonente': function(){ 
       this.model.set('idiomaPonente', this.$('#editinputidiomaPonente').val()); 
     }, 
     'change #editinputmodoPonente': function(){ 
       this.model.set('modoPonente', this.$('#editinputmodoPonente').val()); 
     }, 
     'change #editinputcomentarios': function(){ 
       this.model.set('comentarios', this.$('#editinputcomentarios').val()); 
     }, 
     'change #editinputreservAsientos': function(){ 
       this.model.set('reservAsientos', this.$('#editinputreservAsientos').val()); 
     }, 
     'change #editinputdetReservAsientos': function(){ 
       this.model.set('detReservAsientos', this.$('#editinputdetReservAsientos').val()); 
     }, 
     'change #editinputincMediosTec': function(){ 
       this.model.set('incMediosTec', this.$('#editinputincMediosTec').val()); 
     }, 
     'change #editinputincSala': function(){ 
       this.model.set('incSala', this.$('#editinputincSala').val()); 
     }, 
     'change #editinputpuntComienzo': function(){ 
       this.model.set('puntComienzo', this.$('#editinputpuntComienzo').val()); 
     }, 
     'change #editinputpuntFin': function(){ 
       this.model.set('puntFin', this.$('#editinputpuntFin').val()); 
     }, 
     'change #editinputrespSala': function(){ 
       this.model.set('respSala', this.$('#editinputrespSala').val()); 
     }, 
     'change #editinputvalActo': function(){ 
       this.model.set('valActo', this.$('#editinputvalActo').val()); 
     }, 
     'change #editinputcomentFinal': function(){ 
       this.model.set('comentFinal', this.$('#editinputcomentFinal').val()); 
     }, 
     'change #editinputsala': function(){ 
       this.model.set('sala', this.$('#editinputsala').val()); 
     }, 
     'change #editinputdistMesa': function(){ 
       this.model.set('distMesa', this.$('#editinputdistMesa').val()); 
     }, 
     'change #editinputpatrocinador': function(){ 
       this.model.set('patrocinador', this.$('#editinputpatrocinador').val()); 
     }, 
     'change #editinputobsPatrocinador': function(){ 
       this.model.set('obsPatrocinador', this.$('#editinputobsPatrocinador').val()); 
     }, 
     'change #editinputazafata': function(){ 
       this.model.set('azafata', this.$('#editinputazafata').val()); 
     }, 
     'change #editinputotrasNecesidades': function(){ 
       this.model.set('otrasNecesidades', this.$('#editinputotrasNecesidades').val()); 
     }, 
     'change #editinputaforo': function(){ 
       this.model.set('aforo', this.$('#editinputaforo').val()); 
     }, 
     'change #editinputquedaronFuera': function(){ 
       this.model.set('quedaronFuera', this.$('#editinputquedaronFuera').val()); 
     }, 
     'change #editinputotrasValoraciones': function(){ 
       this.model.set('otrasValoraciones', this.$('#editinputotrasValoraciones').val()); 
     }, 
     'change #editinputtraductorActo': function(){ 
       this.model.set('traductorActo', this.$('#editinputtraductorActo').val()); 
     }, 
     'change #editinputtraductorPonente': function(){ 
       this.model.set('traductorPonente', this.$('#editinputtraductorPonente').val()); 
     }, 
     'change #editinputresponsableActo': function(){ 
       this.model.set('responsableActo', this.$('#editinputresponsableActo').val()); 
     }, 
     'click #btBorrar': function(){ 
       this.collection.remove(this.model); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
     }, 
     'click #editinputpatrocinadorbtn': function(){
      this.renderPersonasList();
      this.campoBuscador = 'patrocinador';
      $("#editpopUpPersonasList").popup("open");

   },
   'click #editinputresponsableActobtn': function(){
     this.renderPersonasList();
     this.campoBuscador = 'responsableacto';
     $("#editpopUpPersonasList").popup("open");
   },
   'click #editinputtraductorPonentebtn': function(){
     this.renderPersonasList();
     this.campoBuscador = 'traductorponente';
     $("#editpopUpPersonasList").popup("open");
   },
   'click #editinputtraductorActobtn': function(){
     this.renderPersonasList();
     this.campoBuscador = 'traductoracto';
     $("#editpopUpPersonasList").popup("open");
   },
   'click #editinputazafatabtn': function(){
     this.renderPersonasList();
     this.campoBuscador = 'azafata';
     $("#editpopUpPersonasList").popup("open");
   },
   'click .editlvPersonasItem': function(e){
     $("#editpopUpPersonasList").popup("close");
     var pId = $(e.target).attr('id');
     var pEnt = this.GetPersonaById(pId);
     
     if(pEnt != null){
       var pDes = pEnt.get('nombre')+' '+pEnt.get('apellidos');
       if(this.campoBuscador == 'patrocinador'){
        this.$('#editinputpatrocinador').val(pId).textinput('refresh'); 
        this.model.set('patrocinador', pId); 
        this.$('#editinputpatrocinadordesc').val(pDes).textinput('refresh'); 
       }else if(this.campoBuscador == 'responsableacto'){
        this.$('#editinputresponsableActo').val(pId).textinput('refresh'); 
        this.model.set('responsableActo', pId); 
        this.$('#editinputresponsableActodesc').val(pDes).textinput('refresh'); 
       }else if(this.campoBuscador == 'traductorponente'){
        this.$('#editinputtraductorPonente').val(pId).textinput('refresh'); 
        this.model.set('traductorPonente', pId); 
        this.$('#editinputtraductorPonentedesc').val(pDes).textinput('refresh'); 
       }else if(this.campoBuscador == 'traductoracto'){
        this.$('#editinputtraductorActo').val(pId).textinput('refresh'); 
        this.model.set('traductorActo', pId); 
        this.$('#editinputtraductorActodesc').val(pDes).textinput('refresh'); 
       }else if(this.campoBuscador == 'azafata'){
        this.$('#editinputazafata').val(pId).textinput('refresh'); 
        this.model.set('azafata', pId); 
        this.$('#editinputazafatadesc').val(pDes).textinput('refresh'); 
       }
     }
   },
   'click #editinputsalabtn': function(){
    this.renderSalasList();
    $("#editpopUpSalasList").popup("open");
  },
  'click .editlvSalasItem': function(e){
    $("#editpopUpSalasList").popup("close");
    var pId = $(e.target).attr('id');
    var pEnt = this.GetSalaById(pId);
    
    if(pEnt != null){
      var pDes = pEnt.get('descripcion');
      this.$('#editinputsala').val(pId).textinput('refresh'); 
      this.model.set('sala', pId); 
      this.$('#editinputsaladesc').val(pDes).textinput('refresh'); 
    }
  },
     'load': function(){ 
         this.render(); 
     },
     'click #btnAtras': function(e){
        window.localStorage.setItem('selectedActoId', undefined);
        $(':mobile-pagecontainer').pagecontainer('change','#pgHome');
     }
   } 
 }); 
 