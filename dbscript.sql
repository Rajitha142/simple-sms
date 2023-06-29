CREATE DATABASE dep10_gcp_sms;

CREATE TABLE IF NOT EXISTS student(
                                      id INT PRIMARY KEY AUTO_INCREMENT,
                                      name VARCHAR(100) NOT NULL,
                                      address VARCHAR(250) NOT NULL
);

CREATE TABLE IF NOT EXISTS course(
                                     id VARCHAR(10) PRIMARY KEY,
                                     description VARCHAR(100) NOT NULL,
                                     duration VARCHAR(100) NOT NULL
);