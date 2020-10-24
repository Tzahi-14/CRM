USE sql_crm;

CREATE TABLE client (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR (30),
    email VARCHAR (50),
    firstContact DATETIME NOT NULL,
    sold BOOLEAN ,
    email_type INT (10),
    owner INT (10) ,
    country INT(10),

    FOREIGN KEY(email_type) REFERENCES email_type(id),
    FOREIGN KEY(owner) REFERENCES owner(id),
    FOREIGN KEY(country) REFERENCES country(id)
);


-- CREATE TABLE email_Type (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
--     type VARCHAR(20)
-- );

-- CREATE TABLE country(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
--     name VARCHAR(30)
-- );

-- CREATE TABLE owner(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(30)
-- )


-- DROP TABLE client;
-- DROP TABLE email_type;
-- DROP TABLE owner;
-- DROP TABLE country;







