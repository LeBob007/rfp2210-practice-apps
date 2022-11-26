DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE responses(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  sessionID VARCHAR(100) UNIQUE,
  name VARCHAR(25),
  email VARCHAR(30),
  password VARCHAR(25),
  address VARCHAR(100),
  phone VARCHAR(14),
  creditCard VARCHAR(20),
  expiration VARCHAR(5),
  cvv VARCHAR(4),
  billZipCode VARCHAR(10)
);