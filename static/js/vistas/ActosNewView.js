var ActosNewView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
       this.selectedEmId = window.localStorage.getItem('selectedEmId');
       this.model = new ActosEntity(); 
       //this.model.set('idActo', this.collection.get(this.collection.length -1).get('idActo')+1); 
       this.render(); 
   }, 
   render: function(){ 
    //this.$('#txtEditarTitulo').val(this.model.get('titulo')).textinput('refresh'); 
    this.$('#newinputidActo').val(this.model.get('idActo')).textinput('refresh'); 
    this.$('#newinputlastModificationUser').val(this.model.get('lastModificationUser')).textinput('refresh'); 
    this.$('#newinputlastModificationDate').val(this.model.get('lastModificationDate')); 
    this.$('#newinputcreationUser').val(this.model.get('creationUser')).textinput('refresh'); 
    this.$('#newinputcreationDate').val(this.model.get('creationDate')); 
    //this.$('#newinputidEm').val(this.model.get('idEm')).textinput('refresh'); 
    this.$('#newinputidEm').val(this.selectedEmId).textinput('refresh'); 
    this.$('#newinputdescripcion').val(this.model.get('descripcion')).textinput('refresh'); 
    this.$('#newinputdia').val(this.model.get('dia')); 
    this.$('#newinputinicio').val(this.model.get('inicio')).textinput('refresh'); 
    this.$('#newinputfin').val(this.model.get('fin')).textinput('refresh'); 
    this.$('#newinputasistencia').val(this.model.get('asistencia')).textinput('refresh'); 
    this.$('#newinputavisos').val(this.model.get('avisos')).textinput('refresh'); 
    this.$('#newinputturnoPreg').val(this.model.get('turnoPreg')).flipswitch('refresh'); 
    this.$('#newinputturnoPregModo').val(this.model.get('turnoPregModo')).textinput('refresh'); 
    this.$('#newinputmicroMesa').val(this.model.get('microMesa')).textinput('refresh'); 
    this.$('#newinputmicroPie').val(this.model.get('microPie')).textinput('refresh'); 
    this.$('#newinputmicroInalambrico').val(this.model.get('microInalambrico')).textinput('refresh'); 
    this.$('#newinputmatProyectar').val(this.model.get('matProyectar')).flipswitch('refresh'); 
    this.$('#newinputdescProyeccion').val(this.model.get('descProyeccion')).textinput('refresh'); 
    this.$('#newinputtradActo').val(this.model.get('tradActo')).flipswitch('refresh'); 
    this.$('#newinputidiomaActo').val(this.model.get('idiomaActo')).textinput('refresh'); 
    this.$('#newinputmodoActo').val(this.model.get('modoActo')).textinput('refresh'); 
    this.$('#newinputtradPonente').val(this.model.get('tradPonente')).flipswitch('refresh'); 
    this.$('#newinputidiomaPonente').val(this.model.get('idiomaPonente')).textinput('refresh'); 
    this.$('#newinputmodoPonente').val(this.model.get('modoPonente')).textinput('refresh'); 
    this.$('#newinputcomentarios').val(this.model.get('comentarios')).textinput('refresh'); 
    this.$('#newinputreservAsientos').val(this.model.get('reservAsientos')).textinput('refresh'); 
    this.$('#newinputdetReservAsientos').val(this.model.get('detReservAsientos')).textinput('refresh'); 
    this.$('#newinputincMediosTec').val(this.model.get('incMediosTec')).textinput('refresh'); 
    this.$('#newinputincSala').val(this.model.get('incSala')).textinput('refresh'); 
    this.$('#newinputpuntComienzo').val(this.model.get('puntComienzo')).textinput('refresh'); 
    this.$('#newinputpuntFin').val(this.model.get('puntFin')).textinput('refresh'); 
    this.$('#newinputrespSala').val(this.model.get('respSala')).textinput('refresh'); 
    this.$('#newinputvalActo').val(this.model.get('valActo')).textinput('refresh'); 
    this.$('#newinputcomentFinal').val(this.model.get('comentFinal')).textinput('refresh'); 
    this.$('#newinputsala').val(this.model.get('sala')).textinput('refresh'); 
    this.$('#newinputdistMesa').val(this.model.get('distMesa')).textinput('refresh'); 
    this.$('#newinputpatrocinador').val(this.model.get('patrocinador')).textinput('refresh'); 
    this.$('#newinputobsPatrocinador').val(this.model.get('obsPatrocinador')).textinput('refresh'); 
    this.$('#newinputazafata').val(this.model.get('azafata')).textinput('refresh'); 
    this.$('#newinputotrasNecesidades').val(this.model.get('otrasNecesidades')).textinput('refresh'); 
    this.$('#newinputaforo').val(this.model.get('aforo')).textinput('refresh'); 
    this.$('#newinputquedaronFuera').val(this.model.get('quedaronFuera')).textinput('refresh'); 
    this.$('#newinputotrasValoraciones').val(this.model.get('otrasValoraciones')).textinput('refresh'); 
    this.$('#newinputtraductorActo').val(this.model.get('traductorActo')).textinput('refresh'); 
    this.$('#newinputtraductorPonente').val(this.model.get('traductorPonente')).textinput('refresh'); 
    this.$('#newinputresponsableActo').val(this.model.get('responsableActo')).textinput('refresh'); 
    this.checkEm();
    this.renderPersonasList();
    this.renderSalasList();
   }, 
   checkEm: function(){
    this.selectedEmId = window.localStorage.getItem('selectedEmId');

    if(this.selectedEmId == "0"){
       $("#popUpEmptyEm").popup("open"); 
    }else{
      this.model.set('idEm', this.selectedEmId);

    }
   },
   renderPersonasList: function(){
    this.$el.find('#newlvPersonas').empty();
    if(this.personasList != undefined){
      for (var i = 0; i < this.personasList.length; i++){
          var m = this.personasList.at(i);
          var str = '<li><a class="newlvPersonasItem" id="'+m.get('idPersona')+'" href="#">'+m.get('nombre')+' '+m.get('apellidos')+'</a></li>';
          this.$el.find('#newlvPersonas').append(str);
      }
      
    }
    this.$el.find('#newlvPersonas').listview();
   },
   renderSalasList: function(){
     this.$el.find('#newlvSalas').empty();
     if(this.salasList != undefined){
       for(var i = 0; i < this.salasList.length; i++){
         var m = this.salasList.at(i);
         var str = '<li><a class="newlvSalasItem" id="'+m.get('idSala')+'" href="#">'+m.get('descripcion')+'</a></li>';
         this.$el.find('#newlvSalas').append(str);
       }
     }
     this.$el.find('#newlvSalas').listview();
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
     'load': function(){
        this.checkEm();
     },
     'change #newinputidActo': function(){ 
       this.model.set('idActo', this.$('#newinputidActo').val()); 
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
     'change #newinputidEm': function(){ 
       this.model.set('idEm', this.$('#newinputidEm').val()); 
     }, 
     'change #newinputdescripcion': function(){ 
       this.model.set('descripcion', this.$('#newinputdescripcion').val()); 
     }, 
     'change #newinputdia': function(){ 
       this.model.set('dia', this.$('#newinputdia').val()); 
     }, 
     'change #newinputinicio': function(){ 
       this.model.set('inicio', this.$('#newinputinicio').val()); 
     }, 
     'change #newinputfin': function(){ 
       this.model.set('fin', this.$('#newinputfin').val()); 
     }, 
     'change #newinputasistencia': function(){ 
       this.model.set('asistencia', this.$('#newinputasistencia').val()); 
     }, 
     'change #newinputavisos': function(){ 
       this.model.set('avisos', this.$('#newinputavisos').val()); 
     }, 
     'change #newinputturnoPreg': function(){ 
       this.model.set('turnoPreg', this.$('#newinputturnoPreg').val()); 
     }, 
     'change #newinputturnoPregModo': function(){ 
       this.model.set('turnoPregModo', this.$('#newinputturnoPregModo').val()); 
     }, 
     'change #newinputmicroMesa': function(){ 
       this.model.set('microMesa', this.$('#newinputmicroMesa').val()); 
     }, 
     'change #newinputmicroPie': function(){ 
       this.model.set('microPie', this.$('#newinputmicroPie').val()); 
     }, 
     'change #newinputmicroInalambrico': function(){ 
       this.model.set('microInalambrico', this.$('#newinputmicroInalambrico').val()); 
     }, 
     'change #newinputmatProyectar': function(){ 
       this.model.set('matProyectar', this.$('#newinputmatProyectar').val()); 
     }, 
     'change #newinputdescProyeccion': function(){ 
       this.model.set('descProyeccion', this.$('#newinputdescProyeccion').val()); 
     }, 
     'change #newinputtradActo': function(){ 
       this.model.set('tradActo', this.$('#newinputtradActo').val()); 
     }, 
     'change #newinputidiomaActo': function(){ 
       this.model.set('idiomaActo', this.$('#newinputidiomaActo').val()); 
     }, 
     'change #newinputmodoActo': function(){ 
       this.model.set('modoActo', this.$('#newinputmodoActo').val()); 
     }, 
     'change #newinputtradPonente': function(){ 
       this.model.set('tradPonente', this.$('#newinputtradPonente').val()); 
     }, 
     'change #newinputidiomaPonente': function(){ 
       this.model.set('idiomaPonente', this.$('#newinputidiomaPonente').val()); 
     }, 
     'change #newinputmodoPonente': function(){ 
       this.model.set('modoPonente', this.$('#newinputmodoPonente').val()); 
     }, 
     'change #newinputcomentarios': function(){ 
       this.model.set('comentarios', this.$('#newinputcomentarios').val()); 
     }, 
     'change #newinputreservAsientos': function(){ 
       this.model.set('reservAsientos', this.$('#newinputreservAsientos').val()); 
     }, 
     'change #newinputdetReservAsientos': function(){ 
       this.model.set('detReservAsientos', this.$('#newinputdetReservAsientos').val()); 
     }, 
     'change #newinputincMediosTec': function(){ 
       this.model.set('incMediosTec', this.$('#newinputincMediosTec').val()); 
     }, 
     'change #newinputincSala': function(){ 
       this.model.set('incSala', this.$('#newinputincSala').val()); 
     }, 
     'change #newinputpuntComienzo': function(){ 
       this.model.set('puntComienzo', this.$('#newinputpuntComienzo').val()); 
     }, 
     'change #newinputpuntFin': function(){ 
       this.model.set('puntFin', this.$('#newinputpuntFin').val()); 
     }, 
     'change #newinputrespSala': function(){ 
       this.model.set('respSala', this.$('#newinputrespSala').val()); 
     }, 
     'change #newinputvalActo': function(){ 
       this.model.set('valActo', this.$('#newinputvalActo').val()); 
     }, 
     'change #newinputcomentFinal': function(){ 
       this.model.set('comentFinal', this.$('#newinputcomentFinal').val()); 
     }, 
     'change #newinputsala': function(){ 
       this.model.set('sala', this.$('#newinputsala').val()); 
     }, 
     'change #newinputdistMesa': function(){ 
       this.model.set('distMesa', this.$('#newinputdistMesa').val()); 
     }, 
     'change #newinputpatrocinador': function(){ 
       this.model.set('patrocinador', this.$('#newinputpatrocinador').val()); 
     }, 
     'change #newinputobsPatrocinador': function(){ 
       this.model.set('obsPatrocinador', this.$('#newinputobsPatrocinador').val()); 
     }, 
     'change #newinputazafata': function(){ 
       this.model.set('azafata', this.$('#newinputazafata').val()); 
     }, 
     'change #newinputotrasNecesidades': function(){ 
       this.model.set('otrasNecesidades', this.$('#newinputotrasNecesidades').val()); 
     }, 
     'change #newinputaforo': function(){ 
       this.model.set('aforo', this.$('#newinputaforo').val()); 
     }, 
     'change #newinputquedaronFuera': function(){ 
       this.model.set('quedaronFuera', this.$('#newinputquedaronFuera').val()); 
     }, 
     'change #newinputotrasValoraciones': function(){ 
       this.model.set('otrasValoraciones', this.$('#newinputotrasValoraciones').val()); 
     }, 
     'change #newinputtraductorActo': function(){ 
       this.model.set('traductorActo', this.$('#newinputtraductorActo').val()); 
     }, 
     'change #newinputtraductorPonente': function(){ 
       this.model.set('traductorPonente', this.$('#newinputtraductorPonente').val()); 
     }, 
     'change #newinputresponsableActo': function(){ 
       this.model.set('responsableActo', this.$('#newinputresponsableActo').val()); 
     }, 
     'click #btGuardar': function(){ 
       //if(this.selectedEmId != "0"){
         this.model.set('idActo', undefined); 
         //this.model.set('idEm', this.selectedEmId);
         this.collection.add(this.model); 
         $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
         this.model = new ActosEntity(); 

         //Reset desc fields
         this.$('#newinputpatrocinadordesc').val('').textinput('refresh'); 
         this.$('#newinputresponsableActodesc').val('').textinput('refresh'); 
         this.$('#newinputtraductorPonentedesc').val('').textinput('refresh'); 
         this.$('#newinputtraductorActodesc').val('').textinput('refresh'); 
         this.$('#newinputazafatadesc').val('').textinput('refresh');

         //this.model.set('idActo', this.collection.get(this.collection.length -1).get('idActo')+1); 
         this.render(); 
       //}else{
       //  this.checkEm();
       //}
     }, 
     'click #btCancelar': function(){ 
       this.model = new ActosEntity(); 
       //this.model.set('idActo', this.collection.get(this.collection.length -1).get('idActo')+1); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
       this.render(); 
     }, 
     'click #btnReturnHomeFromNew': function(){
       $("#popUpEmptyEm").popup("open"); 
       $(':mobile-pagecontainer').pagecontainer('change','#pgHome'); 
     },
     'click #newinputpatrocinadorbtn': function(){
        this.renderPersonasList();
        this.campoBuscador = 'patrocinador';
        $("#newpopUpPersonasList").popup("open");

     },
     'click #newinputresponsableActobtn': function(){
       this.renderPersonasList();
       this.campoBuscador = 'responsableacto';
       $("#newpopUpPersonasList").popup("open");
     },
     'click #newinputtraductorPonentebtn': function(){
       this.renderPersonasList();
       this.campoBuscador = 'traductorponente';
       $("#newpopUpPersonasList").popup("open");
     },
     'click #newinputtraductorActobtn': function(){
       this.renderPersonasList();
       this.campoBuscador = 'traductoracto';
       $("#newpopUpPersonasList").popup("open");
     },
     'click #newinputazafatabtn': function(){
       this.renderPersonasList();
       this.campoBuscador = 'azafata';
       $("#newpopUpPersonasList").popup("open");
     },
     'click .newlvPersonasItem': function(e){
       $("#newpopUpPersonasList").popup("close");
       var pId = $(e.target).attr('id');
       var pEnt = this.GetPersonaById(pId);
       
       if(pEnt != null){
         var pDes = pEnt.get('nombre')+' '+pEnt.get('apellidos');
         if(this.campoBuscador == 'patrocinador'){
          this.$('#newinputpatrocinador').val(pId).textinput('refresh'); 
          this.model.set('patrocinador', pId); 
          this.$('#newinputpatrocinadordesc').val(pDes).textinput('refresh'); 
         }else if(this.campoBuscador == 'responsableacto'){
          this.$('#newinputresponsableActo').val(pId).textinput('refresh'); 
          this.model.set('responsableActo', pId); 
          this.$('#newinputresponsableActodesc').val(pDes).textinput('refresh'); 
         }else if(this.campoBuscador == 'traductorponente'){
          this.$('#newinputtraductorPonente').val(pId).textinput('refresh'); 
          this.model.set('traductorPonente', pId); 
          this.$('#newinputtraductorPonentedesc').val(pDes).textinput('refresh'); 
         }else if(this.campoBuscador == 'traductoracto'){
          this.$('#newinputtraductorActo').val(pId).textinput('refresh'); 
          this.model.set('traductorActo', pId); 
          this.$('#newinputtraductorActodesc').val(pDes).textinput('refresh'); 
         }else if(this.campoBuscador == 'azafata'){
          this.$('#newinputazafata').val(pId).textinput('refresh'); 
          this.model.set('azafata', pId); 
          this.$('#newinputazafatadesc').val(pDes).textinput('refresh'); 
         }
       }
     },
     'click #newinputsalabtn': function(){
      this.renderSalasList();
      $("#newpopUpSalasList").popup("open");
    },
    'click .newlvSalasItem': function(e){
      $("#newpopUpSalasList").popup("close");
      var pId = $(e.target).attr('id');
      var pEnt = this.GetSalaById(pId);
      
      if(pEnt != null){
        var pDes = pEnt.get('descripcion');
         this.$('#newinputsala').val(pId).textinput('refresh'); 
         this.model.set('sala', pId); 
         this.$('#newinputsaladesc').val(pDes).textinput('refresh'); 
        
      }
    },
     'load': function(){ 
         this.render(); 
     } 
   } 
 }); 
 