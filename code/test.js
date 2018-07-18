var readline=require('readline'); 
var request=require('request'); 
var rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
}); 
var rootPrompt = 'em_sec'; 
var profesionesBranch = 'profesiones'; 
var salasBranch = 'salas'; 
var timing_actosBranch = 'timing_actos'; 
var planing_actosBranch = 'planing_actos'; 
var em_actos_personasBranch = 'em_actos_personas'; 
var em_actos_voluntariosBranch = 'em_actos_voluntarios'; 
var agendaBranch = 'agenda'; 
var tipo_relacionBranch = 'tipo_relacion'; 
var trasladosBranch = 'traslados'; 
var actosBranch = 'actos'; 
var datos_emBranch = 'datos_em'; 
var personasBranch = 'personas'; 
var isprofesiones = false; 
var issalas = false; 
var istiming_actos = false; 
var isplaning_actos = false; 
var isem_actos_personas = false; 
var isem_actos_voluntarios = false; 
var isagenda = false; 
var istipo_relacion = false; 
var istraslados = false; 
var isactos = false; 
var isdatos_em = false; 
var ispersonas = false; 
var profesionesLastId = 0; 
var profesionesLastIdDeleted = 0; 
var profesionesList = [];
var salasLastId = 0; 
var salasLastIdDeleted = 0; 
var salasList = [];
var timing_actosLastId = 0; 
var timing_actosLastIdDeleted = 0; 
var timing_actosList = [];
var planing_actosLastId = 0; 
var planing_actosLastIdDeleted = 0; 
var planing_actosList = [];
var em_actos_personasLastId = 0; 
var em_actos_personasLastIdDeleted = 0; 
var em_actos_personasList = [];
var em_actos_voluntariosLastId = 0; 
var em_actos_voluntariosLastIdDeleted = 0; 
var em_actos_voluntariosList = [];
var agendaLastId = 0; 
var agendaLastIdDeleted = 0; 
var agendaList = [];
var tipo_relacionLastId = 0; 
var tipo_relacionLastIdDeleted = 0; 
var tipo_relacionList = [];
var trasladosLastId = 0; 
var trasladosLastIdDeleted = 0; 
var trasladosList = [];
var actosLastId = 0; 
var actosLastIdDeleted = 0; 
var actosList = [];
var datos_emLastId = 0; 
var datos_emLastIdDeleted = 0; 
var datos_emList = [];
var personasLastId = 0; 
var personasLastIdDeleted = 0; 
var personasList = [];
rl.setPrompt(rootPrompt+'>'); 
rl.prompt(); 
rl.on('line', function(line){ 
  if(isprofesiones){ 
    profesionesMgmt(line); 
  }else if(issalas){ 
    salasMgmt(line); 
  }else if(istiming_actos){ 
    timing_actosMgmt(line); 
  }else if(isplaning_actos){ 
    planing_actosMgmt(line); 
  }else if(isem_actos_personas){ 
    em_actos_personasMgmt(line); 
  }else if(isem_actos_voluntarios){ 
    em_actos_voluntariosMgmt(line); 
  }else if(isagenda){ 
    agendaMgmt(line); 
  }else if(istipo_relacion){ 
    tipo_relacionMgmt(line); 
  }else if(istraslados){ 
    trasladosMgmt(line); 
  }else if(isactos){ 
    actosMgmt(line); 
  }else if(isdatos_em){ 
    datos_emMgmt(line); 
  }else if(ispersonas){ 
    personasMgmt(line); 
  }else{ 
    generalMgmt(line); 
  } 
}); 
function generalMgmt(line){ 
  var args = line.split(' '); 
  switch(args[0]){ 
    case 'exit': 
      console.log('Bye'); 
      rl.close(); 
      process.exit(); 
      break; 
    case 'help': 
      console.log('Comandos disponibles:'); 
      console.log('  - help: mostrar este mensaje'); 
      console.log('  - profesiones: administrar profesiones'); 
      console.log('  - salas: administrar salas'); 
      console.log('  - timing_actos: administrar timing_actos'); 
      console.log('  - planing_actos: administrar planing_actos'); 
      console.log('  - em_actos_personas: administrar em_actos_personas'); 
      console.log('  - em_actos_voluntarios: administrar em_actos_voluntarios'); 
      console.log('  - agenda: administrar agenda'); 
      console.log('  - tipo_relacion: administrar tipo_relacion'); 
      console.log('  - traslados: administrar traslados'); 
      console.log('  - actos: administrar actos'); 
      console.log('  - datos_em: administrar datos_em'); 
      console.log('  - personas: administrar personas'); 
      console.log('  - exit: salir del programa'); 
      rl.prompt(); 
      break; 
    case 'profesiones': 
      rl.setPrompt(rootPrompt+'/'+profesionesBranch+'>') 
      rl.prompt(); 
      SetIsprofesiones(true); 
      break; 
    case 'salas': 
      rl.setPrompt(rootPrompt+'/'+salasBranch+'>') 
      rl.prompt(); 
      SetIssalas(true); 
      break; 
    case 'timing_actos': 
      rl.setPrompt(rootPrompt+'/'+timing_actosBranch+'>') 
      rl.prompt(); 
      SetIstiming_actos(true); 
      break; 
    case 'planing_actos': 
      rl.setPrompt(rootPrompt+'/'+planing_actosBranch+'>') 
      rl.prompt(); 
      SetIsplaning_actos(true); 
      break; 
    case 'em_actos_personas': 
      rl.setPrompt(rootPrompt+'/'+em_actos_personasBranch+'>') 
      rl.prompt(); 
      SetIsem_actos_personas(true); 
      break; 
    case 'em_actos_voluntarios': 
      rl.setPrompt(rootPrompt+'/'+em_actos_voluntariosBranch+'>') 
      rl.prompt(); 
      SetIsem_actos_voluntarios(true); 
      break; 
    case 'agenda': 
      rl.setPrompt(rootPrompt+'/'+agendaBranch+'>') 
      rl.prompt(); 
      SetIsagenda(true); 
      break; 
    case 'tipo_relacion': 
      rl.setPrompt(rootPrompt+'/'+tipo_relacionBranch+'>') 
      rl.prompt(); 
      SetIstipo_relacion(true); 
      break; 
    case 'traslados': 
      rl.setPrompt(rootPrompt+'/'+trasladosBranch+'>') 
      rl.prompt(); 
      SetIstraslados(true); 
      break; 
    case 'actos': 
      rl.setPrompt(rootPrompt+'/'+actosBranch+'>') 
      rl.prompt(); 
      SetIsactos(true); 
      break; 
    case 'datos_em': 
      rl.setPrompt(rootPrompt+'/'+datos_emBranch+'>') 
      rl.prompt(); 
      SetIsdatos_em(true); 
      break; 
    case 'personas': 
      rl.setPrompt(rootPrompt+'/'+personasBranch+'>') 
      rl.prompt(); 
      SetIspersonas(true); 
      break; 
    default: 
      rl.prompt(); 
  } 
} 
function profesionesMgmt(line){ 
  var args = line.split(' '); 
  switch(args[0]){ 
    case 'exit': 
      console.log('Bye'); 
      rl.close(); 
      process.exit(); 
      break; 
    case 'back': 
      console.log('Commando back'); 
      rl.setPrompt(rootPrompt+'>'); 
      rl.prompt(); 
      SetIsprofesiones(false); 
      break; 
    case 'help': 
      console.log('Comandos profesiones:'); 
      console.log('  - help: mostrar este mensaje'); 
      console.log('  - back: volver al menu'); 
      console.log('  - list: listar todas las profesiones'); 
      console.log('  - add: añadir'); 
      console.log('  - del: borrar'); 
      console.log('  - edit: editar'); 
      console.log('  - exit: salir del programa'); 
      rl.prompt(); 
      break; 
    case 'list': 
      console.log('Commando list'); 
      var url = 'http://localhost:8080/emsec/profesiones'; 
      if(args.length > 1) url += '/' + args[1]; 
      console.log('GET '+url); 
      var opts = { 
        url: url, 
        json: true, 
        method: 'GET' 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: '+ res.statusCode+' ' +error); 
        }else{ 
          console.log(body); 
          profesionesList = body; 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'add': 
      console.log('Commando add'); 
      var newItem = new Object(); 
      newItem.idProfesion = profesionesLastId++;
      newItem.lastModificationUser = 'value:1';
      newItem.creationUser = 'value:3';
      newItem.descripcion = 'value:5';
      var opts = { 
        url: 'http://localhost:8080/emsec/profesiones', 
        method: 'POST', 
        json: true, 
        body: newItem 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: ' + error); 
        }else{ 
          console.log('Add success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'del': 
      console.log('Commando del'); 
      var opts = { 
        url: 'http://localhost:8080/emsec/profesiones/'+profesionesLastIdDeleted++, 
        method: 'DELETE' 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Error: '+error); 
        }else{ 
          console.log('Delete success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    case 'edit': 
      console.log('Commando edit'); 
      if(args.length < 2){ 
        console.log('Falta el parámetro id para saber que entidad editar'); 
        rl.prompt(); 
        break; 
      } 
      var index = 0;
      var item = undefined;
      var idValue = undefined;
      while(index < profesionesList.length){ 
        if(profesionesList[index].idProfesion== args[1]){
          item = profesionesList[index]; 
          item = profesionesList[index]; 
          index = profesionesList.length; 
        }
        index++;
      }
      if(item == undefined){
        console.log('No se encontró el registro a editar');
        rl.prompt(); 
        break; 
      }
      item.lastModificationUser = 'edited value: 1'; 
      item.creationUser = 'edited value: 3'; 
      item.descripcion = 'edited value: 5'; 
      
      var opts = { 
        url: 'http://localhost:8080/emsec/profesiones/' + item.idProfesion, 
        method: 'PUT', 
        json: true, 
        body: item 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Edit Error: '+error); 
        }else{ 
          console.log('Edit success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    default: 
      rl.prompt(); 
  } 
} 
function salasMgmt(line){ 
  var args = line.split(' '); 
  switch(args[0]){ 
    case 'exit': 
      console.log('Bye'); 
      rl.close(); 
      process.exit(); 
      break; 
    case 'back': 
      console.log('Commando back'); 
      rl.setPrompt(rootPrompt+'>'); 
      rl.prompt(); 
      SetIssalas(false); 
      break; 
    case 'help': 
      console.log('Comandos salas:'); 
      console.log('  - help: mostrar este mensaje'); 
      console.log('  - back: volver al menu'); 
      console.log('  - list: listar todas las salas'); 
      console.log('  - add: añadir'); 
      console.log('  - del: borrar'); 
      console.log('  - edit: editar'); 
      console.log('  - exit: salir del programa'); 
      rl.prompt(); 
      break; 
    case 'list': 
      console.log('Commando list'); 
      var url = 'http://localhost:8080/emsec/salas'; 
      if(args.length > 1) url += '/' + args[1]; 
      console.log('GET '+url); 
      var opts = { 
        url: url, 
        json: true, 
        method: 'GET' 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: '+ res.statusCode+' ' +error); 
        }else{ 
          console.log(body); 
          salasList = body; 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'add': 
      console.log('Commando add'); 
      var newItem = new Object(); 
      newItem.idSala = salasLastId++;
      newItem.lastModificationUser = 'value:1';
      newItem.creationUser = 'value:3';
      newItem.descripcion = 'value:5';
      var opts = { 
        url: 'http://localhost:8080/emsec/salas', 
        method: 'POST', 
        json: true, 
        body: newItem 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: ' + error); 
        }else{ 
          console.log('Add success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'del': 
      console.log('Commando del'); 
      var opts = { 
        url: 'http://localhost:8080/emsec/salas/'+salasLastIdDeleted++, 
        method: 'DELETE' 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Error: '+error); 
        }else{ 
          console.log('Delete success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    case 'edit': 
      console.log('Commando edit'); 
      if(args.length < 2){ 
        console.log('Falta el parámetro id para saber que entidad editar'); 
        rl.prompt(); 
        break; 
      } 
      var index = 0;
      var item = undefined;
      var idValue = undefined;
      while(index < salasList.length){ 
        if(salasList[index].idSala== args[1]){
          item = salasList[index]; 
          item = salasList[index]; 
          index = salasList.length; 
        }
        index++;
      }
      if(item == undefined){
        console.log('No se encontró el registro a editar');
        rl.prompt(); 
        break; 
      }
      item.lastModificationUser = 'edited value: 1'; 
      item.creationUser = 'edited value: 3'; 
      item.descripcion = 'edited value: 5'; 
      
      var opts = { 
        url: 'http://localhost:8080/emsec/salas/' + item.idSala, 
        method: 'PUT', 
        json: true, 
        body: item 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Edit Error: '+error); 
        }else{ 
          console.log('Edit success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    default: 
      rl.prompt(); 
  } 
} 
function timing_actosMgmt(line){ 
  var args = line.split(' '); 
  switch(args[0]){ 
    case 'exit': 
      console.log('Bye'); 
      rl.close(); 
      process.exit(); 
      break; 
    case 'back': 
      console.log('Commando back'); 
      rl.setPrompt(rootPrompt+'>'); 
      rl.prompt(); 
      SetIstiming_actos(false); 
      break; 
    case 'help': 
      console.log('Comandos timing_actos:'); 
      console.log('  - help: mostrar este mensaje'); 
      console.log('  - back: volver al menu'); 
      console.log('  - list: listar todas las timing_actos'); 
      console.log('  - add: añadir'); 
      console.log('  - del: borrar'); 
      console.log('  - edit: editar'); 
      console.log('  - exit: salir del programa'); 
      rl.prompt(); 
      break; 
    case 'list': 
      console.log('Commando list'); 
      var url = 'http://localhost:8080/emsec/timing_actos'; 
      if(args.length > 1) url += '/' + args[1]; 
      console.log('GET '+url); 
      var opts = { 
        url: url, 
        json: true, 
        method: 'GET' 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: '+ res.statusCode+' ' +error); 
        }else{ 
          console.log(body); 
          timing_actosList = body; 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'add': 
      console.log('Commando add'); 
      var newItem = new Object(); 
      newItem.idTiming = timing_actosLastId++;
      newItem.lastModificationUser = 'value:1';
      newItem.creationUser = 'value:3';
      newItem.idActo = 5;
      newItem.evento = 'value:6';
      var opts = { 
        url: 'http://localhost:8080/emsec/timing_actos', 
        method: 'POST', 
        json: true, 
        body: newItem 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: ' + error); 
        }else{ 
          console.log('Add success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'del': 
      console.log('Commando del'); 
      var opts = { 
        url: 'http://localhost:8080/emsec/timing_actos/'+timing_actosLastIdDeleted++, 
        method: 'DELETE' 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Error: '+error); 
        }else{ 
          console.log('Delete success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    case 'edit': 
      console.log('Commando edit'); 
      if(args.length < 2){ 
        console.log('Falta el parámetro id para saber que entidad editar'); 
        rl.prompt(); 
        break; 
      } 
      var index = 0;
      var item = undefined;
      var idValue = undefined;
      while(index < timing_actosList.length){ 
        if(timing_actosList[index].idTiming== args[1]){
          item = timing_actosList[index]; 
          item = timing_actosList[index]; 
          index = timing_actosList.length; 
        }
        index++;
      }
      if(item == undefined){
        console.log('No se encontró el registro a editar');
        rl.prompt(); 
        break; 
      }
      item.lastModificationUser = 'edited value: 1'; 
      item.creationUser = 'edited value: 3'; 
      item.idActo = 1005; 
      item.evento = 'edited value: 6'; 
      
      var opts = { 
        url: 'http://localhost:8080/emsec/timing_actos/' + item.idTiming, 
        method: 'PUT', 
        json: true, 
        body: item 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Edit Error: '+error); 
        }else{ 
          console.log('Edit success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    default: 
      rl.prompt(); 
  } 
} 
function planing_actosMgmt(line){ 
  var args = line.split(' '); 
  switch(args[0]){ 
    case 'exit': 
      console.log('Bye'); 
      rl.close(); 
      process.exit(); 
      break; 
    case 'back': 
      console.log('Commando back'); 
      rl.setPrompt(rootPrompt+'>'); 
      rl.prompt(); 
      SetIsplaning_actos(false); 
      break; 
    case 'help': 
      console.log('Comandos planing_actos:'); 
      console.log('  - help: mostrar este mensaje'); 
      console.log('  - back: volver al menu'); 
      console.log('  - list: listar todas las planing_actos'); 
      console.log('  - add: añadir'); 
      console.log('  - del: borrar'); 
      console.log('  - edit: editar'); 
      console.log('  - exit: salir del programa'); 
      rl.prompt(); 
      break; 
    case 'list': 
      console.log('Commando list'); 
      var url = 'http://localhost:8080/emsec/planing_actos'; 
      if(args.length > 1) url += '/' + args[1]; 
      console.log('GET '+url); 
      var opts = { 
        url: url, 
        json: true, 
        method: 'GET' 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: '+ res.statusCode+' ' +error); 
        }else{ 
          console.log(body); 
          planing_actosList = body; 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'add': 
      console.log('Commando add'); 
      var newItem = new Object(); 
      newItem.idPlaning = planing_actosLastId++;
      newItem.lastModificationUser = 'value:1';
      newItem.creationUser = 'value:3';
      newItem.idActo = 5;
      newItem.evento = 'value:6';
      newItem.sala = 10;
      var opts = { 
        url: 'http://localhost:8080/emsec/planing_actos', 
        method: 'POST', 
        json: true, 
        body: newItem 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: ' + error); 
        }else{ 
          console.log('Add success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'del': 
      console.log('Commando del'); 
      var opts = { 
        url: 'http://localhost:8080/emsec/planing_actos/'+planing_actosLastIdDeleted++, 
        method: 'DELETE' 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Error: '+error); 
        }else{ 
          console.log('Delete success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    case 'edit': 
      console.log('Commando edit'); 
      if(args.length < 2){ 
        console.log('Falta el parámetro id para saber que entidad editar'); 
        rl.prompt(); 
        break; 
      } 
      var index = 0;
      var item = undefined;
      var idValue = undefined;
      while(index < planing_actosList.length){ 
        if(planing_actosList[index].idPlaning== args[1]){
          item = planing_actosList[index]; 
          item = planing_actosList[index]; 
          index = planing_actosList.length; 
        }
        index++;
      }
      if(item == undefined){
        console.log('No se encontró el registro a editar');
        rl.prompt(); 
        break; 
      }
      item.lastModificationUser = 'edited value: 1'; 
      item.creationUser = 'edited value: 3'; 
      item.idActo = 1005; 
      item.evento = 'edited value: 6'; 
      item.sala = 10010; 
      
      var opts = { 
        url: 'http://localhost:8080/emsec/planing_actos/' + item.idPlaning, 
        method: 'PUT', 
        json: true, 
        body: item 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Edit Error: '+error); 
        }else{ 
          console.log('Edit success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    default: 
      rl.prompt(); 
  } 
} 
function em_actos_personasMgmt(line){ 
  var args = line.split(' '); 
  switch(args[0]){ 
    case 'exit': 
      console.log('Bye'); 
      rl.close(); 
      process.exit(); 
      break; 
    case 'back': 
      console.log('Commando back'); 
      rl.setPrompt(rootPrompt+'>'); 
      rl.prompt(); 
      SetIsem_actos_personas(false); 
      break; 
    case 'help': 
      console.log('Comandos em_actos_personas:'); 
      console.log('  - help: mostrar este mensaje'); 
      console.log('  - back: volver al menu'); 
      console.log('  - list: listar todas las em_actos_personas'); 
      console.log('  - add: añadir'); 
      console.log('  - del: borrar'); 
      console.log('  - edit: editar'); 
      console.log('  - exit: salir del programa'); 
      rl.prompt(); 
      break; 
    case 'list': 
      console.log('Commando list'); 
      var url = 'http://localhost:8080/emsec/em_actos_personas'; 
      if(args.length > 1) url += '/' + args[1]; 
      console.log('GET '+url); 
      var opts = { 
        url: url, 
        json: true, 
        method: 'GET' 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: '+ res.statusCode+' ' +error); 
        }else{ 
          console.log(body); 
          em_actos_personasList = body; 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'add': 
      console.log('Commando add'); 
      var newItem = new Object(); 
      newItem.idEm = em_actos_personasLastId++;
      newItem.lastModificationUser = 'value:1';
      newItem.creationUser = 'value:3';
      newItem.idActo = 5;
      newItem.idPersona = 6;
      newItem.idTipoRelacion = 7;
      var opts = { 
        url: 'http://localhost:8080/emsec/em_actos_personas', 
        method: 'POST', 
        json: true, 
        body: newItem 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: ' + error); 
        }else{ 
          console.log('Add success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'del': 
      console.log('Commando del'); 
      var opts = { 
        url: 'http://localhost:8080/emsec/em_actos_personas/'+em_actos_personasLastIdDeleted++, 
        method: 'DELETE' 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Error: '+error); 
        }else{ 
          console.log('Delete success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    case 'edit': 
      console.log('Commando edit'); 
      if(args.length < 2){ 
        console.log('Falta el parámetro id para saber que entidad editar'); 
        rl.prompt(); 
        break; 
      } 
      var index = 0;
      var item = undefined;
      var idValue = undefined;
      while(index < em_actos_personasList.length){ 
        if(em_actos_personasList[index].idEm== args[1]){
          item = em_actos_personasList[index]; 
          item = em_actos_personasList[index]; 
          index = em_actos_personasList.length; 
        }
        index++;
      }
      if(item == undefined){
        console.log('No se encontró el registro a editar');
        rl.prompt(); 
        break; 
      }
      item.lastModificationUser = 'edited value: 1'; 
      item.creationUser = 'edited value: 3'; 
      item.idActo = 1005; 
      item.idPersona = 1006; 
      item.idTipoRelacion = 1007; 
      
      var opts = { 
        url: 'http://localhost:8080/emsec/em_actos_personas/' + item.idEm, 
        method: 'PUT', 
        json: true, 
        body: item 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Edit Error: '+error); 
        }else{ 
          console.log('Edit success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    default: 
      rl.prompt(); 
  } 
} 
function em_actos_voluntariosMgmt(line){ 
  var args = line.split(' '); 
  switch(args[0]){ 
    case 'exit': 
      console.log('Bye'); 
      rl.close(); 
      process.exit(); 
      break; 
    case 'back': 
      console.log('Commando back'); 
      rl.setPrompt(rootPrompt+'>'); 
      rl.prompt(); 
      SetIsem_actos_voluntarios(false); 
      break; 
    case 'help': 
      console.log('Comandos em_actos_voluntarios:'); 
      console.log('  - help: mostrar este mensaje'); 
      console.log('  - back: volver al menu'); 
      console.log('  - list: listar todas las em_actos_voluntarios'); 
      console.log('  - add: añadir'); 
      console.log('  - del: borrar'); 
      console.log('  - edit: editar'); 
      console.log('  - exit: salir del programa'); 
      rl.prompt(); 
      break; 
    case 'list': 
      console.log('Commando list'); 
      var url = 'http://localhost:8080/emsec/em_actos_voluntarios'; 
      if(args.length > 1) url += '/' + args[1]; 
      console.log('GET '+url); 
      var opts = { 
        url: url, 
        json: true, 
        method: 'GET' 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: '+ res.statusCode+' ' +error); 
        }else{ 
          console.log(body); 
          em_actos_voluntariosList = body; 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'add': 
      console.log('Commando add'); 
      var newItem = new Object(); 
      newItem.idEm = em_actos_voluntariosLastId++;
      newItem.lastModificationUser = 'value:1';
      newItem.creationUser = 'value:3';
      newItem.idActo = 5;
      newItem.idPersona = 6;
      newItem.idTipoRelacion = 7;
      newItem.observaciones = 'value:8';
      var opts = { 
        url: 'http://localhost:8080/emsec/em_actos_voluntarios', 
        method: 'POST', 
        json: true, 
        body: newItem 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: ' + error); 
        }else{ 
          console.log('Add success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'del': 
      console.log('Commando del'); 
      var opts = { 
        url: 'http://localhost:8080/emsec/em_actos_voluntarios/'+em_actos_voluntariosLastIdDeleted++, 
        method: 'DELETE' 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Error: '+error); 
        }else{ 
          console.log('Delete success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    case 'edit': 
      console.log('Commando edit'); 
      if(args.length < 2){ 
        console.log('Falta el parámetro id para saber que entidad editar'); 
        rl.prompt(); 
        break; 
      } 
      var index = 0;
      var item = undefined;
      var idValue = undefined;
      while(index < em_actos_voluntariosList.length){ 
        if(em_actos_voluntariosList[index].idEm== args[1]){
          item = em_actos_voluntariosList[index]; 
          item = em_actos_voluntariosList[index]; 
          index = em_actos_voluntariosList.length; 
        }
        index++;
      }
      if(item == undefined){
        console.log('No se encontró el registro a editar');
        rl.prompt(); 
        break; 
      }
      item.lastModificationUser = 'edited value: 1'; 
      item.creationUser = 'edited value: 3'; 
      item.idActo = 1005; 
      item.idPersona = 1006; 
      item.idTipoRelacion = 1007; 
      item.observaciones = 'edited value: 8'; 
      
      var opts = { 
        url: 'http://localhost:8080/emsec/em_actos_voluntarios/' + item.idEm, 
        method: 'PUT', 
        json: true, 
        body: item 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Edit Error: '+error); 
        }else{ 
          console.log('Edit success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    default: 
      rl.prompt(); 
  } 
} 
function agendaMgmt(line){ 
  var args = line.split(' '); 
  switch(args[0]){ 
    case 'exit': 
      console.log('Bye'); 
      rl.close(); 
      process.exit(); 
      break; 
    case 'back': 
      console.log('Commando back'); 
      rl.setPrompt(rootPrompt+'>'); 
      rl.prompt(); 
      SetIsagenda(false); 
      break; 
    case 'help': 
      console.log('Comandos agenda:'); 
      console.log('  - help: mostrar este mensaje'); 
      console.log('  - back: volver al menu'); 
      console.log('  - list: listar todas las agenda'); 
      console.log('  - add: añadir'); 
      console.log('  - del: borrar'); 
      console.log('  - edit: editar'); 
      console.log('  - exit: salir del programa'); 
      rl.prompt(); 
      break; 
    case 'list': 
      console.log('Commando list'); 
      var url = 'http://localhost:8080/emsec/agenda'; 
      if(args.length > 1) url += '/' + args[1]; 
      console.log('GET '+url); 
      var opts = { 
        url: url, 
        json: true, 
        method: 'GET' 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: '+ res.statusCode+' ' +error); 
        }else{ 
          console.log(body); 
          agendaList = body; 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'add': 
      console.log('Commando add'); 
      var newItem = new Object(); 
      newItem.idAgenda = agendaLastId++;
      newItem.lastModificationUser = 'value:1';
      newItem.creationUser = 'value:3';
      newItem.idEm = 5;
      newItem.idActo = 6;
      newItem.idPersona = 7;
      newItem.descripcion = 'value:8';
      var opts = { 
        url: 'http://localhost:8080/emsec/agenda', 
        method: 'POST', 
        json: true, 
        body: newItem 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: ' + error); 
        }else{ 
          console.log('Add success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'del': 
      console.log('Commando del'); 
      var opts = { 
        url: 'http://localhost:8080/emsec/agenda/'+agendaLastIdDeleted++, 
        method: 'DELETE' 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Error: '+error); 
        }else{ 
          console.log('Delete success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    case 'edit': 
      console.log('Commando edit'); 
      if(args.length < 2){ 
        console.log('Falta el parámetro id para saber que entidad editar'); 
        rl.prompt(); 
        break; 
      } 
      var index = 0;
      var item = undefined;
      var idValue = undefined;
      while(index < agendaList.length){ 
        if(agendaList[index].idAgenda== args[1]){
          item = agendaList[index]; 
          item = agendaList[index]; 
          index = agendaList.length; 
        }
        index++;
      }
      if(item == undefined){
        console.log('No se encontró el registro a editar');
        rl.prompt(); 
        break; 
      }
      item.lastModificationUser = 'edited value: 1'; 
      item.creationUser = 'edited value: 3'; 
      item.idEm = 1005; 
      item.idActo = 1006; 
      item.idPersona = 1007; 
      item.descripcion = 'edited value: 8'; 
      
      var opts = { 
        url: 'http://localhost:8080/emsec/agenda/' + item.idAgenda, 
        method: 'PUT', 
        json: true, 
        body: item 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Edit Error: '+error); 
        }else{ 
          console.log('Edit success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    default: 
      rl.prompt(); 
  } 
} 
function tipo_relacionMgmt(line){ 
  var args = line.split(' '); 
  switch(args[0]){ 
    case 'exit': 
      console.log('Bye'); 
      rl.close(); 
      process.exit(); 
      break; 
    case 'back': 
      console.log('Commando back'); 
      rl.setPrompt(rootPrompt+'>'); 
      rl.prompt(); 
      SetIstipo_relacion(false); 
      break; 
    case 'help': 
      console.log('Comandos tipo_relacion:'); 
      console.log('  - help: mostrar este mensaje'); 
      console.log('  - back: volver al menu'); 
      console.log('  - list: listar todas las tipo_relacion'); 
      console.log('  - add: añadir'); 
      console.log('  - del: borrar'); 
      console.log('  - edit: editar'); 
      console.log('  - exit: salir del programa'); 
      rl.prompt(); 
      break; 
    case 'list': 
      console.log('Commando list'); 
      var url = 'http://localhost:8080/emsec/tipo_relacion'; 
      if(args.length > 1) url += '/' + args[1]; 
      console.log('GET '+url); 
      var opts = { 
        url: url, 
        json: true, 
        method: 'GET' 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: '+ res.statusCode+' ' +error); 
        }else{ 
          console.log(body); 
          tipo_relacionList = body; 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'add': 
      console.log('Commando add'); 
      var newItem = new Object(); 
      newItem.idRelacion = tipo_relacionLastId++;
      newItem.lastModificationUser = 'value:1';
      newItem.creationUser = 'value:3';
      newItem.descripcion = 'value:5';
      newItem.observaciones = 'value:6';
      var opts = { 
        url: 'http://localhost:8080/emsec/tipo_relacion', 
        method: 'POST', 
        json: true, 
        body: newItem 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: ' + error); 
        }else{ 
          console.log('Add success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'del': 
      console.log('Commando del'); 
      var opts = { 
        url: 'http://localhost:8080/emsec/tipo_relacion/'+tipo_relacionLastIdDeleted++, 
        method: 'DELETE' 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Error: '+error); 
        }else{ 
          console.log('Delete success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    case 'edit': 
      console.log('Commando edit'); 
      if(args.length < 2){ 
        console.log('Falta el parámetro id para saber que entidad editar'); 
        rl.prompt(); 
        break; 
      } 
      var index = 0;
      var item = undefined;
      var idValue = undefined;
      while(index < tipo_relacionList.length){ 
        if(tipo_relacionList[index].idRelacion== args[1]){
          item = tipo_relacionList[index]; 
          item = tipo_relacionList[index]; 
          index = tipo_relacionList.length; 
        }
        index++;
      }
      if(item == undefined){
        console.log('No se encontró el registro a editar');
        rl.prompt(); 
        break; 
      }
      item.lastModificationUser = 'edited value: 1'; 
      item.creationUser = 'edited value: 3'; 
      item.descripcion = 'edited value: 5'; 
      item.observaciones = 'edited value: 6'; 
      
      var opts = { 
        url: 'http://localhost:8080/emsec/tipo_relacion/' + item.idRelacion, 
        method: 'PUT', 
        json: true, 
        body: item 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Edit Error: '+error); 
        }else{ 
          console.log('Edit success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    default: 
      rl.prompt(); 
  } 
} 
function trasladosMgmt(line){ 
  var args = line.split(' '); 
  switch(args[0]){ 
    case 'exit': 
      console.log('Bye'); 
      rl.close(); 
      process.exit(); 
      break; 
    case 'back': 
      console.log('Commando back'); 
      rl.setPrompt(rootPrompt+'>'); 
      rl.prompt(); 
      SetIstraslados(false); 
      break; 
    case 'help': 
      console.log('Comandos traslados:'); 
      console.log('  - help: mostrar este mensaje'); 
      console.log('  - back: volver al menu'); 
      console.log('  - list: listar todas las traslados'); 
      console.log('  - add: añadir'); 
      console.log('  - del: borrar'); 
      console.log('  - edit: editar'); 
      console.log('  - exit: salir del programa'); 
      rl.prompt(); 
      break; 
    case 'list': 
      console.log('Commando list'); 
      var url = 'http://localhost:8080/emsec/traslados'; 
      if(args.length > 1) url += '/' + args[1]; 
      console.log('GET '+url); 
      var opts = { 
        url: url, 
        json: true, 
        method: 'GET' 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: '+ res.statusCode+' ' +error); 
        }else{ 
          console.log(body); 
          trasladosList = body; 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'add': 
      console.log('Commando add'); 
      var newItem = new Object(); 
      newItem.idTraslado = trasladosLastId++;
      newItem.lastModificationUser = 'value:1';
      newItem.creationUser = 'value:3';
      newItem.idEm = 5;
      newItem.idActo = 6;
      newItem.idPersona = 7;
      newItem.chofer = 9;
      newItem.azafata = 10;
      newItem.recogida = 'value:12';
      newItem.destino = 'value:13';
      newItem.acompanantes = 'value:15';
      newItem.observaciones = 'value:16';
      var opts = { 
        url: 'http://localhost:8080/emsec/traslados', 
        method: 'POST', 
        json: true, 
        body: newItem 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: ' + error); 
        }else{ 
          console.log('Add success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'del': 
      console.log('Commando del'); 
      var opts = { 
        url: 'http://localhost:8080/emsec/traslados/'+trasladosLastIdDeleted++, 
        method: 'DELETE' 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Error: '+error); 
        }else{ 
          console.log('Delete success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    case 'edit': 
      console.log('Commando edit'); 
      if(args.length < 2){ 
        console.log('Falta el parámetro id para saber que entidad editar'); 
        rl.prompt(); 
        break; 
      } 
      var index = 0;
      var item = undefined;
      var idValue = undefined;
      while(index < trasladosList.length){ 
        if(trasladosList[index].idTraslado== args[1]){
          item = trasladosList[index]; 
          item = trasladosList[index]; 
          index = trasladosList.length; 
        }
        index++;
      }
      if(item == undefined){
        console.log('No se encontró el registro a editar');
        rl.prompt(); 
        break; 
      }
      item.lastModificationUser = 'edited value: 1'; 
      item.creationUser = 'edited value: 3'; 
      item.idEm = 1005; 
      item.idActo = 1006; 
      item.idPersona = 1007; 
      item.chofer = 1009; 
      item.azafata = 10010; 
      item.recogida = 'edited value: 12'; 
      item.destino = 'edited value: 13'; 
      item.acompanantes = 'edited value: 15'; 
      item.observaciones = 'edited value: 16'; 
      
      var opts = { 
        url: 'http://localhost:8080/emsec/traslados/' + item.idTraslado, 
        method: 'PUT', 
        json: true, 
        body: item 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Edit Error: '+error); 
        }else{ 
          console.log('Edit success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    default: 
      rl.prompt(); 
  } 
} 
function actosMgmt(line){ 
  var args = line.split(' '); 
  switch(args[0]){ 
    case 'exit': 
      console.log('Bye'); 
      rl.close(); 
      process.exit(); 
      break; 
    case 'back': 
      console.log('Commando back'); 
      rl.setPrompt(rootPrompt+'>'); 
      rl.prompt(); 
      SetIsactos(false); 
      break; 
    case 'help': 
      console.log('Comandos actos:'); 
      console.log('  - help: mostrar este mensaje'); 
      console.log('  - back: volver al menu'); 
      console.log('  - list: listar todas las actos'); 
      console.log('  - add: añadir'); 
      console.log('  - del: borrar'); 
      console.log('  - edit: editar'); 
      console.log('  - exit: salir del programa'); 
      rl.prompt(); 
      break; 
    case 'list': 
      console.log('Commando list'); 
      var url = 'http://localhost:8080/emsec/actos'; 
      if(args.length > 1) url += '/' + args[1]; 
      console.log('GET '+url); 
      var opts = { 
        url: url, 
        json: true, 
        method: 'GET' 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: '+ res.statusCode+' ' +error); 
        }else{ 
          console.log(body); 
          actosList = body; 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'add': 
      console.log('Commando add'); 
      var newItem = new Object(); 
      newItem.idActo = actosLastId++;
      newItem.lastModificationUser = 'value:1';
      newItem.creationUser = 'value:3';
      newItem.idEm = 5;
      newItem.descripcion = 'value:6';
      newItem.asistencia = 10;
      newItem.avisos = 'value:11';
      newItem.turnoPregModo = 'value:13';
      newItem.microMesa = 14;
      newItem.microPie = 15;
      newItem.microInalambrico = 16;
      newItem.descProyeccion = 'value:18';
      newItem.idiomaActo = 'value:20';
      newItem.modoActo = 'value:21';
      newItem.idiomaPonente = 'value:23';
      newItem.modoPonente = 'value:24';
      newItem.comentarios = 'value:25';
      newItem.reservAsientos = 26;
      newItem.detReservAsientos = 'value:27';
      newItem.incMediosTec = 'value:28';
      newItem.incSala = 'value:29';
      newItem.puntComienzo = 'value:30';
      newItem.puntFin = 'value:31';
      newItem.respSala = 'value:32';
      newItem.valActo = 'value:33';
      newItem.comentFinal = 'value:34';
      newItem.sala = 35;
      newItem.distMesa = 'value:36';
      newItem.patrocinador = 37;
      newItem.obsPatrocinador = 'value:38';
      newItem.azafata = 39;
      newItem.otrasNecesidades = 'value:40';
      newItem.aforo = 41;
      newItem.quedaronFuera = 42;
      newItem.otrasValoraciones = 'value:43';
      newItem.traductorActo = 44;
      newItem.traductorPonente = 45;
      newItem.responsableActo = 46;
      var opts = { 
        url: 'http://localhost:8080/emsec/actos', 
        method: 'POST', 
        json: true, 
        body: newItem 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: ' + error); 
        }else{ 
          console.log('Add success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'del': 
      console.log('Commando del'); 
      var opts = { 
        url: 'http://localhost:8080/emsec/actos/'+actosLastIdDeleted++, 
        method: 'DELETE' 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Error: '+error); 
        }else{ 
          console.log('Delete success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    case 'edit': 
      console.log('Commando edit'); 
      if(args.length < 2){ 
        console.log('Falta el parámetro id para saber que entidad editar'); 
        rl.prompt(); 
        break; 
      } 
      var index = 0;
      var item = undefined;
      var idValue = undefined;
      while(index < actosList.length){ 
        if(actosList[index].idActo== args[1]){
          item = actosList[index]; 
          item = actosList[index]; 
          index = actosList.length; 
        }
        index++;
      }
      if(item == undefined){
        console.log('No se encontró el registro a editar');
        rl.prompt(); 
        break; 
      }
      item.lastModificationUser = 'edited value: 1'; 
      item.creationUser = 'edited value: 3'; 
      item.idEm = 1005; 
      item.descripcion = 'edited value: 6'; 
      item.asistencia = 10010; 
      item.avisos = 'edited value: 11'; 
      item.turnoPregModo = 'edited value: 13'; 
      item.microMesa = 10014; 
      item.microPie = 10015; 
      item.microInalambrico = 10016; 
      item.descProyeccion = 'edited value: 18'; 
      item.idiomaActo = 'edited value: 20'; 
      item.modoActo = 'edited value: 21'; 
      item.idiomaPonente = 'edited value: 23'; 
      item.modoPonente = 'edited value: 24'; 
      item.comentarios = 'edited value: 25'; 
      item.reservAsientos = 10026; 
      item.detReservAsientos = 'edited value: 27'; 
      item.incMediosTec = 'edited value: 28'; 
      item.incSala = 'edited value: 29'; 
      item.puntComienzo = 'edited value: 30'; 
      item.puntFin = 'edited value: 31'; 
      item.respSala = 'edited value: 32'; 
      item.valActo = 'edited value: 33'; 
      item.comentFinal = 'edited value: 34'; 
      item.sala = 10035; 
      item.distMesa = 'edited value: 36'; 
      item.patrocinador = 10037; 
      item.obsPatrocinador = 'edited value: 38'; 
      item.azafata = 10039; 
      item.otrasNecesidades = 'edited value: 40'; 
      item.aforo = 10041; 
      item.quedaronFuera = 10042; 
      item.otrasValoraciones = 'edited value: 43'; 
      item.traductorActo = 10044; 
      item.traductorPonente = 10045; 
      item.responsableActo = 10046; 
      
      var opts = { 
        url: 'http://localhost:8080/emsec/actos/' + item.idActo, 
        method: 'PUT', 
        json: true, 
        body: item 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Edit Error: '+error); 
        }else{ 
          console.log('Edit success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    default: 
      rl.prompt(); 
  } 
} 
function datos_emMgmt(line){ 
  var args = line.split(' '); 
  switch(args[0]){ 
    case 'exit': 
      console.log('Bye'); 
      rl.close(); 
      process.exit(); 
      break; 
    case 'back': 
      console.log('Commando back'); 
      rl.setPrompt(rootPrompt+'>'); 
      rl.prompt(); 
      SetIsdatos_em(false); 
      break; 
    case 'help': 
      console.log('Comandos datos_em:'); 
      console.log('  - help: mostrar este mensaje'); 
      console.log('  - back: volver al menu'); 
      console.log('  - list: listar todas las datos_em'); 
      console.log('  - add: añadir'); 
      console.log('  - del: borrar'); 
      console.log('  - edit: editar'); 
      console.log('  - exit: salir del programa'); 
      rl.prompt(); 
      break; 
    case 'list': 
      console.log('Commando list'); 
      var url = 'http://localhost:8080/emsec/datos_em'; 
      if(args.length > 1) url += '/' + args[1]; 
      console.log('GET '+url); 
      var opts = { 
        url: url, 
        json: true, 
        method: 'GET' 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: '+ res.statusCode+' ' +error); 
        }else{ 
          console.log(body); 
          datos_emList = body; 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'add': 
      console.log('Commando add'); 
      var newItem = new Object(); 
      newItem.idEm = datos_emLastId++;
      newItem.lastModificationUser = 'value:1';
      newItem.creationUser = 'value:3';
      newItem.fechas = 'value:5';
      newItem.lema = 'value:6';
      newItem.observaciones = 'value:7';
      newItem.lugar = 'value:8';
      var opts = { 
        url: 'http://localhost:8080/emsec/datos_em', 
        method: 'POST', 
        json: true, 
        body: newItem 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: ' + error); 
        }else{ 
          console.log('Add success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'del': 
      console.log('Commando del'); 
      var opts = { 
        url: 'http://localhost:8080/emsec/datos_em/'+datos_emLastIdDeleted++, 
        method: 'DELETE' 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Error: '+error); 
        }else{ 
          console.log('Delete success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    case 'edit': 
      console.log('Commando edit'); 
      if(args.length < 2){ 
        console.log('Falta el parámetro id para saber que entidad editar'); 
        rl.prompt(); 
        break; 
      } 
      var index = 0;
      var item = undefined;
      var idValue = undefined;
      while(index < datos_emList.length){ 
        if(datos_emList[index].idEm== args[1]){
          item = datos_emList[index]; 
          item = datos_emList[index]; 
          index = datos_emList.length; 
        }
        index++;
      }
      if(item == undefined){
        console.log('No se encontró el registro a editar');
        rl.prompt(); 
        break; 
      }
      item.lastModificationUser = 'edited value: 1'; 
      item.creationUser = 'edited value: 3'; 
      item.fechas = 'edited value: 5'; 
      item.lema = 'edited value: 6'; 
      item.observaciones = 'edited value: 7'; 
      item.lugar = 'edited value: 8'; 
      
      var opts = { 
        url: 'http://localhost:8080/emsec/datos_em/' + item.idEm, 
        method: 'PUT', 
        json: true, 
        body: item 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Edit Error: '+error); 
        }else{ 
          console.log('Edit success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    default: 
      rl.prompt(); 
  } 
} 
function personasMgmt(line){ 
  var args = line.split(' '); 
  switch(args[0]){ 
    case 'exit': 
      console.log('Bye'); 
      rl.close(); 
      process.exit(); 
      break; 
    case 'back': 
      console.log('Commando back'); 
      rl.setPrompt(rootPrompt+'>'); 
      rl.prompt(); 
      SetIspersonas(false); 
      break; 
    case 'help': 
      console.log('Comandos personas:'); 
      console.log('  - help: mostrar este mensaje'); 
      console.log('  - back: volver al menu'); 
      console.log('  - list: listar todas las personas'); 
      console.log('  - add: añadir'); 
      console.log('  - del: borrar'); 
      console.log('  - edit: editar'); 
      console.log('  - exit: salir del programa'); 
      rl.prompt(); 
      break; 
    case 'list': 
      console.log('Commando list'); 
      var url = 'http://localhost:8080/emsec/personas'; 
      if(args.length > 1) url += '/' + args[1]; 
      console.log('GET '+url); 
      var opts = { 
        url: url, 
        json: true, 
        method: 'GET' 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: '+ res.statusCode+' ' +error); 
        }else{ 
          console.log(body); 
          personasList = body; 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'add': 
      console.log('Commando add'); 
      var newItem = new Object(); 
      newItem.idPersona = personasLastId++;
      newItem.tratamiento = 'value:4';
      newItem.lastModificationUser = 'value:5';
      newItem.lastModificationDate = 'value:6';
      newItem.creationUser = 'value:7';
      newItem.creationDate = 'value:8';
      newItem.nombre = 'value:9';
      newItem.apellidos = 'value:10';
      newItem.empresa = 'value:11';
      newItem.cargo = 'value:12';
      newItem.direccion = 'value:13';
      newItem.direccion2 = 'value:14';
      newItem.cp = 'value:15';
      newItem.localidad = 'value:16';
      newItem.provincia = 'value:17';
      newItem.pais = 'value:18';
      newItem.tfnoDomicilio = 'value:19';
      newItem.tfnoOficina = 'value:20';
      newItem.tfnoMovil = 'value:21';
      newItem.email = 'value:22';
      newItem.email2 = 'value:23';
      newItem.observaciones = 'value:24';
      newItem.profesion = 25;
      newItem.personaRef = 'value:26';
      newItem.biografia = 'value:27';
      newItem.idioma = 'value:28';
      var opts = { 
        url: 'http://localhost:8080/emsec/personas', 
        method: 'POST', 
        json: true, 
        body: newItem 
      }; 
      request(opts, function(error, res, body){ 
        if(error || res.statusCode != 200){ 
          console.log('Error: ' + error); 
        }else{ 
          console.log('Add success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      //rl.prompt(); 
      break; 
    case 'del': 
      console.log('Commando del'); 
      var opts = { 
        url: 'http://localhost:8080/emsec/personas/'+personasLastIdDeleted++, 
        method: 'DELETE' 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Error: '+error); 
        }else{ 
          console.log('Delete success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    case 'edit': 
      console.log('Commando edit'); 
      if(args.length < 2){ 
        console.log('Falta el parámetro id para saber que entidad editar'); 
        rl.prompt(); 
        break; 
      } 
      var index = 0;
      var item = undefined;
      var idValue = undefined;
      while(index < personasList.length){ 
        if(personasList[index].idPersona== args[1]){
          item = personasList[index]; 
          item = personasList[index]; 
          index = personasList.length; 
        }
        index++;
      }
      if(item == undefined){
        console.log('No se encontró el registro a editar');
        rl.prompt(); 
        break; 
      }
      item.tratamiento = 'edited value: 4'; 
      item.lastModificationUser = 'edited value: 5'; 
      item.lastModificationDate = 'edited value: 6'; 
      item.creationUser = 'edited value: 7'; 
      item.creationDate = 'edited value: 8'; 
      item.nombre = 'edited value: 9'; 
      item.apellidos = 'edited value: 10'; 
      item.empresa = 'edited value: 11'; 
      item.cargo = 'edited value: 12'; 
      item.direccion = 'edited value: 13'; 
      item.direccion2 = 'edited value: 14'; 
      item.cp = 'edited value: 15'; 
      item.localidad = 'edited value: 16'; 
      item.provincia = 'edited value: 17'; 
      item.pais = 'edited value: 18'; 
      item.tfnoDomicilio = 'edited value: 19'; 
      item.tfnoOficina = 'edited value: 20'; 
      item.tfnoMovil = 'edited value: 21'; 
      item.email = 'edited value: 22'; 
      item.email2 = 'edited value: 23'; 
      item.observaciones = 'edited value: 24'; 
      item.profesion = 10025; 
      item.personaRef = 'edited value: 26'; 
      item.biografia = 'edited value: 27'; 
      item.idioma = 'edited value: 28'; 
      
      var opts = { 
        url: 'http://localhost:8080/emsec/personas/' + item.idPersona, 
        method: 'PUT', 
        json: true, 
        body: item 
      }; 
      request(opts, function(error, res, body){ 
        if(error||res.statusCode != 204){ 
          console.log('Edit Error: '+error); 
        }else{ 
          console.log('Edit success'); 
          console.log(body); 
        } 
        rl.prompt(); 
      }); 
      break; 
    default: 
      rl.prompt(); 
  } 
} 
function SetIsprofesiones(value){ 
  isprofesiones = value; 
  issalas = !value; 
  istiming_actos = !value; 
  isplaning_actos = !value; 
  isem_actos_personas = !value; 
  isem_actos_voluntarios = !value; 
  isagenda = !value; 
  istipo_relacion = !value; 
  istraslados = !value; 
  isactos = !value; 
  isdatos_em = !value; 
  ispersonas = !value; 
} 
function SetIssalas(value){ 
  isprofesiones = !value; 
  issalas = value; 
  istiming_actos = !value; 
  isplaning_actos = !value; 
  isem_actos_personas = !value; 
  isem_actos_voluntarios = !value; 
  isagenda = !value; 
  istipo_relacion = !value; 
  istraslados = !value; 
  isactos = !value; 
  isdatos_em = !value; 
  ispersonas = !value; 
} 
function SetIstiming_actos(value){ 
  isprofesiones = !value; 
  issalas = !value; 
  istiming_actos = value; 
  isplaning_actos = !value; 
  isem_actos_personas = !value; 
  isem_actos_voluntarios = !value; 
  isagenda = !value; 
  istipo_relacion = !value; 
  istraslados = !value; 
  isactos = !value; 
  isdatos_em = !value; 
  ispersonas = !value; 
} 
function SetIsplaning_actos(value){ 
  isprofesiones = !value; 
  issalas = !value; 
  istiming_actos = !value; 
  isplaning_actos = value; 
  isem_actos_personas = !value; 
  isem_actos_voluntarios = !value; 
  isagenda = !value; 
  istipo_relacion = !value; 
  istraslados = !value; 
  isactos = !value; 
  isdatos_em = !value; 
  ispersonas = !value; 
} 
function SetIsem_actos_personas(value){ 
  isprofesiones = !value; 
  issalas = !value; 
  istiming_actos = !value; 
  isplaning_actos = !value; 
  isem_actos_personas = value; 
  isem_actos_voluntarios = !value; 
  isagenda = !value; 
  istipo_relacion = !value; 
  istraslados = !value; 
  isactos = !value; 
  isdatos_em = !value; 
  ispersonas = !value; 
} 
function SetIsem_actos_voluntarios(value){ 
  isprofesiones = !value; 
  issalas = !value; 
  istiming_actos = !value; 
  isplaning_actos = !value; 
  isem_actos_personas = !value; 
  isem_actos_voluntarios = value; 
  isagenda = !value; 
  istipo_relacion = !value; 
  istraslados = !value; 
  isactos = !value; 
  isdatos_em = !value; 
  ispersonas = !value; 
} 
function SetIsagenda(value){ 
  isprofesiones = !value; 
  issalas = !value; 
  istiming_actos = !value; 
  isplaning_actos = !value; 
  isem_actos_personas = !value; 
  isem_actos_voluntarios = !value; 
  isagenda = value; 
  istipo_relacion = !value; 
  istraslados = !value; 
  isactos = !value; 
  isdatos_em = !value; 
  ispersonas = !value; 
} 
function SetIstipo_relacion(value){ 
  isprofesiones = !value; 
  issalas = !value; 
  istiming_actos = !value; 
  isplaning_actos = !value; 
  isem_actos_personas = !value; 
  isem_actos_voluntarios = !value; 
  isagenda = !value; 
  istipo_relacion = value; 
  istraslados = !value; 
  isactos = !value; 
  isdatos_em = !value; 
  ispersonas = !value; 
} 
function SetIstraslados(value){ 
  isprofesiones = !value; 
  issalas = !value; 
  istiming_actos = !value; 
  isplaning_actos = !value; 
  isem_actos_personas = !value; 
  isem_actos_voluntarios = !value; 
  isagenda = !value; 
  istipo_relacion = !value; 
  istraslados = value; 
  isactos = !value; 
  isdatos_em = !value; 
  ispersonas = !value; 
} 
function SetIsactos(value){ 
  isprofesiones = !value; 
  issalas = !value; 
  istiming_actos = !value; 
  isplaning_actos = !value; 
  isem_actos_personas = !value; 
  isem_actos_voluntarios = !value; 
  isagenda = !value; 
  istipo_relacion = !value; 
  istraslados = !value; 
  isactos = value; 
  isdatos_em = !value; 
  ispersonas = !value; 
} 
function SetIsdatos_em(value){ 
  isprofesiones = !value; 
  issalas = !value; 
  istiming_actos = !value; 
  isplaning_actos = !value; 
  isem_actos_personas = !value; 
  isem_actos_voluntarios = !value; 
  isagenda = !value; 
  istipo_relacion = !value; 
  istraslados = !value; 
  isactos = !value; 
  isdatos_em = value; 
  ispersonas = !value; 
} 
function SetIspersonas(value){ 
  isprofesiones = !value; 
  issalas = !value; 
  istiming_actos = !value; 
  isplaning_actos = !value; 
  isem_actos_personas = !value; 
  isem_actos_voluntarios = !value; 
  isagenda = !value; 
  istipo_relacion = !value; 
  istraslados = !value; 
  isactos = !value; 
  isdatos_em = !value; 
  ispersonas = value; 
} 
