-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 05, 2023 at 05:15 AM
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
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `contact_subject` text NOT NULL,
  `contact_message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contact_id`, `contact_name`, `contact_email`, `contact_subject`, `contact_message`) VALUES
(142, 'Kaushal Kishore', 'kaushal@gmail.com', 'Need to Learn PHP', 'Hello Team, I need to learn PHP'),
(143, 'Amit Kumar', 'amit@gmail.com', 'Need to Learn C', 'Hello Team, I need to learn C Language'),
(146, 'Sumit Singh', 'sumit@gmail.com', 'Need to Learn Angular', 'Hello Team, I need to learn Angular'),
(147, 'Rahul Kumar', 'rahul@gmail.com', 'Need to Learn NodeJS', 'Hello Team, I need to learn NodeJS');

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `country_id` int(11) NOT NULL,
  `country_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`country_id`, `country_name`) VALUES
(1, 'India'),
(2, 'USA');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `department_id` int(11) NOT NULL,
  `department_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`department_id`, `department_name`) VALUES
(1, 'IT Department'),
(2, 'Java Developement'),
(3, 'HR Department'),
(4, 'Web Developement');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `employee_sal` varchar(100) NOT NULL,
  `employee_first_name` varchar(100) NOT NULL,
  `employee_middle_name` varchar(100) NOT NULL,
  `employee_last_name` varchar(100) NOT NULL,
  `employee_gender` varchar(100) NOT NULL,
  `employee_address` varchar(100) NOT NULL,
  `employee_village` varchar(100) NOT NULL,
  `employee_state` varchar(100) NOT NULL,
  `employee_country` varchar(100) NOT NULL,
  `employee_landline` varchar(100) NOT NULL,
  `employee_mobile` varchar(100) NOT NULL,
  `employee_email` varchar(100) NOT NULL,
  `employee_status` varchar(255) NOT NULL,
  `employee_department` varchar(255) NOT NULL,
  `employee_dob` varchar(255) NOT NULL,
  `employee_nationalty` varchar(255) NOT NULL,
  `employee_qualification` text NOT NULL,
  `employee_history` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_id`, `employee_sal`, `employee_first_name`, `employee_middle_name`, `employee_last_name`, `employee_gender`, `employee_address`, `employee_village`, `employee_state`, `employee_country`, `employee_landline`, `employee_mobile`, `employee_email`, `employee_status`, `employee_department`, `employee_dob`, `employee_nationalty`, `employee_qualification`, `employee_history`) VALUES
(1001, '1', 'Amit', 'Kumar', 'Singh', 'Male', 'A : 42/6', 'Ghaziabad', '5', '1', 'Uttar Pradesh', '09876543212', 'kaushal@gmail.com', '2', '1', '2021-07-07', 'Indian', '', ''),
(1002, '2', 'Kaushal', 'Kishore', 'Jaiswal', 'Male', 'A : 42/6', 'Ghaziabad', 'sdfgsdfg', '1', '89273458', '09876543212', 'kaushal.rahuljaiswal@gmail.com', '1', '3', '2021-08-31', 'Indian', 'qwrqwer', 'qwreqwer'),
(1003, '1', 'Sumit', 'Kumar', 'Aggarwal', 'Male', 'A : 42/6', 'Ghaziabad', '1', '1', 'Uttar Pradesh', '09876543212', 'kishore@gmail.com', '2', '1', '12 January, 1988', 'Indian', '', ''),
(1014, '1', 'Anuj', 'Kumar', 'Dubej', 'Male', 'A : 42/6 Sector 62', 'Bhabua (Kaimur)', '1', '1', '9876543212', '9876543212', 'anuj@gmail.com', '1', '1', '12 January 1985', 'Indian', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` int(11) NOT NULL,
  `feedback_name` varchar(255) NOT NULL,
  `feedback_email` varchar(255) NOT NULL,
  `feedback_message` text NOT NULL,
  `feedback_rating` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedback_id`, `feedback_name`, `feedback_email`, `feedback_message`, `feedback_rating`) VALUES
(1, 'Amit Singh', 'amit@gmail.com', 'Good Website', '5'),
(2, 'Sumit Singh', 'sumit@gmail.com', 'Best Website', '4'),
(3, 'Ranjeet Singh', 'ranjeet@gmail.com', 'Good contents for students', '5');

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(447),
(113);

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE `leaves` (
  `leave_id` int(11) NOT NULL,
  `leave_employee_id` varchar(10) NOT NULL,
  `leave_reason` varchar(300) NOT NULL,
  `leave_description` varchar(300) NOT NULL,
  `leave_from_date` varchar(300) NOT NULL,
  `leave_to_date` varchar(300) NOT NULL,
  `leave_status` varchar(255) NOT NULL DEFAULT '0',
  `leave_total_days` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leaves`
