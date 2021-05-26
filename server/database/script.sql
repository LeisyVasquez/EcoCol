DROP DATABASE IF EXISTS ecocol;
CREATE DATABASE IF NOT EXISTS ecocol;

DROP TABLE IF EXISTS `city`;
DROP TABLE IF EXISTS `favoritedAndVisitedPlace`;
DROP TABLE IF EXISTS `photoPlace`;
DROP TABLE IF EXISTS `place`;
DROP TABLE IF EXISTS `user`;

--
-- Database: `ecocol`
--

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `codigo` int(15) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `favoritedAndVisitedPlace`
--

CREATE TABLE `favoritedAndVisitedPlace` (
  `id` int(15) NOT NULL,
  `idUser` int(15) NOT NULL,
  `idPlace` int(15) NOT NULL,
  `detail` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `photoPlace`
--

CREATE TABLE `photoPlace` (
  `id` int(15) NOT NULL,
  `idPlace` int(15) NOT NULL,
  `photoPath` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `place`
--

CREATE TABLE `place` (
  `id` int(15) NOT NULL,
  `name` varchar(255) NOT NULL,
  `city` int(15) NOT NULL,
  `hashCodeQR` varchar(255) DEFAULT NULL,
  `codeLocation` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `recommendations` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `hours` time NOT NULL,
  `entryPrice` varchar(255) NOT NULL,
  `fauna` varchar(255) NOT NULL,
  `flora` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(15) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `typeUser` varchar(255) NOT NULL,
  `birthDay` date NOT NULL,
  `profilePhoto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`codigo`);

--
-- Indexes for table `favoritedAndVisitedPlace`
--
ALTER TABLE `favoritedAndVisitedPlace`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`,`idPlace`),
  ADD KEY `idPlace` (`idPlace`);

--
-- Indexes for table `photoPlace`
--
ALTER TABLE `photoPlace`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPlace` (`idPlace`),
  ADD KEY `idPlace_2` (`idPlace`);

--
-- Indexes for table `place`
--
ALTER TABLE `place`
  ADD PRIMARY KEY (`id`),
  ADD KEY `city` (`city`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `favoritedAndVisitedPlace`
--
ALTER TABLE `favoritedAndVisitedPlace`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `photoPlace`
--
ALTER TABLE `photoPlace`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `place`
--
ALTER TABLE `place`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `favoritedAndVisitedPlace`
--
ALTER TABLE `favoritedAndVisitedPlace`
  ADD CONSTRAINT `favoritedAndVisitedPlace_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `favoritedAndVisitedPlace_ibfk_2` FOREIGN KEY (`idPlace`) REFERENCES `place` (`id`);

--
-- Constraints for table `photoPlace`
--
ALTER TABLE `photoPlace`
  ADD CONSTRAINT `photoPlace_ibfk_1` FOREIGN KEY (`idPlace`) REFERENCES `favoritedAndVisitedPlace` (`id`);

--
-- Constraints for table `place`
--
ALTER TABLE `place`
  ADD CONSTRAINT `place_ibfk_1` FOREIGN KEY (`city`) REFERENCES `city` (`codigo`);
COMMIT;