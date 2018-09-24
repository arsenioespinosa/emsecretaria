var PlaningActosNewView = Backbone.View.extend({ 
   initialize: function(){ 
       //this.render(); 
       this.enableRefresh = false; 
       this.model = new PlaningActosEntity(); 
       //this.model.set('idPlaning', this.collection.get(this.collection.length -1).get('idPlaning')+1); 
       this.render(); 
   }, 
   render: function(){ 
    var title = window.localStorage.getItem('selectedEmId') +" > "+ window.localStorage.getItem('selectedActoDesc');
     this.$el.find('#lblIdEmNew').text(title);
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
    renderSalasList: function(){
    this.$el.find('#newlvSalas').empty();
    if(this.salasList != undefined){
      for (var i = 0; i < this.salasList.length; i++){
          var m = this.salasList.at(i);
          var str = '<li><a class="newlvSalasItem" id="'+m.get('idSala')+'" href="#">'+m.get('descripcion')+'</a></li>';
          this.$el.find('#newlvSalas').append(str);
      }
      
    }
    this.$el.find('#newlvSalas').listview();
   },
   SetSalasList: function(salasList){
    this.salasList = salasList;
    //this.personasList.initialize();
    this.renderSalasList();
   },
   GetSalaById: function(searchId){
     var searchIndex = 0;
     while(searchIndex < this.salasList.length){
       if(this.salasList.at(searchIndex).get('idSala')==searchId)
       {
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
       this.model.set('idActo', window.localStorage.getItem('selectedActoId'));
       if(this.model.get('desde') === undefined){
        this.model.set('desde', '');
       }
       if(this.model.get('hasta') === undefined){
        this.model.set('hasta','');
       }
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
 