-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2018 at 11:26 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactpractical`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` varchar(36) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `banner` varchar(100) DEFAULT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `banner`, `description`) VALUES
('49c8f8ac-982f-49cf-a64d-f23d5d2354e7', 'Footwear', 'banner1.jpg', 'Footwear category description goes here'),
('79355642-584c-4b0f-9b2e-c8b747385fbb', 'Clothing', 'banner2.jpg', 'Clothing category description goes here'),
('99ddaa99-a898-4f17-8290-1eaf0e1b84b3', 'Electronics', 'banner3.jpg', 'Electronics category description goes here'),
('9f46a038-cc67-45c5-8cce-b2b4ac471fd1', 'Kitchen', 'banner4.jpg', 'Kitchen category description goes here');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` varchar(36) NOT NULL,
  `catid` varchar(36) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `sku` varchar(45) DEFAULT NULL,
  `price` int(5) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `catid`, `name`, `sku`, `price`, `image`) VALUES
('c8b8fa07-4fd7-11e8-9f21-f07d68453e93', '49c8f8ac-982f-49cf-a64d-f23d5d2354e7', 'Puma Mens Sneakers', 'ZGDZZMRN', 20, 'productimage1.jpg'),
('c8b9023c-4fd7-11e8-9f21-f07d68453e93', '49c8f8ac-982f-49cf-a64d-f23d5d2354e7', 'Adidas Mens Nemeziz', 'ZHZEWL', 45, 'productimage2.jpg'),
('c8b903bd-4fd7-11e8-9f21-f07d68453e93', '49c8f8ac-982f-49cf-a64d-f23d5d2354e7', 'Red Tape Mens Formal Shoes', 'NTQXHJ', 34, 'productimage3.jpg'),
('c8b90488-4fd7-11e8-9f21-f07d68453e93', '49c8f8ac-982f-49cf-a64d-f23d5d2354e7', 'Puma Mens Thong Sandals', 'FRYJBHFD', 40, 'productimage4.jpg'),
('c8b9053e-4fd7-11e8-9f21-f07d68453e93', '49c8f8ac-982f-49cf-a64d-f23d5d2354e7', 'Adidas Mens Boots', '45VFDSFY', 89, 'productimage5.jpg'),
('c8b905e1-4fd7-11e8-9f21-f07d68453e93', '49c8f8ac-982f-49cf-a64d-f23d5d2354e7', 'Puma Mens Running Shoes', 'IYBMNJG8', 75, 'productimage6.jpg'),
('c8b90684-4fd7-11e8-9f21-f07d68453e93', '49c8f8ac-982f-49cf-a64d-f23d5d2354e7', 'Adidas Mens Predator Boots', '5YUBCES3', 38, 'productimage7.jpg'),
('c8b90719-4fd7-11e8-9f21-f07d68453e93', '49c8f8ac-982f-49cf-a64d-f23d5d2354e7', 'Puma Football Sneakers', '86YHJGV', 40, 'productimage8.jpg'),
('c8b90812-4fd7-11e8-9f21-f07d68453e93', '49c8f8ac-982f-49cf-a64d-f23d5d2354e7', 'Puma Jordan Sneakers', '865HFC', 20, 'productimage9.jpg'),
('c8b908c3-4fd7-11e8-9f21-f07d68453e93', '49c8f8ac-982f-49cf-a64d-f23d5d2354e7', 'Puma Builder Sneakers', '8FBDXSSEW', 22, 'productimage10.jpg'),
('c8b90c71-4fd7-11e8-9f21-f07d68453e93', '49c8f8ac-982f-49cf-a64d-f23d5d2354e7', 'Puma Leather Sneakers', 'RHDXUF6', 39, 'productimage11.jpg'),
('d7167074-510b-11e8-b27f-f07d68453e93', '79355642-584c-4b0f-9b2e-c8b747385fbb', 'Product Clothing 1', 'Z1GDZZMRN', 120, 'productclothing1.jpg'),
('d7206613-510b-11e8-b27f-f07d68453e93', '79355642-584c-4b0f-9b2e-c8b747385fbb', 'Product Clothing 2', 'Z34HZEWL', 55, 'productclothing2.jpg'),
('d7206794-510b-11e8-b27f-f07d68453e93', '79355642-584c-4b0f-9b2e-c8b747385fbb', 'Product Clothing 3', '7N6TQXHJ', 34, 'productclothing3.jpg'),
('d7206832-510b-11e8-b27f-f07d68453e93', '79355642-584c-4b0f-9b2e-c8b747385fbb', 'Product Clothing 4', '37FRYJBHFD', 40, 'productclothing4.jpg'),
('d72068c3-510b-11e8-b27f-f07d68453e93', '79355642-584c-4b0f-9b2e-c8b747385fbb', 'Product Clothing 5', '47RYJBHFD', 49, 'productclothing5.jpg'),
('d7229f17-510b-11e8-b27f-f07d68453e93', '79355642-584c-4b0f-9b2e-c8b747385fbb', 'Product Clothing 6', 'I83YBMNJG8', 75, 'productclothing6.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
