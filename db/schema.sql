### Schema

CREATE DATABASE burger;
USE burger;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
