create table products (
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(50) NOT NULL,
	photo VARCHAR(255) NOT NULL,
	country VARCHAR(50) NOT NULL,
	city VARCHAR(50) NOT NULL,
	seller_id INT REFERENCES users(id) ON DELETE CASCADE,
  description VARCHAR(255) NOT NULL,
  prompts VARCHAR(255) NOT NULL,
	sold BOOLEAN DEFAULT false
);


insert into products (name, photo, country, city, seller_id, sold) values ('Crax sp.', 'http://dummyimage.com/211x100.png/5fa2dd/ffffff', 'Canada', 'Belfast',2,'','', true);
insert into products (name, photo, country, city, seller_id, sold) values ('Pelecans onocratalus', 'http://dummyimage.com/222x100.png/dddddd/000000', 'Canada', 'Oxbow',3,'','', false);
insert into products (name, photo, country, city, seller_id, sold) values ('Varanus albigularis', 'http://dummyimage.com/220x100.png/dddddd/000000', 'Canada', 'Grande Cache',2,'','', false);
insert into products (name, photo, country, city, seller_id, sold) values ('Ovis ammon', 'http://dummyimage.com/117x100.png/cc0000/ffffff', 'Canada', 'Baie-Saint-Paul',3,'','', true);
insert into products (name, photo, country, city, seller_id, sold) values ('Zonotrichia capensis', 'http://dummyimage.com/221x100.png/cc0000/ffffff', 'Canada', 'Ajax',4,'','', false);
insert into products (name, photo, country, city, seller_id, sold) values ('Echimys chrysurus', 'http://dummyimage.com/129x100.png/cc0000/ffffff', 'Canada', 'North Perth',2,'','', false);
insert into products (name, photo, country, city, seller_id, sold) values ('Phalaropus lobatus', 'http://dummyimage.com/154x100.png/ff4444/ffffff', 'Canada', 'Sparwood',4,'','', true);
insert into products (name, photo, country, city, seller_id, sold) values ('Canis lupus baileyi', 'http://dummyimage.com/158x100.png/ff4444/ffffff', 'Canada', 'Kensington',6,'','', true);
insert into products (name, photo, country, city, seller_id, sold) values ('Macropus agilis', 'http://dummyimage.com/199x100.png/dddddd/000000', 'Canada', 'Varennes',2,'','', false);
insert into products (name, photo, country, city, seller_id, sold) values ('Laniaurius atrococcineus', 'http://dummyimage.com/204x100.png/cc0000/ffffff', 'Canada',2, 'Napanee Downtown',7,'','',  true);
insert into products ( name, photo, country, city, seller_id, sold) values ('Alces alces', 'http://dummyimage.com/101x100.png/cc0000/ffffff', 'Canada', 'Boisbriand',5,'','',  true);
insert into products ( name, photo, country, city, seller_id, sold) values ('Paroaria gularis', 'http://dummyimage.com/135x100.png/dddddd/000000', 'Canada', 'North Vancouver',5,'','',  false);
insert into products ( name, photo, country, city, seller_id, sold) values ('Larus dominicanus', 'http://dummyimage.com/145x100.png/ff4444/ffffff', 'Canada', 'Waterloo',5,'','',  false);
insert into products ( name, photo, country, city, seller_id, sold) values ('unavailable', 'http://dummyimage.com/209x100.png/5fa2dd/ffffff', 'Canada', 'Bowen Island',4,'','',  true);
insert into products ( name, photo, country, city, seller_id, sold) values ('Ardea cinerea', 'http://dummyimage.com/123x100.png/5fa2dd/ffffff', 'Canada', 'Walnut Grove',6,'','',  true);
insert into products (name, photo, country, city, seller_id, sold) values ('Chlidonias leucopterus', 'http://dummyimage.com/171x100.png/cc0000/ffffff', 'Canada', 'Mercier',5,'','',  true);
insert into products (name, photo, country, city, seller_id, sold) values ('Ornithorhynchus anatinus', 'http://dummyimage.com/117x100.png/ff4444/ffffff', 'Canada', 'Thompson',6,'','',  true);
insert into products (name, photo, country, city, seller_id, sold) values ('Catharacta skua', 'http://dummyimage.com/110x100.png/cc0000/ffffff', 'Canada', 'Saint-Raymond',4,'','',  true);
insert into products (name, photo, country, city, seller_id, sold) values ('Bos mutus', 'http://dummyimage.com/248x100.png/5fa2dd/ffffff', 'Canada', 'Dieppe',5,'','',  false);
insert into products (name, photo, country, city, seller_id, sold) values ('Mellivora capensis', 'http://dummyimage.com/173x100.png/5fa2dd/ffffff', 'Canada', 'Matagami',4,'','',  true);
insert into products (name, photo, country, city, seller_id, sold) values ('Laniarius ferrugineus', 'http://dummyimage.com/193x100.png/dddddd/000000', 'Canada', 'Fort Macleod',6,'','',  false);
insert into products (name, photo, country, city, seller_id, sold) values ('Butorides striatus', 'http://dummyimage.com/148x100.png/dddddd/000000', 'Canada', 'Kerrobert',6,'','',  false);
insert into products (name, photo, country, city, seller_id, sold) values ('Mycteria ibis', 'http://dummyimage.com/126x100.png/ff4444/ffffff', 'Canada', 'Petrolia',7,'','',  false);
insert into products (name, photo, country, city, seller_id, sold) values ('Ara chloroptera', 'http://dummyimage.com/201x100.png/ff4444/ffffff', 'Canada', 'Nicolet',7,'','',  true);
insert into products (name, photo, country, city, seller_id, sold) values ('Macaca nemestrina', 'http://dummyimage.com/183x100.png/dddddd/000000', 'Canada', 'Peachland',7,'','', false);
insert into products (name, photo, country, city, seller_id, sold) values ('Bubo virginianus', 'http://dummyimage.com/236x100.png/ff4444/ffffff', 'Canada', 'New-Richmond',3,'','', false);
insert into products (name, photo, country, city, seller_id, sold) values ('Fregata magnificans', 'http://dummyimage.com/241x100.png/5fa2dd/ffffff', 'Canada', 'Sylvan Lake',7,'','', false);
insert into products (name, photo, country, city, seller_id, sold) values ('Larus fuliginosus', 'http://dummyimage.com/139x100.png/ff4444/ffffff', 'Canada', 'Golden',7,'','', false);
insert into products (name, photo, country, city, seller_id, sold) values ('Genetta genetta', 'http://dummyimage.com/149x100.png/dddddd/000000', 'Canada', 'Ajax',3,'','', true);
insert into products (name, photo, country, city, seller_id, sold) values ('Macropus agilis', 'http://dummyimage.com/177x100.png/cc0000/ffffff', 'Canada', 'Port Moody',3,'','', false);
