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
('WOMENS WMNS AIR JORDAN 1 MID MAGENTA BQ6472-005', 'zapatillas', 'consultar', 'women jordans', 'https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_853782d0-789b-40b5-8d91-21d7e50bf7de_1296x.jpg?v=1648867539',1);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('AIR JORDAN 1 MID LINEN 554724-082', 'zapatillas', 'consultar', 'nike air for men', 'https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_f7c880cc-894f-4b23-9d5d-9735a39f92ff_1296x.jpg?v=1648865486',3);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('AIR JORDAN 1 MID LINEN 554724-082', 'zapatillas', 'consultar', 'jordans', 'https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_4b923c04-4396-4ab1-8d12-3ce537bfcd20_1296x.jpg?v=1649528173',1);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('AIR JORDAN 1 MID SE DARK CHOCOLATE DC7294-200', 'zapatillas', 'consultar','chocolate jordans', 'https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_070b5629-9214-4faa-bf93-fb386614a2a1_1296x.jpg?v=1648884645',2);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('Jordan Mens Air Jordan 1 Mid 554724 074 Banned 2020', 'zapatillas','consultar', 'size - 9.5', 'https://m.media-amazon.com/images/I/71IP0XgHoRL._AC_UL1500_.jpg',3);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('Nike Mens React Element 55', 'deporte', 'consultar', 'running shoes', 'https://m.media-amazon.com/images/I/71e0k99E5wL._AC_UL1500_.jpg', 2);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('Nike Mens Air max Torch 4', 'deporte', 'consultar', 'running', 'https://m.media-amazon.com/images/I/71jp-GSiBoL._AC_UL1500_.jpg',1);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('Nike Mens Air Monarch IV', 'deporte', 'consultar', 'Cross trainer', 'https://m.media-amazon.com/images/I/61dMj+mPSXL._AC_UL1200_.jpg',1);
INSERT INTO products (nombre, tipo, valor, descripcion, image, fkUserId)
VALUES 
('Nike Mens KD Trey 5 IX Basketball Sneakers CW3400-002', 'deporte','consultar', 'mens basketball', 'https://m.media-amazon.com/images/I/41XdUxBi13L._AC_.jpg',2);

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

