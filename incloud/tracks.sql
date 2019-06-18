-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 21-Abr-2019 às 13:27
-- Versão do servidor: 5.7.20-0ubuntu0.16.04.1
-- PHP Version: 7.2.13-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `incloud`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tracks`
--

CREATE TABLE `tracks` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `timer` time NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tracks`
--

INSERT INTO `tracks` (`id`, `description`, `timer`, `date`) VALUES
(1, 'This is a description!', '03:15:28', '2019-04-01 06:26:33'),
(2, 'This is a two second tracker test!', '00:00:02', '2019-04-20 23:22:41'),
(3, 'This is a manual booking for a four minute and fifty nine seconds track.', '00:04:59', '2019-04-20 23:47:16'),
(4, 'Nothing important here!', '00:00:05', '2019-04-21 12:31:18'),
(5, 'Long exercise? Or just a nap?', '07:20:22', '2019-04-21 12:31:42'),
(6, 'A long long time ago', '10:11:12', '2019-04-21 12:35:06'),
(7, 'In a galaxy far far away..', '10:11:13', '2019-04-21 12:35:25'),
(8, 'It is a dark time for the Rebellion.', '10:11:14', '2019-04-21 12:38:06'),
(9, 'Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.', '10:11:15', '2019-04-21 12:38:29'),
(10, 'Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.', '01:01:16', '2019-04-21 12:45:39'),
(11, 'The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space….', '01:01:17', '2019-04-21 12:45:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tracks`
--
ALTER TABLE `tracks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tracks`
--
ALTER TABLE `tracks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
