-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-06-2024 a las 00:11:23
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `movies_cac`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `id_pelicula` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `fecha_lanzamiento` date NOT NULL,
  `genero` varchar(100) NOT NULL,
  `duracion` varchar(5) NOT NULL,
  `director` varchar(100) NOT NULL,
  `reparto` varchar(255) NOT NULL,
  `sinopsis` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id_pelicula`, `titulo`, `fecha_lanzamiento`, `genero`, `duracion`, `director`, `reparto`, `sinopsis`, `imagen`) VALUES
(1, 'Forrest Gump', '1994-10-06', 'Comedia/Romance', '2h 22', 'Robert Zemeckis', 'Tom Hanks, Robin Wright, Gary Sinise, Sally Field', 'Forrest Gump, un joven sureño, tenaz e inocente, es protagonista de acontecimientos cruciales en la historia de los Estados Unidos.', 'aclamada_10.jpg'),
(2, 'Volver al futuro', '1985-12-26', 'Ciencia ficción/Comedia', '1h 56', 'Robert Zemeckis', 'Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover, Thomas F. Wilson, Claudia Wells', 'Una máquina del tiempo transporta a un adolescente a los años 50, cuando sus padres todavía estudiaban en la secundaria.', 'volver_al_futuro.webp'),
(4, 'Mision Imposible', '1996-07-04', 'Acción/Suspenso', '1h 50', 'Brian De Palma', 'Tom Cruise, Jean Reno', 'El espía Ethan Hunt debe llevar a cabo una misión imposible: evitar la venta de un disco robado que contiene información confidencial y, al mismo tiempo, limpiar su nombre tras haber sido acusado del asesinato de su mentor.', 'mision_imposible_1.jpg'),
(5, 'Mision Imposible', '1996-07-04', 'Acción/Suspenso', '1h 50', 'Brian De Palma', 'Tom Cruise, Jean Reno', 'El espía Ethan Hunt debe llevar a cabo una misión imposible: evitar la venta de un disco robado que contiene información confidencial y, al mismo tiempo, limpiar su nombre tras haber sido acusado del asesinato de su mentor.', 'mision_imposible_1.jpg'),
(6, 'Mision Imposible', '1996-07-04', 'Acción/Suspenso', '1h 50', 'Brian De Palma', 'Tom Cruise, Jean Reno', 'El espía Ethan Hunt debe llevar a cabo una misión imposible: evitar la venta de un disco robado que contiene información confidencial y, al mismo tiempo, limpiar su nombre tras haber sido acusado del asesinato de su mentor.', 'mision_imposible_1.jpg'),
(7, 'Mision Imposible', '1996-07-04', 'Acción/Suspenso', '1h 50', 'Brian De Palma', 'Tom Cruise, Jean Reno', 'El espía Ethan Hunt debe llevar a cabo una misión imposible: evitar la venta de un disco robado que contiene información confidencial y, al mismo tiempo, limpiar su nombre tras haber sido acusado del asesinato de su mentor.', 'mision_imposible_1.jpg'),
(8, 'Mision Imposible 2', '1996-07-04', 'Acción/Suspenso', '1h 50', 'Brian De Palma', 'Tom Cruise, Jean Reno', 'El espía Ethan Hunt debe llevar a cabo una misión imposible: evitar la venta de un disco robado que contiene información confidencial y, al mismo tiempo, limpiar su nombre tras haber sido acusado del asesinato de su mentor.', 'mision_imposible_1.jpg'),
(9, 'Mision imposible 2', '2000-05-24', 'Acción/Aventura', '2h 3m', 'John Woo', 'Tom Cruise, Thandie Newton', 'Ethan Hunt y su equipo intentan evitar que un exagente libere un virus mortal genéticamente modificado que, en manos equivocadas, podría causar estragos.', 'Array'),
(10, 'Mision imposible 2', '0000-00-00', 'Acción/Aventura', '2h 3m', 'John Woo', 'Tom Cruise, Thandie Newton', 'Ethan Hunt y su equipo intentan evitar que un ex- agente libere un virus mortal genéticamente modificado que, en manos equivocadas, podría causar estragos.', 'aclamada_5.jpg'),
(11, 'Mi pobre Angelito', '0000-00-00', 'asdads', '2hs', 'asdad', 'asdasd', 'asdasd', 'aclamada_9.jpg'),
(12, 'Algo', '1996-07-04', 'Acción/Suspenso', '1h 50', 'Brian De Palma', 'Tom Cruise, Jean Reno', 'El espía Ethan Hunt debe llevar a cabo una misión imposible: evitar la venta de un disco robado que contiene información confidencial y, al mismo tiempo, limpiar su nombre tras haber sido acusado del asesinato de su mentor.', 'aclamada_5.jpg'),
(13, 'Mi pobre Angelito', '0000-00-00', 'Acción/Aventura', '2h 3m', 'John Woo', 'Tom Cruise, Thandie Newton', 'Prueba', 'aclamada_6.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `usuario` varchar(200) NOT NULL,
  `password` varchar(100) NOT NULL,
  `es_admin` char(1) NOT NULL DEFAULT 'N',
  `estado` char(1) NOT NULL DEFAULT 'A'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `usuario`, `password`, `es_admin`, `estado`) VALUES
(1, 'gise@gmail.com', '123456', 'S', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_token`
--

CREATE TABLE `usuarios_token` (
  `id_usuario` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `estado` char(1) NOT NULL,
  `fecha` datetime NOT NULL,
  `es_admin` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios_token`
--

INSERT INTO `usuarios_token` (`id_usuario`, `token`, `estado`, `fecha`, `es_admin`) VALUES
(1, '4970ae6e5e605b3cbb9fdcca695112fe', 'A', '2024-04-29 02:31:00', 'S');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id_pelicula`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `usuarios_token`
--
ALTER TABLE `usuarios_token`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id_pelicula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
