-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 25-07-2017 a las 23:29:49
-- Versión del servidor: 5.6.35-log
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `arsenio_sec_em`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesiones`
--

CREATE TABLE `profesiones` (
  `ID_PROFESION` bigint(20) NOT NULL COMMENT 'Id. Profesion',
  `LAST_MODIFICATION_USER` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
  `LAST_MODIFICATION_DATE` timestamp NULL DEFAULT NULL,
  `CREATION_USER` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `CREATION_DATE` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `DESCRIPCION` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL COMMENT 'Descripcion de la profesion'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `profesiones`
--

INSERT INTO `profesiones` (`ID_PROFESION`, `LAST_MODIFICATION_USER`, `LAST_MODIFICATION_DATE`, `CREATION_USER`, `CREATION_DATE`, `DESCRIPCION`) VALUES
(1, NULL, NULL, '', '0000-00-00 00:00:00', 'Abogado'),
(2, NULL, NULL, '', '0000-00-00 00:00:00', 'Actuario de Seguros'),
(3, NULL, NULL, '', '0000-00-00 00:00:00', 'Administrador de fincas'),
(4, NULL, NULL, '', '0000-00-00 00:00:00', 'Agente Comercial'),
(5, NULL, NULL, '', '0000-00-00 00:00:00', 'Agente de la Propiedad Industrial'),
(6, NULL, NULL, '', '0000-00-00 00:00:00', 'Agente de la Propiedad Inmobiliaria'),
(7, NULL, NULL, '', '0000-00-00 00:00:00', 'Agente y comisionista de aduanas'),
(8, NULL, NULL, '', '0000-00-00 00:00:00', 'Arquitecto Tecnico'),
(9, NULL, NULL, '', '0000-00-00 00:00:00', 'Artillero-barrenista'),
(10, NULL, NULL, '', '0000-00-00 00:00:00', 'Auditor de Cuentas'),
(11, NULL, NULL, '', '0000-00-00 00:00:00', 'Auxiliar de enfermeria'),
(12, NULL, NULL, '', '0000-00-00 00:00:00', 'Biologo'),
(13, NULL, NULL, '', '0000-00-00 00:00:00', 'Buceador'),
(14, NULL, NULL, '', '0000-00-00 00:00:00', 'Contramaestre electricista'),
(15, NULL, NULL, '', '0000-00-00 00:00:00', 'Decorador'),
(16, NULL, NULL, '', '0000-00-00 00:00:00', 'Delineante'),
(17, NULL, NULL, '', '0000-00-00 00:00:00', 'Diplomado en Ciencias Empresariales y Profesor Mercantil'),
(18, NULL, NULL, '', '0000-00-00 00:00:00', 'Diplomado en Trabajo Social'),
(19, NULL, NULL, '', '0000-00-00 00:00:00', 'Directores de escuelas de conductores'),
(20, NULL, NULL, '', '0000-00-00 00:00:00', 'Educador infantill'),
(21, NULL, NULL, '', '0000-00-00 00:00:00', 'Electricista'),
(22, NULL, NULL, '', '0000-00-00 00:00:00', 'Fisico'),
(23, NULL, NULL, '', '0000-00-00 00:00:00', 'Fisioterapeuta'),
(24, NULL, NULL, '', '0000-00-00 00:00:00', 'Geologo'),
(25, NULL, NULL, '', '0000-00-00 00:00:00', 'Gestor Administrativo'),
(26, NULL, NULL, '', '0000-00-00 00:00:00', 'Guia de turismo-Guia interprete de turismo'),
(27, NULL, NULL, '', '0000-00-00 00:00:00', 'Habilitado de Clases Pasivas'),
(28, NULL, NULL, '', '0000-00-00 00:00:00', 'Higienista dental'),
(29, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero'),
(30, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero Agronomo'),
(31, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero de Armamento y Material'),
(32, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero de Armas Navales'),
(33, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero de Caminos, Canales y Puertos'),
(34, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero de Construccion y Electricidad'),
(35, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero de Minas'),
(36, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero de Montes'),
(37, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero de Telecomunicacion'),
(38, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero Industrial'),
(39, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero Naval'),
(40, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero Tecnico Aeronautico'),
(41, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero Tecnico Agricola'),
(42, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero Tecnico de Minas'),
(43, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero Tecnico de Obras Publicas'),
(44, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero Tecnico de Telecomunicacion'),
(45, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero Tecnico en Topografia'),
(46, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero Tecnico Forestal'),
(47, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero Tecnico Industrial'),
(48, NULL, NULL, '', '0000-00-00 00:00:00', 'Ingeniero Tecnico Naval'),
(49, NULL, NULL, '', '0000-00-00 00:00:00', 'Instalador de aparatos a presion'),
(50, NULL, NULL, '', '0000-00-00 00:00:00', 'Instalador de fontaneria'),
(51, NULL, NULL, '', '0000-00-00 00:00:00', 'Instalador frigorifico · lnstalador de calefaccion y climatizacion'),
(52, NULL, NULL, '', '0000-00-00 00:00:00', 'Interprete Jurado'),
(53, NULL, NULL, '', '0000-00-00 00:00:00', 'Jefe de Maquinas de la Marina Mercante'),
(54, NULL, NULL, '', '0000-00-00 00:00:00', 'lnstalador de gas'),
(55, NULL, NULL, '', '0000-00-00 00:00:00', 'lnstalador nuclear y radioactiva'),
(56, NULL, NULL, '', '0000-00-00 00:00:00', 'lnstalador-montador electricista'),
(57, NULL, NULL, '', '0000-00-00 00:00:00', 'Logopeda'),
(58, NULL, NULL, '', '0000-00-00 00:00:00', 'Maestro'),
(59, NULL, NULL, '', '0000-00-00 00:00:00', 'Marinero cocinero'),
(60, NULL, NULL, '', '0000-00-00 00:00:00', 'Marinero de pesca'),
(61, NULL, NULL, '', '0000-00-00 00:00:00', 'Marinero electricista'),
(62, NULL, NULL, '', '0000-00-00 00:00:00', 'Marinero mecanico'),
(63, NULL, NULL, '', '0000-00-00 00:00:00', 'Mecanico'),
(64, NULL, NULL, '', '0000-00-00 00:00:00', 'Monitor de iniciacion al buceo'),
(65, NULL, NULL, '', '0000-00-00 00:00:00', 'Motorista naval'),
(66, NULL, NULL, '', '0000-00-00 00:00:00', 'Oficial de Maquinas'),
(67, NULL, NULL, '', '0000-00-00 00:00:00', 'Oficial Radioelectronico'),
(68, NULL, NULL, '', '0000-00-00 00:00:00', 'Operador de muelles o terminales de mercancias peligrosas'),
(69, NULL, NULL, '', '0000-00-00 00:00:00', 'optico'),
(70, NULL, NULL, '', '0000-00-00 00:00:00', 'Otros'),
(71, NULL, NULL, '', '0000-00-00 00:00:00', 'Patron costero polivalente. · Patron de litoral del sector de la pesca maritima'),
(72, NULL, NULL, '', '0000-00-00 00:00:00', 'Patron de Altura del sector de la Marina Mercante'),
(73, NULL, NULL, '', '0000-00-00 00:00:00', 'Patron de cabotaje del sector de la Marina mercante'),
(74, NULL, NULL, '', '0000-00-00 00:00:00', 'Patron de litoral del sector de la Marina Mercante'),
(75, NULL, NULL, '', '0000-00-00 00:00:00', 'Patron de pesca local'),
(76, NULL, NULL, '', '0000-00-00 00:00:00', 'Patron de trafico interior'),
(77, NULL, NULL, '', '0000-00-00 00:00:00', 'Patron mayor de cabotaje del sector de la Marina Mercante'),
(78, NULL, NULL, '', '0000-00-00 00:00:00', 'Perito Mercantil'),
(79, NULL, NULL, '', '0000-00-00 00:00:00', 'Podologo'),
(80, NULL, NULL, '', '0000-00-00 00:00:00', 'Procurador · Graduado Social · Economista'),
(81, NULL, NULL, '', '0000-00-00 00:00:00', 'Profesor de Educacion Secundaria'),
(82, NULL, NULL, '', '0000-00-00 00:00:00', 'Profesor de Universidad'),
(83, NULL, NULL, '', '0000-00-00 00:00:00', 'Profesores de formacion vial'),
(84, NULL, NULL, '', '0000-00-00 00:00:00', 'Protesico dental'),
(85, NULL, NULL, '', '0000-00-00 00:00:00', 'Psicologo'),
(86, NULL, NULL, '', '0000-00-00 00:00:00', 'Quimico'),
(87, NULL, NULL, '', '0000-00-00 00:00:00', 'Radiotelefonista naval'),
(88, NULL, NULL, '', '0000-00-00 00:00:00', 'Tecnico en mantenimiento de aeronaves'),
(89, NULL, NULL, '', '0000-00-00 00:00:00', 'Tecnico especialista de dietetica y nutricion'),
(90, NULL, NULL, '', '0000-00-00 00:00:00', 'Tecnico especialista de laboratorio'),
(91, NULL, NULL, '', '0000-00-00 00:00:00', 'Tecnico especialista de medicina nuclear'),
(92, NULL, NULL, '', '0000-00-00 00:00:00', 'Tecnico especialista de radiodiagnostico'),
(93, NULL, NULL, '', '0000-00-00 00:00:00', 'Tecnico especialista de radioterapia'),
(94, NULL, NULL, '', '0000-00-00 00:00:00', 'Tecnico especialista en anatomia patologica-citologia'),
(95, NULL, NULL, '', '0000-00-00 00:00:00', 'Tecnico especialista en salud ambiental'),
(96, NULL, NULL, '', '0000-00-00 00:00:00', 'Terapeuta Ocupacional'),
(97, NULL, NULL, '', '0000-00-00 00:00:00', 'Tripulante de cabina de pasajeros');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `profesiones`
--
ALTER TABLE `profesiones`
  ADD PRIMARY KEY (`ID_PROFESION`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `profesiones`
--
ALTER TABLE `profesiones`
  MODIFY `ID_PROFESION` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'Id. Profesion', AUTO_INCREMENT=98;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
