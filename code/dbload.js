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
  sqlTable =  ' CREATE TABLE IF NOT EXISTS datos_em( ID_EM INTEGER PRIMARY KEY, LAST_MODIFICATION_USER TEXT, LAST_MODIFICATION_DATE TEXT, CREATION_USER TEXT, CREATION_DATE TEXT, FECHAS TEXT, LEMA TEXT, OBSERVACIONES TEXT, LUGAR TEXT); ' ; 
  console.log(sqlTable); 
  db.run(sqlTable); 
  //Index: 11 12 
  sqlTable =  ' CREATE TABLE IF NOT EXISTS personas( ID_PERSONA INTEGER PRIMARY KEY AUTOINCREMENT , ETIQUETA INTEGER, ALTA TEXT, BAJA TEXT, TRATAMIENTO TEXT, LAST_MODIFICATION_USER TEXT, LAST_MODIFICATION_DATE TEXT, CREATION_USER TEXT, CREATION_DATE TEXT, NOMBRE TEXT, APELLIDOS TEXT, EMPRESA TEXT, CARGO TEXT, DIRECCION TEXT, DIRECCION2 TEXT, CP TEXT, LOCALIDAD TEXT, PROVINCIA TEXT, PAIS TEXT, TFNO_DOMICILIO TEXT, TFNO_OFICINA TEXT, TFNO_MOVIL TEXT, EMAIL TEXT, EMAIL2 TEXT, OBSERVACIONES TEXT, PROFESION INTEGER, PERSONA_REF TEXT, BIOGRAFIA TEXT, IDIOMA TEXT); ' ; 
  console.log(sqlTable); 
  db.run(sqlTable); 
  var query = '';
  query = " DELETE FROM datos_em ";
  console.log("\r\nQuery: "+query);
  db.run(query, function(err){
    if(err != null){
      console.log("Datos em load failed: "+err);
    }
  });

  var queryHeader = ' INSERT INTO datos_em (ID_EM, FECHAS, LEMA, OBSERVACIONES, LUGAR) ';
  var insertArray = [];
  insertArray.push(" VALUES (1990, '1 al 5 de Enero', 'Testing Web', 'Datos de testing para la web e informes', 'Casa de campo'); \r\n ");
  insertArray.push(" VALUES (2003, 'Junio', 'La primera politica es vivir', '', 'Recinto ferial de la casa de campo'); \r\n ");
  insertArray.push(" VALUES (2005, 'Junio', 'La libertad es el don mas grande que a los hombres dieron los cielos\"', '', 'Recinto ferial de la casa de campo'); \r\n ");
  insertArray.push(" VALUES (2006, '23 a 25 de Junio', 'El riesgo de educar', '', 'Recinto ferial de la casa de campo'); \r\n ");
  insertArray.push(" VALUES (2007, '19 a 21 de abril', 'Valor para la apertura de la razon', '', 'Recinto ferial de la casa de campo'); \r\n ");
  insertArray.push(" VALUES (2008, '4 a 6 de abril', 'La verdad es el alimento de la vida', '', 'Recinto ferial de la casa de campo'); \r\n ");
  insertArray.push(" VALUES (2009, '25 a 29 de marzo', 'Una nueva laicidad. Buscadores de infinito, constructores de la historia', '', 'Recinto ferial de la casa de campo'); \r\n ");
  insertArray.push(" VALUES (2010, '9 a 11 de abril', 'Si los hombres no construyen, ¿como viviran?', '', 'Recinto ferial de la casa de campo'); \r\n ");
  insertArray.push(" VALUES (2011, '1 a 3 de abril', 'Inteligencia de la fe, inteligencia de la realidad', '', 'Recinto ferial de la casa de campo'); \r\n ");
  insertArray.push(" VALUES (2012, '23 a 25 de marzo', 'Las fuerzas que cambian la historia son las mismas que cambian el corazon del hombre', '', 'Recinto ferial de la casa de campo'); \r\n ");
  insertArray.push(" VALUES (2013, '15 a 17 de marzo', 'Un imprevisto es la unica esperanza', '', 'Recinto ferial de la casa de campo'); \r\n ");
  insertArray.push(" VALUES (2014, '3 a 6 de abril', 'Buenas razones para la vida en comun', '', 'Recinto ferial de la casa de campo'); \r\n ");
  insertArray.push(" VALUES (2015, '0 a 12 de abril', 'Infinitos deseos. Deseo de infinito', '', 'Recinto ferial de la casa de campo'); \r\n ");
  insertArray.push(" VALUES (2016, 'Del 8 al 10 de Abril', 'Europa, un nuevo inicio', '', 'Pabellon Satelite Recintos Feriales Casa Campo'); \r\n ");
  insertArray.push(" VALUES (2017, 'Del 21 al 23 Abril 2017', 'Heridos por la belleza', '', 'Pabellón de Cristal. Recinto Ferial Casa de Campo'); \r\n ");
  
  for(var insertIndex = 0; insertIndex < insertArray.length; insertIndex++){
    query = queryHeader + insertArray[insertIndex];
    console.log("\r\nQuery: "+query);
    db.run(query, function(err){
      if(err != null){
        console.log("Datos em load failed: "+err);
      }
    });
  }
}); 
