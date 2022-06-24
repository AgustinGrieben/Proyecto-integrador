drop schema if exists shoes_shop; 
CREATE SCHEMA shoes_shop;

use shoes_shop;

CREATE TABLE users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR (255) NOT NULL,
    username VARCHAR(255) NOT NULL, 
    password VARCHAR(225) NOT NULL,
    date DATE NOT NULL,
    dni varchar(8) NOT NULL,
    image varchar(225) NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT now(),
    updatedAt DATETIME DEFAULT now()
); 

CREATE TABLE products (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (255) NOT NULL,
    tipo VARCHAR(255) NOT NULL, 
    valor VARCHAR(225) NOT NULL,
    descripcion varchar(255) NOT NULL,
    image varchar(225) NOT NULL,
	fkUserId INT UNSIGNED, 
    createdAt DATETIME NOT NULL DEFAULT now(),
    updatedAt DATETIME DEFAULT now(),
    
    FOREIGN KEY (fkUserId) REFERENCES users(id)
);

CREATE TABLE comments (
	id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    texto VARCHAR(255) NOT NULL,
    fkProductId INT UNSIGNED NOT NULL,
	fkUserId INT UNSIGNED NOT NULL,
	createdAt DATETIME NOT NULL DEFAULT now(),
    updatedAt DATETIME DEFAULT now(),
    
	FOREIGN KEY (fkUserId) REFERENCES users(id),
    FOREIGN KEY (fkProductId) REFERENCES products(id)
);

CREATE TABLE usersFollowers (
	id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
	fkUserId INT UNSIGNED NOT NULL,
	fkFollowerId INT UNSIGNED NOT NULL,

	FOREIGN KEY (fkUserId) REFERENCES users(id),
	FOREIGN KEY (fkFollowerId) REFERENCES users(id)
);

INSERT INTO users (email, username, password, date, dni, image)
VALUES 
('agrieben@udesa.edu.ar', 'agrieben', '1234', curdate(), '44759933', 'default-image.png'),
('ldenham@udesa.edu.ar', 'ldenham', '3345', curdate(), '44675334', 'default-image.png'),
('jdeachaval@udesa.edu.ar', 'jdeachaval', '2789', curdate(), '44786452', 'default-image.png');

INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('AIR JORDAN 1 MID DARK TEAL 554724-411', 'zapatillas', 'consultar', 'basquetball jordans', 'zapa1.webp', 2);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('WOMENS WMNS AIR JORDAN 1 MID MAGENTA BQ6472-005', 'zapatillas', 'consultar', 'women jordans', 'zapa2.webp',1);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('AIR JORDAN 1 MID LINEN 554724-082', 'zapatillas', 'consultar', 'nike air for men', 'zapa3.webp',3);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('AIR JORDAN 1 MID LINEN 554724-082', 'zapatillas', 'consultar', 'jordans', 'zapa4.webp',1);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('AIR JORDAN 1 MID SE DARK CHOCOLATE DC7294-200', 'zapatillas', 'consultar','chocolate jordans', 'zapa5.webp',2);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('Jordan Mens Air Jordan 1 Mid 554724 074 Banned 2020', 'zapatillas','consultar', 'size - 9.5', 'zapa6.webp',3);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('Nike Mens React Element 55', 'deporte', 'consultar', 'running shoes', 'zapa7.webp', 2);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('Nike Mens Air max Torch 4', 'deporte', 'consultar', 'running', 'zapa8.webp',1);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('Nike Mens Air Monarch IV', 'deporte', 'consultar', 'Cross trainer', 'zapa9.webp',1);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('Nike Mens KD Trey 5 IX Basketball Sneakers CW3400-002', 'deporte','consultar', 'mens basketball', 'zapa10.webp',2);

INSERT INTO comments (texto, fkProductid, fkUserId) 
VALUES 
('Altas llantas!', 1,1),
('Muy buena calidad, son originales',7,2),
('comodas y perfectas para lucirlas en un nightclub',8,3),
('La suela me vino rota, espero que me la cambien gratis',4,1),
('increibles', 3,2),
('me gustan pero nose si van con mi estilo',4,2),
('no me va el talle',1,1),
('me parece que las medidas estan medio raras',8,3),
('son tan comodas que me compraria 2 pares',9,2),
('Geniales!',9,1),
('no me gustas',2,3);

