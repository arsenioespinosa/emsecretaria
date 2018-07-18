-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 25-07-2017 a las 23:30:43
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
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `CODIGO` varchar(2) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Codigo',
  `PROVINCIA` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL COMMENT 'Provincia',
  `LAST_MODIFICATION_USER` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
  `LAST_MODIFICATION_DATE` timestamp NULL DEFAULT NULL,
  `CREATION_USER` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `CREATION_DATE` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `COMUNIDAD` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL COMMENT 'Comunidad',
  `COD_182` varchar(2) COLLATE latin1_spanish_ci DEFAULT NULL COMMENT 'Codigo 182',
  `POR_182` varchar(5) COLLATE latin1_spanish_ci DEFAULT NULL COMMENT 'por_182'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`CODIGO`, `PROVINCIA`, `LAST_MODIFICATION_USER`, `LAST_MODIFICATION_DATE`, `CREATION_USER`, `CREATION_DATE`, `COMUNIDAD`, `COD_182`, `POR_182`) VALUES
('01', 'alava', NULL, NULL, '', '0000-00-00 00:00:00', 'Pais Vasco', '00', '00000'),
('02', 'Albacete', NULL, NULL, '', '0000-00-00 00:00:00', 'Castilla-La Mancha', '07', '01500'),
('03', 'Alicante', NULL, NULL, '', '0000-00-00 00:00:00', 'Valencia', '17', '02000'),
('04', 'Almeria', NULL, NULL, '', '0000-00-00 00:00:00', 'Andalucia', '01', '00000'),
('05', 'avila', NULL, NULL, '', '0000-00-00 00:00:00', 'Castilla y Leon', '08', '01500'),
('06', 'Badajoz', NULL, NULL, '', '0000-00-00 00:00:00', 'Extremadura', '10', '01000'),
('07', 'Islas Baleares', NULL, NULL, '', '0000-00-00 00:00:00', 'Islas Baleares', '04', '00000'),
('08', 'Barcelona', NULL, NULL, '', '0000-00-00 00:00:00', 'Cataluna', '09', '01500'),
('09', 'Burgos', NULL, NULL, '', '0000-00-00 00:00:00', 'Castilla y Leon', '08', '01500'),
('10', 'Caceres', NULL, NULL, '', '0000-00-00 00:00:00', 'Extremadura', '10', '01000'),
('11', 'Cadiz', NULL, NULL, '', '0000-00-00 00:00:00', 'Andalucia', '01', '00000'),
('12', 'Castellon', NULL, NULL, '', '0000-00-00 00:00:00', 'Valencia', '17', '02000'),
('13', 'Ciudad Real', NULL, NULL, '', '0000-00-00 00:00:00', 'Castilla-La Mancha', '07', '01500'),
('14', 'Cordoba', NULL, NULL, '', '0000-00-00 00:00:00', 'Andalucia', '01', '00000'),
('15', 'La Coruna', NULL, NULL, '', '0000-00-00 00:00:00', 'Galicia', '11', '00000'),
('16', 'Cuenca', NULL, NULL, '', '0000-00-00 00:00:00', 'Castilla-La Mancha', '07', '01500'),
('17', 'Gerona', NULL, NULL, '', '0000-00-00 00:00:00', 'Cataluna', '09', '01500'),
('18', 'Granada', NULL, NULL, '', '0000-00-00 00:00:00', 'Andalucia', '01', '00000'),
('19', 'Guadalajara', NULL, NULL, '', '0000-00-00 00:00:00', 'Castilla-La Mancha', '07', '01500'),
('20', 'Guipuzcoa', NULL, NULL, '', '0000-00-00 00:00:00', 'Pais Vasco', '00', '00000'),
('21', 'Huelva', NULL, NULL, '', '0000-00-00 00:00:00', 'Andalucia', '01', '00000'),
('22', 'Huesca', NULL, NULL, '', '0000-00-00 00:00:00', 'Aragon', '02', '01500'),
('23', 'Jaen', NULL, NULL, '', '0000-00-00 00:00:00', 'Andalucia', '01', '00000'),
('24', 'Leon', NULL, NULL, '', '0000-00-00 00:00:00', 'Castilla y Leon', '08', '01500'),
('25', 'Lerida', NULL, NULL, '', '0000-00-00 00:00:00', 'Cataluna', '09', '01500'),
('26', 'La Rioja', NULL, NULL, '', '0000-00-00 00:00:00', 'La Rioja', '16', '00000'),
('27', 'Lugo', NULL, NULL, '', '0000-00-00 00:00:00', 'Galicia', '11', '00000'),
('28', 'Madrid', NULL, NULL, '', '0000-00-00 00:00:00', 'Madrid', '12', '01500'),
('29', 'Malaga', NULL, NULL, '', '0000-00-00 00:00:00', 'Andalucia', '01', '00000'),
('30', 'Murcia', NULL, NULL, '', '0000-00-00 00:00:00', 'Murcia', '13', '03000'),
('31', 'Navarra', NULL, NULL, '', '0000-00-00 00:00:00', 'Navarra', '00', '00000'),
('32', 'Orense', NULL, NULL, '', '0000-00-00 00:00:00', 'Galicia', '11', '00000'),
('33', 'Asturias', NULL, NULL, '', '0000-00-00 00:00:00', 'Principado de Asturias', '03', '02000'),
('34', 'Palencia', NULL, NULL, '', '0000-00-00 00:00:00', 'Castilla y Leon', '08', '01500'),
('35', 'Las Palmas', NULL, NULL, '', '0000-00-00 00:00:00', 'Canarias', '05', '01000'),
('36', 'Pontevedra', NULL, NULL, '', '0000-00-00 00:00:00', 'Galicia', '11', '00000'),
('37', 'Salamanca', NULL, NULL, '', '0000-00-00 00:00:00', 'Castilla y Leon', '08', '01500'),
('38', 'Santa Cruz de Tenerife', NULL, NULL, '', '0000-00-00 00:00:00', 'Canarias', '05', '01000'),
('39', 'Cantabria', NULL, NULL, '', '0000-00-00 00:00:00', 'Cantabria', '06', '01500'),
('40', 'Segovia', NULL, NULL, '', '0000-00-00 00:00:00', 'Castilla y Leon', '08', '01500'),
('41', 'Sevilla', NULL, NULL, '', '0000-00-00 00:00:00', 'Andalucia', '01', '00000'),
('42', 'Soria', NULL, NULL, '', '0000-00-00 00:00:00', 'Castilla y Leon', '08', '01500'),
('43', 'Tarragona', NULL, NULL, '', '0000-00-00 00:00:00', 'Cataluna', '09', '01500'),
('44', 'Teruel', NULL, NULL, '', '0000-00-00 00:00:00', 'Aragon', '02', '01500'),
('45', 'Toledo', NULL, NULL, '', '0000-00-00 00:00:00', 'Castilla-La Mancha', '07', '01500'),
('46', 'Valencia', NULL, NULL, '', '0000-00-00 00:00:00', 'Valencia', '17', '02000'),
('47', 'Valladolid', NULL, NULL, '', '0000-00-00 00:00:00', 'Castilla y Leon', '08', '01500'),
('48', 'Vizcaya', NULL, NULL, '', '0000-00-00 00:00:00', 'Pais Vasco', '00', '00000'),
('49', 'Zamora', NULL, NULL, '', '0000-00-00 00:00:00', 'Castilla y Leon', '08', '01500'),
('50', 'Zaragoza', NULL, NULL, '', '0000-00-00 00:00:00', 'Aragon', '02', '01500'),
('51', 'Ceuta', NULL, NULL, '', '0000-00-00 00:00:00', 'Ciudad autonoma de Ceuta', '00', '00000'),
('52', 'Melilla', NULL, NULL, '', '0000-00-00 00:00:00', 'Ciudad autonoma de Melilla', '00', '00000');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`CODIGO`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