--

INSERT INTO `leaves` (`leave_id`, `leave_employee_id`, `leave_reason`, `leave_description`, `leave_from_date`, `leave_to_date`, `leave_status`, `leave_total_days`) VALUES
(110, '2', 'Going to Home', 'Going to home', '2021-09-01', '2021-09-03', 'Approved', '3'),
(111, '2', 'sdf', 'df', '2021-09-10', '2021-09-13', 'Disapproved', '4'),
(112, '393', 'fffaaa', 'ggghh', '2021-09-21', '2021-09-22', 'Pending', 'gggaa'),
(442, '', 'af', 'asdf', '2023-03-16', '2023-03-18', '', 'asdf'),
(445, '1', 'adfsdsf', 'asdf', '2023-03-22', '2023-03-18', 'Pending', '23'),
(446, '1', 'adsfsdaf', 'sf', '2023-03-15', '2023-03-22', 'Pending', '345a');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `login_id` int(11) NOT NULL,
  `login_employee_id` varchar(255) NOT NULL,
  `login_email` varchar(255) NOT NULL,
  `login_password` varchar(255) NOT NULL,
  `login_level_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`login_id`, `login_employee_id`, `login_email`, `login_password`, `login_level_id`) VALUES
(1, '1001', 'admin@admin.com', 'test', '1'),
(2, '1002', 'employee@gmail.com', 'test', '2'),
(37, '36', 'hh', 'hh', '2'),
(39, '38', 'hh', 'hh', '1'),
(41, '40', 'hh', 'hh', '2'),
(43, '42', 'hh', 'hh', '2'),
(45, '44', 'hh', 'hh', '1'),
(47, '46', 'hh', 'hh', '1'),
(49, '48', 'jj', 'jj', '1'),
(51, '50', 'hh', 'hh', '1'),
(53, '52', 'hh', 'hh', '2'),
(55, '54', 'hh', 'hh', '1'),
(57, '56', 'hh', 'hh', '2'),
(59, '58', 'hhh', 'hh', '1'),
(61, '60', 'admin1', 'test', '1'),
(100, '99', 'uu', 'uu', '2'),
(102, '101', 'jjj', 'jj', '1'),
(104, '103', 'xx', 'xx', '1');

-- --------------------------------------------------------

--
-- Table structure for table `month`
--

CREATE TABLE `month` (
  `month_id` int(11) NOT NULL,
  `month_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `month`
--

INSERT INTO `month` (`month_id`, `month_name`) VALUES
(1, 'January'),
(2, 'February'),
(3, 'March'),
(4, 'April'),
(5, 'May'),
(6, 'June'),
(7, 'July'),
(8, 'August'),
(9, 'September'),
(10, 'October'),
(11, 'November'),
(12, 'December');

-- --------------------------------------------------------

--
-- Table structure for table `quotation`
--

CREATE TABLE `quotation` (
  `quotation_id` int(11) NOT NULL,
  `quotation_user_id` varchar(255) NOT NULL,
  `quotation_service_id` varchar(255) NOT NULL,
  `quotation_from_address` text NOT NULL,
  `quotation_to_address` text NOT NULL,
  `quotation_date_time` varchar(255) NOT NULL,
  `quotation_reference` text NOT NULL,
  `quotation_details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `quotation`
--

INSERT INTO `quotation` (`quotation_id`, `quotation_user_id`, `quotation_service_id`, `quotation_from_address`, `quotation_to_address`, `quotation_date_time`, `quotation_reference`, `quotation_details`) VALUES
(419, '2', '410', 'Noida', 'Banglore', '2022-09-26', 'Rahul. Kumar', 'Need to shift. car'),
(420, '1', '412', 'Banglore', 'Chennai', '2022-09-27', 'Amit Singh', 'Need to shift all office items');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `roles_id` int(11) NOT NULL,
  `roles_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`roles_id`, `roles_name`) VALUES
(2, 'Employee');

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
(91, '1', '3', '30', '1000', '1000', '41000', '1000', '1000', '1000', '1000', '1000', '1000', '1000', '1000', '1000', '1000', NULL, '1677693625_3.png'),
(92, '1', '5', '30', '3500', '4500', '3', '3', '3', '3', '3', '3', '3', '3', '3', '7500', '3', NULL, '1677693654_salary.sql');

-- --------------------------------------------------------

--
-- Table structure for table `saluation`
--

