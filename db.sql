Create Database `spotinode`;
Use `spotinode`;
-- Table for Users
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    birthday VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NUll

);
-- Table for Songs
CREATE TABLE songs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    album VARCHAR(100) NOT NULL,
    genre VARCHAR(50),
    url VARCHAR(255) NOT NULL
);

CREATE TABLE `myplaylist` (
    `id` int primary key not null AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `songs` longtext  NULL
);

CREATE TABLE `music` (
    `id` int not null primary key AUTO_INCREMENT,
    `song` varchar(255) NOT NULL,
    `artist` varchar(255) NOT NULL,
    `url` varchar(255) NOT NULL
);

 ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
