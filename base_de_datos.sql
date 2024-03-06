-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: registro_escolar
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `estudiantes`
--

DROP TABLE IF EXISTS `estudiantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiantes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `fecha` varchar(12) NOT NULL,
  `genero` varchar(10) NOT NULL,
  `nacionalidad` varchar(45) NOT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  `contacto` varchar(15) DEFAULT NULL,
  `matricula` varchar(45) NOT NULL,
  `curso` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiantes`
--

LOCK TABLES `estudiantes` WRITE;
/*!40000 ALTER TABLE `estudiantes` DISABLE KEYS */;
INSERT INTO `estudiantes` VALUES (47,'Deurys Dariel','Marmolejos Rodriguez','10/02/92','Masculino','Dominicana','Calle Santa Maria #2, Los Mina, Barrio Puerto Rico, Santo Domingo Este, Santo Domingo','809-442-5555','144444-550000','4to de bachillerato'),(48,'Anny','Rodriguez','10/10/98','Masculino','Dominicana','Calle Santa Maria #2, Los Mina, Barrio Puerto Rico, Santo Domingo Este, Santo Domingo','809-220-2222','111111-555555555','2do de bachillerato'),(49,'Bienvenida','Valdez','10/10/72','Femenino','Cubana','Calle Santa Maria #2, Los Mina, Barrio Puerto Rico, Santo Domingo Este, Santo Domingo','809-220-2222','1111-11111111','1ro de bachillerato'),(51,'Deyvid Grabriel','Marmolejo Rodriguez','26/08/98','Masculino','Dominicana','Calle Santa Maria #2, Los Mina, Barrio Puerto Rico, Santo Domingo Este, Santo Domingo','809-442-0389','17-EISN-1-171','6to de bachillerato'),(52,'Antonio','Martinez','10/10/98','Masculino','Dominicana','Calle Santa Maria #2, Los Mina, Barrio Puerto Rico, Santo Domingo Este, Santo Domingo','809-220-2222','111111-555555555','3ro de bachillerato');
/*!40000 ALTER TABLE `estudiantes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-03 20:29:25
