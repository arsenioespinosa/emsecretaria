-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 25-07-2017 a las 23:31:03
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
-- Estructura de tabla para la tabla `tipo_relacion`
--

CREATE TABLE `tipo_relacion` (
  `ID_RELACION` bigint(4) NOT NULL COMMENT 'Id. del tipo de relacion',
  `DESCRIPCION` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL COMMENT 'Descripcion',
  `OBSERVACIONES` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL COMMENT 'Observaciones',
  `ES_VOLUNTARIO` tinyint(1) NOT NULL,
  `LAST_MODIFICATION_USER` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
  `LAST_MODIFICATION_DATE` timestamp NULL DEFAULT NULL,
  `CREATION_USER` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `CREATION_DATE` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `tipo_relacion`
--

INSERT INTO `tipo_relacion` (`ID_RELACION`, `DESCRIPCION`, `OBSERVACIONES`, `ES_VOLUNTARIO`, `LAST_MODIFICATION_USER`, `LAST_MODIFICATION_DATE`, `CREATION_USER`, `CREATION_DATE`) VALUES
(1, 'Ponente', NULL, 0, NULL, NULL, '', '0000-00-00 00:00:00'),
(2, 'Moderador', NULL, 0, NULL, NULL, '', '0000-00-00 00:00:00'),
(4, 'Organizador', NULL, 0, NULL, NULL, '', '0000-00-00 00:00:00'),
(5, 'Voluntario', NULL, 1, NULL, NULL, '', '0000-00-00 00:00:00'),
(6, 'Artista', NULL, 0, NULL, NULL, '', '0000-00-00 00:00:00'),
(7, 'Comisario', NULL, 0, NULL, NULL, '', '0000-00-00 00:00:00'),
(8, 'Intervencion EM', NULL, 0, NULL, NULL, '', '0000-00-00 00:00:00'),
(9, 'Preside', NULL, 0, NULL, NULL, '', '0000-00-00 00:00:00'),
(10, 'Proveedor', NULL, 0, NULL, NULL, '', '0000-00-00 00:00:00'),
(11, 'Responsable de Comision', NULL, 0, NULL, NULL, '', '0000-00-00 00:00:00'),
(12, 'Traductor', 'Voluntario', 1, NULL, NULL, '', '0000-00-00 00:00:00'),
(14, 'Desconocido', NULL, 0, NULL, NULL, '', '0000-00-00 00:00:00'),
(15, 'Redaccion Cultural', NULL, 0, NULL, NULL, '', '0000-00-00 00:00:00'),
(16, 'Chofer', 'Voluntario', 1, NULL, NULL, '', '0000-00-00 00:00:00'),
(17, 'Prensa', NULL, 0, NULL, NULL, '', '0000-00-00 00:00:00'),
(18, 'Azafata', 'Voluntario', 1, NULL, NULL, '', '0000-00-00 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tipo_relacion`
--
ALTER TABLE `tipo_relacion`
  ADD PRIMARY KEY (`ID_RELACION`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tipo_relacion`
--
ALTER TABLE `tipo_relacion`
  MODIFY `ID_RELACION` bigint(4) NOT NULL AUTO_INCREMENT COMMENT 'Id. del tipo de relacion', AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