CREATE TABLE `saluation` (
  `saluation_id` int(11) NOT NULL,
  `saluation_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `saluation`
--

INSERT INTO `saluation` (`saluation_id`, `saluation_name`) VALUES
(1, 'Mr.'),
(2, 'Mrs.');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `services_id` int(11) NOT NULL,
  `services_name` varchar(255) DEFAULT NULL,
  `services_description` text,
  `services_status` varchar(255) DEFAULT NULL,
  `services_image` longblob,
  `services_image_filename` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`services_id`, `services_name`, `services_description`, `services_status`, `services_image`, `services_image_filename`) VALUES
(410, 'Car Transport', 'The Packers Movers (thepackersmovers.com) is one of the India’s leading reputed online moving companies booking platforms.', 'Deactive', NULL, '1664031838_car.jpg'),
(411, 'House Furniture', 'The Packers Movers (thepackersmovers.com) is one of the India’s leading reputed online moving companies booking platforms.', 'Active', NULL, '1664105659_furniture.jpg'),
(412, 'Office Shifting', 'The Packers Movers (thepackersmovers.com) is one of the India’s leading reputed online moving companies booking platforms.', 'Active', NULL, '1664031856_office.jpg'),
(413, 'Packers and Moovers', 'The Packers Movers (thepackersmovers.com) is one of the India’s leading reputed online moving companies booking platforms.', 'Active', NULL, '1664031917_packers.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `state_id` int(11) NOT NULL,
  `state_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`state_id`, `state_name`) VALUES
(1, 'Maharastra'),
(2, 'Gujrat'),
(3, 'Bihar'),
(4, 'Uttar Pradesh'),
(5, 'Delhi'),
(6, 'Haryana');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_level_id` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_first_name` varchar(255) NOT NULL,
  `user_last_name` varchar(255) NOT NULL,
  `user_dob` varchar(255) NOT NULL,
  `user_address` varchar(255) NOT NULL,
  `user_city` varchar(255) NOT NULL,
  `user_state` varchar(255) NOT NULL,
  `user_country` varchar(255) NOT NULL,
  `user_mobile` varchar(255) NOT NULL,
  `user_nationalty` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_level_id`, `user_email`, `user_password`, `user_first_name`, `user_last_name`, `user_dob`, `user_address`, `user_city`, `user_state`, `user_country`, `user_mobile`, `user_nationalty`) VALUES
(1, '2', 'user@user.com', 'test', 'Aman', 'Kumar', '2021-10-15', 'gjhg', 'Mumbai', 'Maharastra', 'India', '9899786756', 'Indian'),
(2, '2', 'agent@agent.com', 'test', 'Pawan', 'Kumar', '2021-10-15', 'jhjk', 'Jaipur', 'Rajasthan', 'India', '9878765434', 'jb'),
(3, '2', 'rahul@gmail.com', 'test', 'Elite', 'Packers', '2021-10-08', 'jhg', 'Mumbai', 'Mahastra', 'India', '8987676567', 'g'),
(4, '2', 'sumit@gmail.com', 'test', 'Sumit', 'Kumar', '2021-10-16', 'jk', 'Delhi', 'Delhi', 'India', '7689876567', 'kh'),
(5, '2', 'amit@gmail.com', 'test', 'Aggarwal', 'Movers', '2021-10-26', 'gg1', 'Kanpur', 'Uttar Pradesh', 'India', '9123321289', 'gg1'),
(392, '2', 'evon@gmail.com', 'asdf', 'Evon', 'Packers', '2022-09-23', '6', 'Noida', '8', '9', '9123321289', '5'),
(393, '2', 'south@gmail.com', '1', 'South', 'Movers', '2022-09-21', '8', 'Mumbai', '9', '9', '9123321289', '8');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`);

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`leave_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`login_id`);

--
-- Indexes for table `month`
--
ALTER TABLE `month`
  ADD PRIMARY KEY (`month_id`);

--
-- Indexes for table `quotation`
--
ALTER TABLE `quotation`
  ADD PRIMARY KEY (`quotation_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`roles_id`);

--
-- Indexes for table `salary`
--
ALTER TABLE `salary`
  ADD PRIMARY KEY (`salary_id`);

--
-- Indexes for table `saluation`
--
ALTER TABLE `saluation`
  ADD PRIMARY KEY (`saluation_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`services_id`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`state_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `department_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1015;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `leave_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=447;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `month`
--
ALTER TABLE `month`
  MODIFY `month_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `quotation`
--
ALTER TABLE `quotation`
  MODIFY `quotation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=421;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `roles_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `salary`
--
ALTER TABLE `salary`
  MODIFY `salary_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `saluation`
--
ALTER TABLE `saluation`
  MODIFY `saluation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `services_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=414;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `state_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=394;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
