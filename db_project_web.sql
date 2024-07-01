-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 01, 2024 at 05:23 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_project_web`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_barang`
--

CREATE TABLE `tb_barang` (
  `id_brg` varchar(5) COLLATE utf8mb4_general_ci NOT NULL,
  `nama_brg` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `jenis` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `satuan` char(5) COLLATE utf8mb4_general_ci NOT NULL,
  `stok_awal` int NOT NULL,
  `harga` int NOT NULL,
  `input_date` datetime NOT NULL,
  `updater` varchar(20) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_barang`
--

INSERT INTO `tb_barang` (`id_brg`, `nama_brg`, `jenis`, `satuan`, `stok_awal`, `harga`, `input_date`, `updater`) VALUES
('B0001', 'Indomie', 'J002', '06', 44, 4000, '2024-07-01 17:11:29', 'Yanto'),
('B0002', 'Club', 'J003', '05', 70, 8000, '2024-07-01 17:12:12', 'Yanto'),
('B0003', 'OK Jeli Drink', 'J003', '03', 50, 4000, '2024-07-01 17:12:00', 'Yanto'),
('B0004', 'Pulpen Bilu', 'J001', '07', 60, 7000, '2024-07-01 17:12:29', 'Yanto'),
('B0005', 'Semen 5 Roda', 'J004', '08', 80, 90000, '2024-07-01 17:14:13', 'Yanto'),
('B0006', 'Dasi', 'J005', '07', 70, 80, '2024-07-01 17:20:28', 'Yanto');

-- --------------------------------------------------------

--
-- Table structure for table `tb_jenis`
--

CREATE TABLE `tb_jenis` (
  `id_jenis` varchar(5) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `jenis` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `input_date` datetime DEFAULT NULL,
  `updater` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `tb_jenis`
--

INSERT INTO `tb_jenis` (`id_jenis`, `jenis`, `input_date`, `updater`) VALUES
('J001', 'ATk', '2024-07-01 04:56:39', 'Frans'),
('J002', 'Makanan', '2024-07-01 05:38:18', 'Frans'),
('J003', 'Minuman', '2024-07-01 05:40:50', 'Frans'),
('J004', 'Material', '2024-07-01 05:43:03', 'Frans'),
('J005', 'pakaian', '2024-07-01 17:20:02', 'Yanto');

-- --------------------------------------------------------

--
-- Table structure for table `tb_keluar`
--

CREATE TABLE `tb_keluar` (
  `id_keluar` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `tgl_keluar` date DEFAULT NULL,
  `barang_id` varchar(15) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `jml_keluar` int DEFAULT NULL,
  `input_date` datetime DEFAULT NULL,
  `updater` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_keluar`
--

INSERT INTO `tb_keluar` (`id_keluar`, `tgl_keluar`, `barang_id`, `jml_keluar`, `input_date`, `updater`) VALUES
('B-20240701-0001', '2024-06-25', 'B0001', 500, '2024-07-01 17:16:07', 'Yanto'),
('B-20240701-0002', '2024-06-26', 'B0002', 250, '2024-07-01 17:18:29', 'Yanto'),
('B-20240701-0003', '2024-06-27', 'B0003', 100, '2024-07-01 17:18:41', 'Yanto');

-- --------------------------------------------------------

--
-- Table structure for table `tb_masuk`
--

CREATE TABLE `tb_masuk` (
  `id_masuk` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `tgl_masuk` date NOT NULL,
  `barang_id` varchar(15) COLLATE utf8mb4_general_ci NOT NULL,
  `jml_masuk` int NOT NULL,
  `input_date` datetime NOT NULL,
  `updater` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_masuk`
--

INSERT INTO `tb_masuk` (`id_masuk`, `tgl_masuk`, `barang_id`, `jml_masuk`, `input_date`, `updater`) VALUES
('TM-20240701-0001', '2024-06-24', 'B0001', 606, '2024-07-01 17:15:34', 'Yanto'),
('TM-20240701-0002', '2024-06-25', 'B0002', 800, '2024-07-01 17:15:27', 'Yanto'),
('TM-20240701-0003', '2024-06-26', 'B0003', 444, '2024-07-01 17:16:57', 'Yanto');

-- --------------------------------------------------------

--
-- Table structure for table `tb_satuan`
--

CREATE TABLE `tb_satuan` (
  `id_satuan` char(2) COLLATE utf8mb4_general_ci NOT NULL,
  `satuan` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_satuan`
--

INSERT INTO `tb_satuan` (`id_satuan`, `satuan`) VALUES
('01', 'Unit'),
('02', 'Butir'),
('03', 'Dus'),
('04', 'Kg'),
('05', 'Liter'),
('06', 'Bungkus'),
('07', 'Pcs'),
('08', 'Sak');

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `user_id` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `status` int NOT NULL,
  `creat_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`user_id`, `username`, `password`, `status`, `creat_date`) VALUES
('02808', 'Frans', 'admin', 1, '2024-06-17 11:27:58'),
('02809', 'Yanto', 'user', 1, '2024-07-01 17:10:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_barang`
--
ALTER TABLE `tb_barang`
  ADD PRIMARY KEY (`id_brg`);

--
-- Indexes for table `tb_keluar`
--
ALTER TABLE `tb_keluar`
  ADD PRIMARY KEY (`id_keluar`);

--
-- Indexes for table `tb_masuk`
--
ALTER TABLE `tb_masuk`
  ADD PRIMARY KEY (`id_masuk`);

--
-- Indexes for table `tb_satuan`
--
ALTER TABLE `tb_satuan`
  ADD PRIMARY KEY (`id_satuan`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
