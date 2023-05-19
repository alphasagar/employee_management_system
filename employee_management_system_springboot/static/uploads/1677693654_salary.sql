-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 28, 2023 at 02:19 PM
-- Server version: 5.7.41
-- PHP Version: 8.1.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee_management_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `salary`
--

CREATE TABLE `salary` (
  `salary_id` int(11) NOT NULL,
  `salary_employee_id` varchar(255) NOT NULL,
  `salary_month` varchar(255) NOT NULL,
  `salary_working_days` varchar(255) NOT NULL,
  `salary_basic` varchar(255) NOT NULL,
  `salary_hra` varchar(255) NOT NULL,
  `salary_mediclaim` varchar(255) NOT NULL,
  `salary_ta` varchar(255) NOT NULL,
  `salary_da` varchar(255) NOT NULL,
  `salary_reimbursement` varchar(255) NOT NULL,
  `salary_ca` varchar(255) NOT NULL,
  `salary_others` varchar(255) NOT NULL,
  `salary_dpf` varchar(255) NOT NULL,
  `salary_dtax` varchar(255) NOT NULL,
  `salary_desc` text NOT NULL,
  `salary_total` varchar(255) NOT NULL,
  `salary_dedc` varchar(255) NOT NULL,
  `salary_slip` longblob,
  `salary_slip_filename` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `salary`
--

INSERT INTO `salary` (`salary_id`, `salary_employee_id`, `salary_month`, `salary_working_days`, `salary_basic`, `salary_hra`, `salary_mediclaim`, `salary_ta`, `salary_da`, `salary_reimbursement`, `salary_ca`, `salary_others`, `salary_dpf`, `salary_dtax`, `salary_desc`, `salary_total`, `salary_dedc`, `salary_slip`, `salary_slip_filename`) VALUES
(91, '2', '8', '30', '1000', '1000', '1000', '1', '1', '1', '1', '1', '1', '1', '1', '4000', '1', NULL, '1630263488_303881675-Vehicle-Showroom-Management-System-Project-Report-in-PHP-and-MySQL (1).docx'),
(92, '2', '5', '30', '3500', '4500', '3', '3', '3', '3', '3', '3', '3', '3', '3', '7500', '3', NULL, '1630263915_0584082100172_.pdf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `salary`
--
ALTER TABLE `salary`
  ADD PRIMARY KEY (`salary_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `salary`
--
ALTER TABLE `salary`
  MODIFY `salary_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
