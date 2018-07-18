var express = require('express'); 
var bodyParser = require('body-parser'); 
var sqlite3 = require('sqlite3').verbose(); 
var app = express(); 
app.use(bodyParser.json()); 
app.use(express.static('static')); 
 
app.use(function(req, res, next){ 
  res.header('Access-Control-Allow-Origin',  "*"); 
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE'); 
  res.header('Access-Control-Allow-Headers', 'Content-Type'); 
  if(req.method == 'OPTIONS'){ 
    res.status(200).send(); 
  }else{ 
    next(); 
  } 
}); 
var db = new sqlite3.Database('emdb.db'); 
db.serialize(function(){ 
 console.log('Creating DB'); 
 var sqlTable = ''; 
  //Index: 0 12 
  sqlTable =  ' CREATE TABLE IF NOT EXISTS profesiones( ID_PROFESION INTEGER PRIMARY KEY AUTOINCREMENT , LAST_MODIFICATION_USER TEXT, LAST_MODIFICATION_DATE TEXT, CREATION_USER TEXT, CREATION_DATE TEXT, DESCRIPCION TEXT); ' ; 
  console.log(sqlTable); 
  db.run(sqlTable); 
  //Index: 1 12 
  sqlTable =  ' CREATE TABLE IF NOT EXISTS salas( ID_SALA INTEGER PRIMARY KEY AUTOINCREMENT , LAST_MODIFICATION_USER TEXT, LAST_MODIFICATION_DATE TEXT, CREATION_USER TEXT, CREATION_DATE TEXT, DESCRIPCION TEXT); ' ; 
  console.log(sqlTable); 
  db.run(sqlTable); 
  //Index: 2 12 
  sqlTable =  ' CREATE TABLE IF NOT EXISTS timing_actos( ID_TIMING INTEGER PRIMARY KEY AUTOINCREMENT , LAST_MODIFICATION_USER TEXT, LAST_MODIFICATION_DATE TEXT, CREATION_USER TEXT, CREATION_DATE TEXT, ID_ACTO INTEGER, EVENTO TEXT, DESDE TEXT, HASTA TEXT); ' ; 
  console.log(sqlTable); 
  db.run(sqlTable); 
  //Index: 3 12 
  sqlTable =  ' CREATE TABLE IF NOT EXISTS planing_actos( ID_PLANING INTEGER PRIMARY KEY AUTOINCREMENT , LAST_MODIFICATION_USER TEXT, LAST_MODIFICATION_DATE TEXT, CREATION_USER TEXT, CREATION_DATE TEXT, ID_ACTO INTEGER, EVENTO TEXT, FECHA TEXT, DESDE TEXT, HASTA TEXT, SALA INTEGER); ' ; 
  console.log(sqlTable); 
  db.run(sqlTable); 
  //Index: 4 12 
  sqlTable =  ' CREATE TABLE IF NOT EXISTS em_actos_personas( ID_EM INTEGER PRIMARY KEY AUTOINCREMENT , LAST_MODIFICATION_USER TEXT, LAST_MODIFICATION_DATE TEXT, CREATION_USER TEXT, CREATION_DATE TEXT, ID_ACTO INTEGER, ID_PERSONA INTEGER, ID_TIPO_RELACION INTEGER); ' ; 
  console.log(sqlTable); 
  db.run(sqlTable); 
  //Index: 5 12 
  sqlTable =  ' CREATE TABLE IF NOT EXISTS em_actos_voluntarios( ID_EM INTEGER PRIMARY KEY AUTOINCREMENT , LAST_MODIFICATION_USER TEXT, LAST_MODIFICATION_DATE TEXT, CREATION_USER TEXT, CREATION_DATE TEXT, ID_ACTO INTEGER, ID_PERSONA INTEGER, ID_TIPO_RELACION INTEGER, OBSERVACIONES TEXT); ' ; 
  console.log(sqlTable); 
  db.run(sqlTable); 
  //Index: 6 12 
  sqlTable =  ' CREATE TABLE IF NOT EXISTS agenda( ID_AGENDA INTEGER PRIMARY KEY AUTOINCREMENT , LAST_MODIFICATION_USER TEXT, LAST_MODIFICATION_DATE TEXT, CREATION_USER TEXT, CREATION_DATE TEXT, ID_EM INTEGER, ID_ACTO INTEGER, ID_PERSONA INTEGER, DESCRIPCION TEXT, FECHA TEXT, HORA_INICIO TEXT, HORA_FIN TEXT); ' ; 
  console.log(sqlTable); 
  db.run(sqlTable); 
  //Index: 7 12 
  sqlTable =  ' CREATE TABLE IF NOT EXISTS tipo_relacion( ID_RELACION INTEGER PRIMARY KEY AUTOINCREMENT , LAST_MODIFICATION_USER TEXT, LAST_MODIFICATION_DATE TEXT, CREATION_USER TEXT, CREATION_DATE TEXT, DESCRIPCION TEXT, OBSERVACIONES TEXT, ES_VOLUNTARIO TEXT); ' ; 
  console.log(sqlTable); 
  db.run(sqlTable); 
  //Index: 8 12 
  sqlTable =  ' CREATE TABLE IF NOT EXISTS traslados( ID_TRASLADO INTEGER PRIMARY KEY AUTOINCREMENT , LAST_MODIFICATION_USER TEXT, LAST_MODIFICATION_DATE TEXT, CREATION_USER TEXT, CREATION_DATE TEXT, ID_EM INTEGER, ID_ACTO INTEGER, ID_PERSONA INTEGER, FECHA TEXT, CHOFER INTEGER, AZAFATA INTEGER, SALIDA TEXT, RECOGIDA TEXT, DESTINO TEXT, LLEGADA TEXT, ACOMPANANTES TEXT, OBSERVACIONES TEXT); ' ; 
  console.log(sqlTable); 
  db.run(sqlTable); 
  //Index: 9 12 
  sqlTable =  ' CREATE TABLE IF NOT EXISTS actos( ID_ACTO INTEGER PRIMARY KEY AUTOINCREMENT , LAST_MODIFICATION_USER TEXT, LAST_MODIFICATION_DATE TEXT, CREATION_USER TEXT, CREATION_DATE TEXT, ID_EM INTEGER, DESCRIPCION TEXT, DIA TEXT, INICIO TEXT, FIN TEXT, ASISTENCIA INTEGER, AVISOS TEXT, TURNO_PREG INTEGER, TURNO_PREG_MODO TEXT, MICRO_MESA INTEGER, MICRO_PIE INTEGER, MICRO_INALAMBRICO INTEGER, MAT_PROYECTAR INTEGER, DESC_PROYECCION TEXT, TRAD_ACTO INTEGER, IDIOMA_ACTO TEXT, MOD_ACTO TEXT, TRAD_PONENTE INTEGER, IDIOMA_PONENTE TEXT, MOD_PONENTE TEXT, COMENTARIOS TEXT, RESERV_ASIENTOS INTEGER, DET_RESERV_ASIENTOS TEXT, INC_MEDIOS_TEC TEXT, INC_SALA TEXT, PUNT_COMIENZO TEXT, PUNT_FIN TEXT, RESP_SALA TEXT, VAL_ACTO TEXT, COMENT_FINAL TEXT, SALA INTEGER, DIST_MESA TEXT, PATROCINADOR INTEGER, OBS_PATROCINADOR TEXT, AZAFATA INTEGER, OTRAS_NECESIDADES TEXT, AFORO INTEGER, QUEDARON_FUERA INTEGER, OTRAS_VALORACIONES TEXT, TRADUCTOR_ACTO INTEGER, TRADUCTOR_PONENTE INTEGER, RESPONSABLE_ACTO INTEGER); ' ; 
  console.log(sqlTable); 
  db.run(sqlTable); 
  //Index: 10 12 
  sqlTable =  ' CREATE TABLE IF NOT EXISTS datos_em( ID_EM INTEGER PRIMARY KEY AUTOINCREMENT , LAST_MODIFICATION_USER TEXT, LAST_MODIFICATION_DATE TEXT, CREATION_USER TEXT, CREATION_DATE TEXT, FECHAS TEXT, LEMA TEXT, OBSERVACIONES TEXT, LUGAR TEXT); ' ; 
  console.log(sqlTable); 
  db.run(sqlTable); 
  //Index: 11 12 
  sqlTable =  ' CREATE TABLE IF NOT EXISTS personas( ID_PERSONA INTEGER PRIMARY KEY AUTOINCREMENT , ETIQUETA INTEGER, ALTA TEXT, BAJA TEXT, TRATAMIENTO TEXT, LAST_MODIFICATION_USER TEXT, LAST_MODIFICATION_DATE TEXT, CREATION_USER TEXT, CREATION_DATE TEXT, NOMBRE TEXT, APELLIDOS TEXT, EMPRESA TEXT, CARGO TEXT, DIRECCION TEXT, DIRECCION2 TEXT, CP TEXT, LOCALIDAD TEXT, PROVINCIA TEXT, PAIS TEXT, TFNO_DOMICILIO TEXT, TFNO_OFICINA TEXT, TFNO_MOVIL TEXT, EMAIL TEXT, EMAIL2 TEXT, OBSERVACIONES TEXT, PROFESION INTEGER, PERSONA_REF TEXT, BIOGRAFIA TEXT, IDIOMA TEXT); ' ; 
  console.log(sqlTable); 
  db.run(sqlTable); 
}); 
//profesiones REST implementation
app.post('/emsec/profesiones', function(req, res){ 
  console.log('POST/emsec/profesiones'); 
  var item = req.body; 
  var query =  " INSERT INTO profesiones ( LAST_MODIFICATION_USER , LAST_MODIFICATION_DATE , CREATION_USER , CREATION_DATE , DESCRIPCION ) VALUES ('"+item.lastModificationUser+"','"+item.lastModificationDate+"','"+item.creationUser+"','"+item.creationDate+"','"+item.descripcion+"'); " ; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log(err); 
    res.send(item);
   
  }); 
}); 
app.get('/emsec/profesiones', function(req, res){ 
  console.log('GET /emsec/profesiones'); 
  var itemList=[]; 
  db.all('SELECT * FROM profesiones', function(err, rows){ 
    console.log('rows count: '+rows.length);
    for(i = 0; i < rows.length; i++){ 
      var newItem = new Object();
      newItem.idProfesion = rows[i].ID_PROFESION;
      newItem.lastModificationUser = rows[i].LAST_MODIFICATION_USER;
      newItem.lastModificationDate = rows[i].LAST_MODIFICATION_DATE;
      newItem.creationUser = rows[i].CREATION_USER;
      newItem.creationDate = rows[i].CREATION_DATE;
      newItem.descripcion = rows[i].DESCRIPCION;
      itemList.push(newItem);
    }
    res.send(itemList); 
  }); 
}); 
app.put('/emsec/profesiones/:id', function(req, res){ 
  console.log('PUT /emsec/profesiones/'+req.params.id); 
  var item = req.body; 
  var query =  " UPDATE profesiones SET  LAST_MODIFICATION_USER = '"+item.lastModificationUser+"', LAST_MODIFICATION_DATE = '"+item.lastModificationDate+"', CREATION_USER = '"+item.creationUser+"', CREATION_DATE = '"+item.creationDate+"', DESCRIPCION = '"+item.descripcion+"' WHERE ID_PROFESION = "+item.idProfesion; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log('edit err:'+err);
    res.send(item);
    
  }); 
}); 
app.delete('/emsec/profesiones/:id', function(req, res){ 
  console.log('DELETE /emsec/profesiones/'+req.params.id); 
  var itemQuery = "DELETE FROM profesiones WHERE ID_PROFESION = "+req.params.id; 
  console.log(itemQuery); 
  db.run(itemQuery, function(err){ 
  
  
  }); 
  res.send('OK'); 
}); 
//salas REST implementation
app.post('/emsec/salas', function(req, res){ 
  console.log('POST/emsec/salas'); 
  var item = req.body; 
  var query =  " INSERT INTO salas ( LAST_MODIFICATION_USER , LAST_MODIFICATION_DATE , CREATION_USER , CREATION_DATE , DESCRIPCION ) VALUES ('"+item.lastModificationUser+"','"+item.lastModificationDate+"','"+item.creationUser+"','"+item.creationDate+"','"+item.descripcion+"'); " ; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log(err); 
    res.send(item);
   
  }); 
}); 
app.get('/emsec/salas', function(req, res){ 
  console.log('GET /emsec/salas'); 
  var itemList=[]; 
  db.all('SELECT * FROM salas', function(err, rows){ 
    console.log('rows count: '+rows.length);
    for(i = 0; i < rows.length; i++){ 
      var newItem = new Object();
      newItem.idSala = rows[i].ID_SALA;
      newItem.lastModificationUser = rows[i].LAST_MODIFICATION_USER;
      newItem.lastModificationDate = rows[i].LAST_MODIFICATION_DATE;
      newItem.creationUser = rows[i].CREATION_USER;
      newItem.creationDate = rows[i].CREATION_DATE;
      newItem.descripcion = rows[i].DESCRIPCION;
      itemList.push(newItem);
    }
    res.send(itemList); 
  }); 
}); 
app.put('/emsec/salas/:id', function(req, res){ 
  console.log('PUT /emsec/salas/'+req.params.id); 
  var item = req.body; 
  var query =  " UPDATE salas SET  LAST_MODIFICATION_USER = '"+item.lastModificationUser+"', LAST_MODIFICATION_DATE = '"+item.lastModificationDate+"', CREATION_USER = '"+item.creationUser+"', CREATION_DATE = '"+item.creationDate+"', DESCRIPCION = '"+item.descripcion+"' WHERE ID_SALA = "+item.idSala; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log('edit err:'+err);
    res.send(item);
    
  }); 
}); 
app.delete('/emsec/salas/:id', function(req, res){ 
  console.log('DELETE /emsec/salas/'+req.params.id); 
  var itemQuery = "DELETE FROM salas WHERE ID_SALA = "+req.params.id; 
  console.log(itemQuery); 
  db.run(itemQuery, function(err){ 
  
  
  }); 
  res.send('OK'); 
}); 
//timing_actos REST implementation
app.post('/emsec/timingactos', function(req, res){ 
  console.log('POST/emsec/timingactos'); 
  var item = req.body; 
  var query =  " INSERT INTO timing_actos ( LAST_MODIFICATION_USER , LAST_MODIFICATION_DATE , CREATION_USER , CREATION_DATE , ID_ACTO , EVENTO , DESDE , HASTA ) VALUES ('"+item.lastModificationUser+"','"+item.lastModificationDate+"','"+item.creationUser+"','"+item.creationDate+"',"+item.idActo+",'"+item.evento+"','"+item.desde+"','"+item.hasta+"'); " ; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log(err); 
    res.send(item);
   
  }); 
}); 
app.get('/emsec/timingactos', function(req, res){ 
  console.log('GET /emsec/timingactos'); 
  var itemList=[]; 
  db.all('SELECT * FROM timing_actos', function(err, rows){ 
    console.log('rows count: '+rows.length);
    for(i = 0; i < rows.length; i++){ 
      var newItem = new Object();
      newItem.idTiming = rows[i].ID_TIMING;
      newItem.lastModificationUser = rows[i].LAST_MODIFICATION_USER;
      newItem.lastModificationDate = rows[i].LAST_MODIFICATION_DATE;
      newItem.creationUser = rows[i].CREATION_USER;
      newItem.creationDate = rows[i].CREATION_DATE;
      newItem.idActo = rows[i].ID_ACTO;
      newItem.evento = rows[i].EVENTO;
      newItem.desde = rows[i].DESDE;
      newItem.hasta = rows[i].HASTA;
      itemList.push(newItem);
    }
    res.send(itemList); 
  }); 
}); 
app.put('/emsec/timingactos/:id', function(req, res){ 
  console.log('PUT /emsec/timingactos/'+req.params.id); 
  var item = req.body; 
  var query =  " UPDATE timing_actos SET  LAST_MODIFICATION_USER = '"+item.lastModificationUser+"', LAST_MODIFICATION_DATE = '"+item.lastModificationDate+"', CREATION_USER = '"+item.creationUser+"', CREATION_DATE = '"+item.creationDate+"', ID_ACTO = "+item.idActo+", EVENTO = '"+item.evento+"', DESDE = '"+item.desde+"', HASTA = '"+item.hasta+"' WHERE ID_TIMING = "+item.idTiming; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log('edit err:'+err);
    res.send(item);
    
  }); 
}); 
app.delete('/emsec/timingactos/:id', function(req, res){ 
  console.log('DELETE /emsec/timingactos/'+req.params.id); 
  var itemQuery = "DELETE FROM timing_actos WHERE ID_TIMING = "+req.params.id; 
  console.log(itemQuery); 
  db.run(itemQuery, function(err){ 
  
  
  }); 
  res.send('OK'); 
}); 
//planing_actos REST implementation
app.post('/emsec/planing_actos', function(req, res){ 
  console.log('POST/emsec/planing_actos'); 
  var item = req.body; 
  var query =  " INSERT INTO planing_actos ( LAST_MODIFICATION_USER , LAST_MODIFICATION_DATE , CREATION_USER , CREATION_DATE , ID_ACTO , EVENTO , FECHA , DESDE , HASTA , SALA ) VALUES ('"+item.lastModificationUser+"','"+item.lastModificationDate+"','"+item.creationUser+"','"+item.creationDate+"',"+item.idActo+",'"+item.evento+"','"+item.fecha+"',"+item.desde+","+item.hasta+","+item.sala+"); " ; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log(err); 
    res.send(item);
   
  }); 
}); 
app.get('/emsec/planing_actos', function(req, res){ 
  console.log('GET /emsec/planing_actos'); 
  var itemList=[]; 
  db.all('SELECT * FROM planing_actos', function(err, rows){ 
    console.log('rows count: '+rows.length);
    for(i = 0; i < rows.length; i++){ 
      var newItem = new Object();
      newItem.idPlaning = rows[i].ID_PLANING;
      newItem.lastModificationUser = rows[i].LAST_MODIFICATION_USER;
      newItem.lastModificationDate = rows[i].LAST_MODIFICATION_DATE;
      newItem.creationUser = rows[i].CREATION_USER;
      newItem.creationDate = rows[i].CREATION_DATE;
      newItem.idActo = rows[i].ID_ACTO;
      newItem.evento = rows[i].EVENTO;
      newItem.fecha = rows[i].FECHA;
      newItem.desde = rows[i].DESDE;
      newItem.hasta = rows[i].HASTA;
      newItem.sala = rows[i].SALA;
      itemList.push(newItem);
    }
    res.send(itemList); 
  }); 
}); 
app.put('/emsec/planing_actos/:id', function(req, res){ 
  console.log('PUT /emsec/planing_actos/'+req.params.id); 
  var item = req.body; 
  var query =  " UPDATE planing_actos SET  LAST_MODIFICATION_USER = '"+item.lastModificationUser+"', LAST_MODIFICATION_DATE = '"+item.lastModificationDate+"', CREATION_USER = '"+item.creationUser+"', CREATION_DATE = '"+item.creationDate+"', ID_ACTO = "+item.idActo+", EVENTO = '"+item.evento+"', FECHA = '"+item.fecha+"', DESDE = "+item.desde+", HASTA = "+item.hasta+", SALA = "+item.sala+" WHERE ID_PLANING = "+item.idPlaning; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log('edit err:'+err);
    res.send(item);
    
  }); 
}); 
app.delete('/emsec/planing_actos/:id', function(req, res){ 
  console.log('DELETE /emsec/planing_actos/'+req.params.id); 
  var itemQuery = "DELETE FROM planing_actos WHERE ID_PLANING = "+req.params.id; 
  console.log(itemQuery); 
  db.run(itemQuery, function(err){ 
  
  
  }); 
  res.send('OK'); 
}); 
//em_actos_personas REST implementation
app.post('/emsec/em_actos_personas', function(req, res){ 
  console.log('POST/emsec/em_actos_personas'); 
  var item = req.body; 
  var query =  " INSERT INTO em_actos_personas ( LAST_MODIFICATION_USER , LAST_MODIFICATION_DATE , CREATION_USER , CREATION_DATE , ID_ACTO , ID_PERSONA , ID_TIPO_RELACION ) VALUES ('"+item.lastModificationUser+"','"+item.lastModificationDate+"','"+item.creationUser+"','"+item.creationDate+"',"+item.idActo+","+item.idPersona+","+item.idTipoRelacion+"); " ; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log(err); 
    res.send(item);
   
  }); 
}); 
app.get('/emsec/em_actos_personas', function(req, res){ 
  console.log('GET /emsec/em_actos_personas'); 
  var itemList=[]; 
  db.all('SELECT * FROM em_actos_personas', function(err, rows){ 
    console.log('rows count: '+rows.length);
    for(i = 0; i < rows.length; i++){ 
      var newItem = new Object();
      newItem.idEm = rows[i].ID_EM;
      newItem.lastModificationUser = rows[i].LAST_MODIFICATION_USER;
      newItem.lastModificationDate = rows[i].LAST_MODIFICATION_DATE;
      newItem.creationUser = rows[i].CREATION_USER;
      newItem.creationDate = rows[i].CREATION_DATE;
      newItem.idActo = rows[i].ID_ACTO;
      newItem.idPersona = rows[i].ID_PERSONA;
      newItem.idTipoRelacion = rows[i].ID_TIPO_RELACION;
      itemList.push(newItem);
    }
    res.send(itemList); 
  }); 
}); 
app.put('/emsec/em_actos_personas/:id', function(req, res){ 
  console.log('PUT /emsec/em_actos_personas/'+req.params.id); 
  var item = req.body; 
  var query =  " UPDATE em_actos_personas SET  LAST_MODIFICATION_USER = '"+item.lastModificationUser+"', LAST_MODIFICATION_DATE = '"+item.lastModificationDate+"', CREATION_USER = '"+item.creationUser+"', CREATION_DATE = '"+item.creationDate+"', ID_ACTO = "+item.idActo+", ID_PERSONA = "+item.idPersona+", ID_TIPO_RELACION = "+item.idTipoRelacion+" WHERE ID_EM = "+item.idEm; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log('edit err:'+err);
    res.send(item);
    
  }); 
}); 
app.delete('/emsec/em_actos_personas/:id', function(req, res){ 
  console.log('DELETE /emsec/em_actos_personas/'+req.params.id); 
  var itemQuery = "DELETE FROM em_actos_personas WHERE ID_EM = "+req.params.id; 
  console.log(itemQuery); 
  db.run(itemQuery, function(err){ 
  
  
  }); 
  res.send('OK'); 
}); 
//em_actos_voluntarios REST implementation
app.post('/emsec/em_actos_voluntarios', function(req, res){ 
  console.log('POST/emsec/em_actos_voluntarios'); 
  var item = req.body; 
  var query =  " INSERT INTO em_actos_voluntarios ( LAST_MODIFICATION_USER , LAST_MODIFICATION_DATE , CREATION_USER , CREATION_DATE , ID_ACTO , ID_PERSONA , ID_TIPO_RELACION , OBSERVACIONES ) VALUES ('"+item.lastModificationUser+"','"+item.lastModificationDate+"','"+item.creationUser+"','"+item.creationDate+"',"+item.idActo+","+item.idPersona+","+item.idTipoRelacion+",'"+item.observaciones+"'); " ; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log(err); 
    res.send(item);
   
  }); 
}); 
app.get('/emsec/em_actos_voluntarios', function(req, res){ 
  console.log('GET /emsec/em_actos_voluntarios'); 
  var itemList=[]; 
  db.all('SELECT * FROM em_actos_voluntarios', function(err, rows){ 
    console.log('rows count: '+rows.length);
    for(i = 0; i < rows.length; i++){ 
      var newItem = new Object();
      newItem.idEm = rows[i].ID_EM;
      newItem.lastModificationUser = rows[i].LAST_MODIFICATION_USER;
      newItem.lastModificationDate = rows[i].LAST_MODIFICATION_DATE;
      newItem.creationUser = rows[i].CREATION_USER;
      newItem.creationDate = rows[i].CREATION_DATE;
      newItem.idActo = rows[i].ID_ACTO;
      newItem.idPersona = rows[i].ID_PERSONA;
      newItem.idTipoRelacion = rows[i].ID_TIPO_RELACION;
      newItem.observaciones = rows[i].OBSERVACIONES;
      itemList.push(newItem);
    }
    res.send(itemList); 
  }); 
}); 
app.put('/emsec/em_actos_voluntarios/:id', function(req, res){ 
  console.log('PUT /emsec/em_actos_voluntarios/'+req.params.id); 
  var item = req.body; 
  var query =  " UPDATE em_actos_voluntarios SET  LAST_MODIFICATION_USER = '"+item.lastModificationUser+"', LAST_MODIFICATION_DATE = '"+item.lastModificationDate+"', CREATION_USER = '"+item.creationUser+"', CREATION_DATE = '"+item.creationDate+"', ID_ACTO = "+item.idActo+", ID_PERSONA = "+item.idPersona+", ID_TIPO_RELACION = "+item.idTipoRelacion+", OBSERVACIONES = '"+item.observaciones+"' WHERE ID_EM = "+item.idEm; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log('edit err:'+err);
    res.send(item);
    
  }); 
}); 
app.delete('/emsec/em_actos_voluntarios/:id', function(req, res){ 
  console.log('DELETE /emsec/em_actos_voluntarios/'+req.params.id); 
  var itemQuery = "DELETE FROM em_actos_voluntarios WHERE ID_EM = "+req.params.id; 
  console.log(itemQuery); 
  db.run(itemQuery, function(err){ 
  
  
  }); 
  res.send('OK'); 
}); 
//agenda REST implementation
app.post('/emsec/agenda', function(req, res){ 
  console.log('POST/emsec/agenda'); 
  var item = req.body; 
  var query =  " INSERT INTO agenda ( LAST_MODIFICATION_USER , LAST_MODIFICATION_DATE , CREATION_USER , CREATION_DATE , ID_EM , ID_ACTO , ID_PERSONA , DESCRIPCION , FECHA , HORA_INICIO , HORA_FIN ) VALUES ('"+item.lastModificationUser+"','"+item.lastModificationDate+"','"+item.creationUser+"','"+item.creationDate+"',"+item.idEm+","+item.idActo+","+item.idPersona+",'"+item.descripcion+"','"+item.fecha+"',"+item.horaInicio+","+item.horaFin+"); " ; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log(err); 
    res.send(item);
   
  }); 
}); 
app.get('/emsec/agenda', function(req, res){ 
  console.log('GET /emsec/agenda'); 
  var itemList=[]; 
  db.all('SELECT * FROM agenda', function(err, rows){ 
    console.log('rows count: '+rows.length);
    for(i = 0; i < rows.length; i++){ 
      var newItem = new Object();
      newItem.idAgenda = rows[i].ID_AGENDA;
      newItem.lastModificationUser = rows[i].LAST_MODIFICATION_USER;
      newItem.lastModificationDate = rows[i].LAST_MODIFICATION_DATE;
      newItem.creationUser = rows[i].CREATION_USER;
      newItem.creationDate = rows[i].CREATION_DATE;
      newItem.idEm = rows[i].ID_EM;
      newItem.idActo = rows[i].ID_ACTO;
      newItem.idPersona = rows[i].ID_PERSONA;
      newItem.descripcion = rows[i].DESCRIPCION;
      newItem.fecha = rows[i].FECHA;
      newItem.horaInicio = rows[i].HORA_INICIO;
      newItem.horaFin = rows[i].HORA_FIN;
      itemList.push(newItem);
    }
    res.send(itemList); 
  }); 
}); 
app.put('/emsec/agenda/:id', function(req, res){ 
  console.log('PUT /emsec/agenda/'+req.params.id); 
  var item = req.body; 
  var query =  " UPDATE agenda SET  LAST_MODIFICATION_USER = '"+item.lastModificationUser+"', LAST_MODIFICATION_DATE = '"+item.lastModificationDate+"', CREATION_USER = '"+item.creationUser+"', CREATION_DATE = '"+item.creationDate+"', ID_EM = "+item.idEm+", ID_ACTO = "+item.idActo+", ID_PERSONA = "+item.idPersona+", DESCRIPCION = '"+item.descripcion+"', FECHA = '"+item.fecha+"', HORA_INICIO = "+item.horaInicio+", HORA_FIN = "+item.horaFin+" WHERE ID_AGENDA = "+item.idAgenda; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log('edit err:'+err);
    res.send(item);
    
  }); 
}); 
app.delete('/emsec/agenda/:id', function(req, res){ 
  console.log('DELETE /emsec/agenda/'+req.params.id); 
  var itemQuery = "DELETE FROM agenda WHERE ID_AGENDA = "+req.params.id; 
  console.log(itemQuery); 
  db.run(itemQuery, function(err){ 
  
  
  }); 
  res.send('OK'); 
}); 
//tipo_relacion REST implementation
app.post('/emsec/tipo_relacion', function(req, res){ 
  console.log('POST/emsec/tipo_relacion'); 
  var item = req.body; 
  var query =  " INSERT INTO tipo_relacion ( LAST_MODIFICATION_USER , LAST_MODIFICATION_DATE , CREATION_USER , CREATION_DATE , DESCRIPCION , OBSERVACIONES , ES_VOLUNTARIO ) VALUES ('"+item.lastModificationUser+"','"+item.lastModificationDate+"','"+item.creationUser+"','"+item.creationDate+"','"+item.descripcion+"','"+item.observaciones+"',"+item.esVoluntario+"); " ; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log(err); 
    res.send(item);
   
  }); 
}); 
app.get('/emsec/tipo_relacion', function(req, res){ 
  console.log('GET /emsec/tipo_relacion'); 
  var itemList=[]; 
  db.all('SELECT * FROM tipo_relacion', function(err, rows){ 
    console.log('rows count: '+rows.length);
    for(i = 0; i < rows.length; i++){ 
      var newItem = new Object();
      newItem.idRelacion = rows[i].ID_RELACION;
      newItem.lastModificationUser = rows[i].LAST_MODIFICATION_USER;
      newItem.lastModificationDate = rows[i].LAST_MODIFICATION_DATE;
      newItem.creationUser = rows[i].CREATION_USER;
      newItem.creationDate = rows[i].CREATION_DATE;
      newItem.descripcion = rows[i].DESCRIPCION;
      newItem.observaciones = rows[i].OBSERVACIONES;
      newItem.esVoluntario = rows[i].ES_VOLUNTARIO;
      itemList.push(newItem);
    }
    res.send(itemList); 
  }); 
}); 
app.put('/emsec/tipo_relacion/:id', function(req, res){ 
  console.log('PUT /emsec/tipo_relacion/'+req.params.id); 
  var item = req.body; 
  var query =  " UPDATE tipo_relacion SET  LAST_MODIFICATION_USER = '"+item.lastModificationUser+"', LAST_MODIFICATION_DATE = '"+item.lastModificationDate+"', CREATION_USER = '"+item.creationUser+"', CREATION_DATE = '"+item.creationDate+"', DESCRIPCION = '"+item.descripcion+"', OBSERVACIONES = '"+item.observaciones+"', ES_VOLUNTARIO = "+item.esVoluntario+" WHERE ID_RELACION = "+item.idRelacion; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log('edit err:'+err);
    res.send(item);
    
  }); 
}); 
app.delete('/emsec/tipo_relacion/:id', function(req, res){ 
  console.log('DELETE /emsec/tipo_relacion/'+req.params.id); 
  var itemQuery = "DELETE FROM tipo_relacion WHERE ID_RELACION = "+req.params.id; 
  console.log(itemQuery); 
  db.run(itemQuery, function(err){ 
  
  
  }); 
  res.send('OK'); 
}); 
//traslados REST implementation
app.post('/emsec/traslados', function(req, res){ 
  console.log('POST/emsec/traslados'); 
  var item = req.body; 
  var query =  " INSERT INTO traslados ( LAST_MODIFICATION_USER , LAST_MODIFICATION_DATE , CREATION_USER , CREATION_DATE , ID_EM , ID_ACTO , ID_PERSONA , FECHA , CHOFER , AZAFATA , SALIDA , RECOGIDA , DESTINO , LLEGADA , ACOMPANANTES , OBSERVACIONES ) VALUES ('"+item.lastModificationUser+"','"+item.lastModificationDate+"','"+item.creationUser+"','"+item.creationDate+"',"+item.idEm+","+item.idActo+","+item.idPersona+",'"+item.fecha+"',"+item.chofer+","+item.azafata+","+item.salida+",'"+item.recogida+"','"+item.destino+"',"+item.llegada+",'"+item.acompanantes+"','"+item.observaciones+"'); " ; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log(err); 
    res.send(item);
   
  }); 
}); 
app.get('/emsec/traslados', function(req, res){ 
  console.log('GET /emsec/traslados'); 
  var itemList=[]; 
  db.all('SELECT * FROM traslados', function(err, rows){ 
    console.log('rows count: '+rows.length);
    for(i = 0; i < rows.length; i++){ 
      var newItem = new Object();
      newItem.idTraslado = rows[i].ID_TRASLADO;
      newItem.lastModificationUser = rows[i].LAST_MODIFICATION_USER;
      newItem.lastModificationDate = rows[i].LAST_MODIFICATION_DATE;
      newItem.creationUser = rows[i].CREATION_USER;
      newItem.creationDate = rows[i].CREATION_DATE;
      newItem.idEm = rows[i].ID_EM;
      newItem.idActo = rows[i].ID_ACTO;
      newItem.idPersona = rows[i].ID_PERSONA;
      newItem.fecha = rows[i].FECHA;
      newItem.chofer = rows[i].CHOFER;
      newItem.azafata = rows[i].AZAFATA;
      newItem.salida = rows[i].SALIDA;
      newItem.recogida = rows[i].RECOGIDA;
      newItem.destino = rows[i].DESTINO;
      newItem.llegada = rows[i].LLEGADA;
      newItem.acompanantes = rows[i].ACOMPANANTES;
      newItem.observaciones = rows[i].OBSERVACIONES;
      itemList.push(newItem);
    }
    res.send(itemList); 
  }); 
}); 
app.put('/emsec/traslados/:id', function(req, res){ 
  console.log('PUT /emsec/traslados/'+req.params.id); 
  var item = req.body; 
  var query =  " UPDATE traslados SET  LAST_MODIFICATION_USER = '"+item.lastModificationUser+"', LAST_MODIFICATION_DATE = '"+item.lastModificationDate+"', CREATION_USER = '"+item.creationUser+"', CREATION_DATE = '"+item.creationDate+"', ID_EM = "+item.idEm+", ID_ACTO = "+item.idActo+", ID_PERSONA = "+item.idPersona+", FECHA = '"+item.fecha+"', CHOFER = "+item.chofer+", AZAFATA = "+item.azafata+", SALIDA = "+item.salida+", RECOGIDA = '"+item.recogida+"', DESTINO = '"+item.destino+"', LLEGADA = "+item.llegada+", ACOMPANANTES = '"+item.acompanantes+"', OBSERVACIONES = '"+item.observaciones+"' WHERE ID_TRASLADO = "+item.idTraslado; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log('edit err:'+err);
    res.send(item);
    
  }); 
}); 
app.delete('/emsec/traslados/:id', function(req, res){ 
  console.log('DELETE /emsec/traslados/'+req.params.id); 
  var itemQuery = "DELETE FROM traslados WHERE ID_TRASLADO = "+req.params.id; 
  console.log(itemQuery); 
  db.run(itemQuery, function(err){ 
  
  
  }); 
  res.send('OK'); 
}); 
//actos REST implementation
app.post('/emsec/actos', function(req, res){ 
  console.log('POST/emsec/actos'); 
  var item = req.body; 
  var query =  " INSERT INTO actos ( LAST_MODIFICATION_USER , LAST_MODIFICATION_DATE , CREATION_USER , CREATION_DATE , ID_EM , DESCRIPCION , DIA , INICIO , FIN , ASISTENCIA , AVISOS , TURNO_PREG , TURNO_PREG_MODO , MICRO_MESA , MICRO_PIE , MICRO_INALAMBRICO , MAT_PROYECTAR , DESC_PROYECCION , TRAD_ACTO , IDIOMA_ACTO , MOD_ACTO , TRAD_PONENTE , IDIOMA_PONENTE , MOD_PONENTE , COMENTARIOS , RESERV_ASIENTOS , DET_RESERV_ASIENTOS , INC_MEDIOS_TEC , INC_SALA , PUNT_COMIENZO , PUNT_FIN , RESP_SALA , VAL_ACTO , COMENT_FINAL , SALA , DIST_MESA , PATROCINADOR , OBS_PATROCINADOR , AZAFATA , OTRAS_NECESIDADES , AFORO , QUEDARON_FUERA , OTRAS_VALORACIONES , TRADUCTOR_ACTO , TRADUCTOR_PONENTE , RESPONSABLE_ACTO ) VALUES ('"+item.lastModificationUser+"','"+item.lastModificationDate+"','"+item.creationUser+"','"+item.creationDate+"',"+item.idEm+",'"+item.descripcion+"','"+item.dia+"','"+item.inicio+"','"+item.fin+"',"+item.asistencia+",'"+item.avisos+"',"+item.turnoPreg+",'"+item.turnoPregModo+"',"+item.microMesa+","+item.microPie+","+item.microInalambrico+","+item.matProyectar+",'"+item.descProyeccion+"',"+item.tradActo+",'"+item.idiomaActo+"','"+item.modoActo+"',"+item.tradPonente+",'"+item.idiomaPonente+"','"+item.modoPonente+"','"+item.comentarios+"',"+item.reservAsientos+",'"+item.detReservAsientos+"','"+item.incMediosTec+"','"+item.incSala+"','"+item.puntComienzo+"','"+item.puntFin+"','"+item.respSala+"','"+item.valActo+"','"+item.comentFinal+"',"+item.sala+",'"+item.distMesa+"',"+item.patrocinador+",'"+item.obsPatrocinador+"',"+item.azafata+",'"+item.otrasNecesidades+"',"+item.aforo+","+item.quedaronFuera+",'"+item.otrasValoraciones+"',"+item.traductorActo+","+item.traductorPonente+","+item.responsableActo+"); " ; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log(err); 
    res.send(item);
   
  }); 
}); 
app.get('/emsec/actos', function(req, res){ 
  console.log('GET /emsec/actos'); 
  var itemList=[]; 
  db.all('SELECT * FROM actos', function(err, rows){ 
    console.log('rows count: '+rows.length);
    for(i = 0; i < rows.length; i++){ 
      var newItem = new Object();
      newItem.idActo = rows[i].ID_ACTO;
      newItem.lastModificationUser = rows[i].LAST_MODIFICATION_USER;
      newItem.lastModificationDate = rows[i].LAST_MODIFICATION_DATE;
      newItem.creationUser = rows[i].CREATION_USER;
      newItem.creationDate = rows[i].CREATION_DATE;
      newItem.idEm = rows[i].ID_EM;
      newItem.descripcion = rows[i].DESCRIPCION;
      newItem.dia = rows[i].DIA;
      newItem.inicio = rows[i].INICIO;
      newItem.fin = rows[i].FIN;
      newItem.asistencia = rows[i].ASISTENCIA;
      newItem.avisos = rows[i].AVISOS;
      newItem.turnoPreg = rows[i].TURNO_PREG;
      newItem.turnoPregModo = rows[i].TURNO_PREG_MODO;
      newItem.microMesa = rows[i].MICRO_MESA;
      newItem.microPie = rows[i].MICRO_PIE;
      newItem.microInalambrico = rows[i].MICRO_INALAMBRICO;
      newItem.matProyectar = rows[i].MAT_PROYECTAR;
      newItem.descProyeccion = rows[i].DESC_PROYECCION;
      newItem.tradActo = rows[i].TRAD_ACTO;
      newItem.idiomaActo = rows[i].IDIOMA_ACTO;
      newItem.modoActo = rows[i].MOD_ACTO;
      newItem.tradPonente = rows[i].TRAD_PONENTE;
      newItem.idiomaPonente = rows[i].IDIOMA_PONENTE;
      newItem.modoPonente = rows[i].MOD_PONENTE;
      newItem.comentarios = rows[i].COMENTARIOS;
      newItem.reservAsientos = rows[i].RESERV_ASIENTOS;
      newItem.detReservAsientos = rows[i].DET_RESERV_ASIENTOS;
      newItem.incMediosTec = rows[i].INC_MEDIOS_TEC;
      newItem.incSala = rows[i].INC_SALA;
      newItem.puntComienzo = rows[i].PUNT_COMIENZO;
      newItem.puntFin = rows[i].PUNT_FIN;
      newItem.respSala = rows[i].RESP_SALA;
      newItem.valActo = rows[i].VAL_ACTO;
      newItem.comentFinal = rows[i].COMENT_FINAL;
      newItem.sala = rows[i].SALA;
      newItem.distMesa = rows[i].DIST_MESA;
      newItem.patrocinador = rows[i].PATROCINADOR;
      newItem.obsPatrocinador = rows[i].OBS_PATROCINADOR;
      newItem.azafata = rows[i].AZAFATA;
      newItem.otrasNecesidades = rows[i].OTRAS_NECESIDADES;
      newItem.aforo = rows[i].AFORO;
      newItem.quedaronFuera = rows[i].QUEDARON_FUERA;
      newItem.otrasValoraciones = rows[i].OTRAS_VALORACIONES;
      newItem.traductorActo = rows[i].TRADUCTOR_ACTO;
      newItem.traductorPonente = rows[i].TRADUCTOR_PONENTE;
      newItem.responsableActo = rows[i].RESPONSABLE_ACTO;
      itemList.push(newItem);
    }
    res.send(itemList); 
  }); 
}); 
app.put('/emsec/actos/:id', function(req, res){ 
  console.log('PUT /emsec/actos/'+req.params.id); 
  var item = req.body; 
  var query =  " UPDATE actos SET  LAST_MODIFICATION_USER = '"+item.lastModificationUser+"', LAST_MODIFICATION_DATE = '"+item.lastModificationDate+"', CREATION_USER = '"+item.creationUser+"', CREATION_DATE = '"+item.creationDate+"', ID_EM = "+item.idEm+", DESCRIPCION = '"+item.descripcion+"', DIA = '"+item.dia+"', INICIO = '"+item.inicio+"', FIN = '"+item.fin+"', ASISTENCIA = "+item.asistencia+", AVISOS = '"+item.avisos+"', TURNO_PREG = "+item.turnoPreg+", TURNO_PREG_MODO = '"+item.turnoPregModo+"', MICRO_MESA = "+item.microMesa+", MICRO_PIE = "+item.microPie+", MICRO_INALAMBRICO = "+item.microInalambrico+", MAT_PROYECTAR = "+item.matProyectar+", DESC_PROYECCION = '"+item.descProyeccion+"', TRAD_ACTO = "+item.tradActo+", IDIOMA_ACTO = '"+item.idiomaActo+"', MOD_ACTO = '"+item.modoActo+"', TRAD_PONENTE = "+item.tradPonente+", IDIOMA_PONENTE = '"+item.idiomaPonente+"', MOD_PONENTE = '"+item.modoPonente+"', COMENTARIOS = '"+item.comentarios+"', RESERV_ASIENTOS = "+item.reservAsientos+", DET_RESERV_ASIENTOS = '"+item.detReservAsientos+"', INC_MEDIOS_TEC = '"+item.incMediosTec+"', INC_SALA = '"+item.incSala+"', PUNT_COMIENZO = '"+item.puntComienzo+"', PUNT_FIN = '"+item.puntFin+"', RESP_SALA = '"+item.respSala+"', VAL_ACTO = '"+item.valActo+"', COMENT_FINAL = '"+item.comentFinal+"', SALA = "+item.sala+", DIST_MESA = '"+item.distMesa+"', PATROCINADOR = "+item.patrocinador+", OBS_PATROCINADOR = '"+item.obsPatrocinador+"', AZAFATA = "+item.azafata+", OTRAS_NECESIDADES = '"+item.otrasNecesidades+"', AFORO = "+item.aforo+", QUEDARON_FUERA = "+item.quedaronFuera+", OTRAS_VALORACIONES = '"+item.otrasValoraciones+"', TRADUCTOR_ACTO = "+item.traductorActo+", TRADUCTOR_PONENTE = "+item.traductorPonente+", RESPONSABLE_ACTO = "+item.responsableActo+" WHERE ID_ACTO = "+item.idActo; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log('edit err:'+err);
    res.send(item);
    
  }); 
}); 
app.delete('/emsec/actos/:id', function(req, res){ 
  console.log('DELETE /emsec/actos/'+req.params.id); 
  var itemQuery = "DELETE FROM actos WHERE ID_ACTO = "+req.params.id; 
  console.log(itemQuery); 
  db.run(itemQuery, function(err){ 
  
  
  }); 
  res.send('OK'); 
}); 
//datos_em REST implementation
app.post('/emsec/datos_em', function(req, res){ 
  console.log('POST/emsec/datos_em'); 
  var item = req.body; 
  var query =  " INSERT INTO datos_em ( LAST_MODIFICATION_USER , LAST_MODIFICATION_DATE , CREATION_USER , CREATION_DATE , FECHAS , LEMA , OBSERVACIONES , LUGAR ) VALUES ('"+item.lastModificationUser+"','"+item.lastModificationDate+"','"+item.creationUser+"','"+item.creationDate+"','"+item.fechas+"','"+item.lema+"','"+item.observaciones+"','"+item.lugar+"'); " ; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log(err); 
    res.send(item);
   
  }); 
}); 
app.get('/emsec/datos_em', function(req, res){ 
  console.log('GET /emsec/datos_em'); 
  var itemList=[]; 
  db.all('SELECT * FROM datos_em', function(err, rows){ 
    console.log('rows count: '+rows.length);
    for(i = 0; i < rows.length; i++){ 
      var newItem = new Object();
      newItem.idEm = rows[i].ID_EM;
      newItem.lastModificationUser = rows[i].LAST_MODIFICATION_USER;
      newItem.lastModificationDate = rows[i].LAST_MODIFICATION_DATE;
      newItem.creationUser = rows[i].CREATION_USER;
      newItem.creationDate = rows[i].CREATION_DATE;
      newItem.fechas = rows[i].FECHAS;
      newItem.lema = rows[i].LEMA;
      newItem.observaciones = rows[i].OBSERVACIONES;
      newItem.lugar = rows[i].LUGAR;
      itemList.push(newItem);
    }
    res.send(itemList); 
  }); 
}); 
app.put('/emsec/datos_em/:id', function(req, res){ 
  console.log('PUT /emsec/datos_em/'+req.params.id); 
  var item = req.body; 
  var query =  " UPDATE datos_em SET  LAST_MODIFICATION_USER = '"+item.lastModificationUser+"', LAST_MODIFICATION_DATE = '"+item.lastModificationDate+"', CREATION_USER = '"+item.creationUser+"', CREATION_DATE = '"+item.creationDate+"', FECHAS = '"+item.fechas+"', LEMA = '"+item.lema+"', OBSERVACIONES = '"+item.observaciones+"', LUGAR = '"+item.lugar+"' WHERE ID_EM = "+item.idEm; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log('edit err:'+err);
    res.send(item);
    
  }); 
}); 
app.delete('/emsec/datos_em/:id', function(req, res){ 
  console.log('DELETE /emsec/datos_em/'+req.params.id); 
  var itemQuery = "DELETE FROM datos_em WHERE ID_EM = "+req.params.id; 
  console.log(itemQuery); 
  db.run(itemQuery, function(err){ 
  
  
  }); 
  res.send('OK'); 
}); 
//personas REST implementation
app.post('/emsec/personas', function(req, res){ 
  console.log('POST/emsec/personas'); 
  var item = req.body; 
  var query =  " INSERT INTO personas ( ETIQUETA , ALTA , BAJA , TRATAMIENTO , LAST_MODIFICATION_USER , LAST_MODIFICATION_DATE , CREATION_USER , CREATION_DATE , NOMBRE , APELLIDOS , EMPRESA , CARGO , DIRECCION , DIRECCION2 , CP , LOCALIDAD , PROVINCIA , PAIS , TFNO_DOMICILIO , TFNO_OFICINA , TFNO_MOVIL , EMAIL , EMAIL2 , OBSERVACIONES , PROFESION , PERSONA_REF , BIOGRAFIA , IDIOMA ) VALUES ("+item.etiqueta+",'"+item.alta+"','"+item.baja+"','"+item.tratamiento+"','"+item.lastModificationUser+"','"+item.lastModificationDate+"','"+item.creationUser+"','"+item.creationDate+"','"+item.nombre+"','"+item.apellidos+"','"+item.empresa+"','"+item.cargo+"','"+item.direccion+"','"+item.direccion2+"','"+item.cp+"','"+item.localidad+"','"+item.provincia+"','"+item.pais+"','"+item.tfnoDomicilio+"','"+item.tfnoOficina+"','"+item.tfnoMovil+"','"+item.email+"','"+item.email2+"','"+item.observaciones+"',"+item.profesion+",'"+item.personaRef+"','"+item.biografia+"','"+item.idioma+"'); " ; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log(err); 
    res.send(item);
   
  }); 
}); 
app.get('/emsec/personas', function(req, res){ 
  console.log('GET /emsec/personas'); 
  var itemList=[]; 
  db.all('SELECT * FROM personas', function(err, rows){ 
    console.log('rows count: '+rows.length);
    for(i = 0; i < rows.length; i++){ 
      var newItem = new Object();
      newItem.idPersona = rows[i].ID_PERSONA;
      newItem.etiqueta = rows[i].ETIQUETA;
      newItem.alta = rows[i].ALTA;
      newItem.baja = rows[i].BAJA;
      newItem.tratamiento = rows[i].TRATAMIENTO;
      newItem.lastModificationUser = rows[i].LAST_MODIFICATION_USER;
      newItem.lastModificationDate = rows[i].LAST_MODIFICATION_DATE;
      newItem.creationUser = rows[i].CREATION_USER;
      newItem.creationDate = rows[i].CREATION_DATE;
      newItem.nombre = rows[i].NOMBRE;
      newItem.apellidos = rows[i].APELLIDOS;
      newItem.empresa = rows[i].EMPRESA;
      newItem.cargo = rows[i].CARGO;
      newItem.direccion = rows[i].DIRECCION;
      newItem.direccion2 = rows[i].DIRECCION2;
      newItem.cp = rows[i].CP;
      newItem.localidad = rows[i].LOCALIDAD;
      newItem.provincia = rows[i].PROVINCIA;
      newItem.pais = rows[i].PAIS;
      newItem.tfnoDomicilio = rows[i].TFNO_DOMICILIO;
      newItem.tfnoOficina = rows[i].TFNO_OFICINA;
      newItem.tfnoMovil = rows[i].TFNO_MOVIL;
      newItem.email = rows[i].EMAIL;
      newItem.email2 = rows[i].EMAIL2;
      newItem.observaciones = rows[i].OBSERVACIONES;
      newItem.profesion = rows[i].PROFESION;
      newItem.personaRef = rows[i].PERSONA_REF;
      newItem.biografia = rows[i].BIOGRAFIA;
      newItem.idioma = rows[i].IDIOMA;
      itemList.push(newItem);
    }
    res.send(itemList); 
  }); 
}); 
app.put('/emsec/personas/:id', function(req, res){ 
  console.log('PUT /emsec/personas/'+req.params.id); 
  var item = req.body; 
  var query =  " UPDATE personas SET  ETIQUETA = "+item.etiqueta+", ALTA = '"+item.alta+"', BAJA = '"+item.baja+"', TRATAMIENTO = '"+item.tratamiento+"', LAST_MODIFICATION_USER = '"+item.lastModificationUser+"', LAST_MODIFICATION_DATE = '"+item.lastModificationDate+"', CREATION_USER = '"+item.creationUser+"', CREATION_DATE = '"+item.creationDate+"', NOMBRE = '"+item.nombre+"', APELLIDOS = '"+item.apellidos+"', EMPRESA = '"+item.empresa+"', CARGO = '"+item.cargo+"', DIRECCION = '"+item.direccion+"', DIRECCION2 = '"+item.direccion2+"', CP = '"+item.cp+"', LOCALIDAD = '"+item.localidad+"', PROVINCIA = '"+item.provincia+"', PAIS = '"+item.pais+"', TFNO_DOMICILIO = '"+item.tfnoDomicilio+"', TFNO_OFICINA = '"+item.tfnoOficina+"', TFNO_MOVIL = '"+item.tfnoMovil+"', EMAIL = '"+item.email+"', EMAIL2 = '"+item.email2+"', OBSERVACIONES = '"+item.observaciones+"', PROFESION = "+item.profesion+", PERSONA_REF = '"+item.personaRef+"', BIOGRAFIA = '"+item.biografia+"', IDIOMA = '"+item.idioma+"' WHERE ID_PERSONA = "+item.idPersona; 
  console.log(query); 
  db.run(query, function(err){ 
    console.log('edit err:'+err);
    res.send(item);
    
  }); 
}); 
app.delete('/emsec/personas/:id', function(req, res){ 
  console.log('DELETE /emsec/personas/'+req.params.id); 
  var itemQuery = "DELETE FROM personas WHERE ID_PERSONA = "+req.params.id; 
  console.log(itemQuery); 
  db.run(itemQuery, function(err){ 
  
  
  }); 
  res.send('OK'); 
}); 
var port = process.env.PORT || 8080; 
console.log("port: "+port); 
app.listen(port); 
