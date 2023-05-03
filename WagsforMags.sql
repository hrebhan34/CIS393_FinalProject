-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 03, 2023 at 04:22 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `WagsforMags`
--

-- --------------------------------------------------------

--
-- Table structure for table `Email_List`
--

CREATE TABLE `Email_List` (
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `email` varchar(30) NOT NULL,
  `student_id` int(10) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Email_List`
--

INSERT INTO `Email_List` (`first_name`, `last_name`, `email`, `student_id`, `date`) VALUES
('Jen', 'Rebhan', 'jrebhan@mail.bradley.edu', 322700, '2023-05-02 20:12:44'),
('Collin', 'Rebhan', 'crebhan@mail.bradley.edu', 322744, '2023-05-02 20:57:23'),
('bob', 'Rebhan', 'brebhan@mail.bradley.edu', 322756, '2023-05-02 20:58:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Email_List`
--
ALTER TABLE `Email_List`
  ADD PRIMARY KEY (`student_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
