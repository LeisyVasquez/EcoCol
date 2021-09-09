/*Establecimiento del esquema*/

/*Aquí se debe cambiar la contraseña por la que se tenga en el gestor*/
CONNECT SYSTEM/leisy123; 
ALTER SESSION SET CONTAINER=CDB$ROOT;
CREATE TABLESPACE TablespaceEcoCol LOGGING DATAFILE 'C:\DatabaseEcoCol\TablespaceEcoCol.dbf' SIZE 
15M EXTENT MANAGEMENT LOCAL SEGMENT SPACE MANAGEMENT AUTO;
ALTER SESSION set "_ORACLE_SCRIPT"=true; 
CREATE USER admin PROFILE DEFAULT IDENTIFIED BY 123 DEFAULT TABLESPACE TablespaceEcoCol TEMPORARY
TABLESPACE TEMP ACCOUNT UNLOCK; 
GRANT CONNECT, RESOURCE, DBA TO admin;  
CONNECT admin/123;
/*DROP USER admin CASCADE; 
START C:\Users\leisy\Desktop\EcoCol\server\database\scriptOracle.sql
DROP TABLESPACE TablespaceEcoCol INCLUDING CONTENTS AND DATAFILES;*/


/* Estructura de la base de datos */

CREATE TABLE users (
  id INTEGER,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(80) NOT NULL,
  password VARCHAR(20) NOT NULL,
  typeUser VARCHAR(10) NOT NULL,
  birthDay DATE,
  profilePhoto VARCHAR(1000), 
  PRIMARY KEY (id)
) TABLESPACE TablespaceEcoCol; 

CREATE TABLE cities (
  code INTEGER,
  name VARCHAR(85) NOT NULL,
  PRIMARY KEY (code)
) TABLESPACE TablespaceEcoCol;

INSERT INTO cities (code, name) VALUES(05079, 'Barbosa'); 
INSERT INTO cities (code, name) VALUES(05088, 'Bello'); 
INSERT INTO cities (code, name) VALUES(05129, 'Caldas'); 
INSERT INTO cities (code, name) VALUES(05212, 'Copacabana'); 
INSERT INTO cities (code, name) VALUES(05266, 'Envigado'); 
INSERT INTO cities (code, name) VALUES(05308, 'Girardota'); 
INSERT INTO cities (code, name) VALUES(05360, 'Itagüi'); 
INSERT INTO cities (code, name) VALUES(05380, 'La Estrella'); 
INSERT INTO cities (code, name) VALUES(05001, 'Medellín'); 
INSERT INTO cities (code, name) VALUES(05631, 'Sabaneta'); 

CREATE SEQUENCE seq_id_place
  START WITH 1
  INCREMENT BY 1; 



drop table PLACES cascade constraints;
CREATE TABLE places (
   id INTEGER,
   codeCity INTEGER NOT NULL, 
   name VARCHAR(255) NOT NULL,
   hashCodeQR VARCHAR(255),
   codeLocation VARCHAR(255),
   description VARCHAR(800) NOT NULL,
   recommendations VARCHAR(255) NOT NULL,
   address VARCHAR(150) NOT NULL,
   hours VARCHAR(200) NOT NULL,
   entryPrice VARCHAR(200) NOT NULL,
   fauna VARCHAR(500) NOT NULL,
   flora VARCHAR(500) NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (codeCity) REFERENCES cities(code)
) TABLESPACE TablespaceEcoCol; 

INSERT INTO(id, codeCity, name, hashCodeQR, codeLocation, description, recommendations, address, hours, entryPrice, fauna, flora)
VALUES (1, )
CREATE TABLE favoritedAndVisitedPlaces (
  idUser INTEGER, 
  idPlace INTEGER,
  detail VARCHAR(20) NOT NULL,
  PRIMARY KEY (idUser, idPlace),
  FOREIGN KEY (idUser) REFERENCES users(id),
  FOREIGN KEY (idPlace) REFERENCES places(id)
) TABLESPACE TablespaceEcoCol; 

CREATE TABLE photoPlaces (
   id INTEGER,
   idPlace INTEGER NOT NULL,
   photoPath VARCHAR(1000) NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (idPlace) REFERENCES places(id)
) TABLESPACE TablespaceEcoCol; 

INSERT INTO places (id, codeCity, name, hashCodeQR, codeLocation, description, recommendations, address, hours, entryPrice, fauna, flora) 
VALUES(seq_id_place.nextval, 05266, 'Reserva Natural Chorro de Las Campanas', 'ASFGTY', 'Se encuentra en la montaña', 
'Allí comenzará nuestro ascenso por un potrero que nos ofrecerá la vista del Valle de Aburrá entre. Proseguiremos en medio a bosques de pinos hasta llegar al borde de la Quebrada La Miel. Abandonaremos su cauce y comenzaremos un exigente ascenso entre pinos muy empinado (si tenemos suerte podremos observar algún Cacique Candela, ave endémica de estos bosques) y con ayuda de cuerdas llegaremos hasta un mirador, donde después de tomar un pequeño descanso, reanudaremos nuestra aventura bajando entre rocas, ayudados de cuerdas.',
'Realizar el recorrido con zapatos cómodos, ropa ligera, llevar agua, gorra o sombrero. -Usar lentes oscuros, nuestro clima es tropical todo el año. -Ser amigable con el medio ambiente, proteger el patrimonio arquitectónico y cultural.',
'Envigado, Antioquia', 'Abierto las 24 horas', 'Gratis', 'Tapir andino, oso perezoso, armadillo, mono titi', 'Magnolias, palmas, helechos.' ); 

INSERT INTO places (id, codeCity, name, hashCodeQR, codeLocation, description, recommendations, address, hours, entryPrice, fauna, flora) 
VALUES(seq_id_place.nextval, 05001, 'Parque Arví', 'ghasgdhas123', 'En el jardín encantado', 'El Parque Arví es un parque público abierto de 1761 hectáreas de bosque, pertenecientes a la reserva del río Nare, donde convergen bosques nativos y de plantación. ​​​Se concibe como una estrategia para impulsar nuevas y necesarias formas de ocupación territorial, a través del aprovechamiento de los bienes y servicios ambientales en la búsqueda de la sostenibilidad, constituyéndose en un aula viva para la educación ambiental y cultural. Igualmente se plantea dentro del ordenamiento territorial como una barrera natural entre lo urbano y lo rural.', 
' Respeta los habitantes y las costumbres del territorio. -Camina siempre en compañía de un Guía o Informador Turístico y por los senderos habilitados. -Mantén limpios los espacios y las áreas que visites y uses.',
'Via a Piedras Blancas, Medellín, Antioquia', 'desde las 9:00AM hasta las 18:00PM', '12.000 COP por persona', 
'Condor andino, oropendola chocoana, carpintero, anolis de calima, lagartija de hojarasca.', 'crisantemos, claveles, lirios, hortensias.');










