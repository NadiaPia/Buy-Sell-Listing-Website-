create table users (
	id SERIAL PRIMARY KEY NOT NULL,
	user_name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	profile_pic VARCHAR(50),
	bio VARCHAR(50) NOT NULL,
	seller BOOLEAN DEFAULT false
);

insert into users (user_name, email, profile_pic, bio, seller) values ('artbro', 'ftimblettd@scientificamerican.com', 'http://dummyimage.com/156x100.png/dddddd/000000', 'Polarised explicit methodology', false);
insert into users (user_name, email, profile_pic, bio, seller) values ('cbawcock2', 'jhrinchishin2@1688.com', 'http://dummyimage.com/229x100.png/dddddd/000000', 'Progressive zero administration circuit', true);
insert into users (user_name, email, profile_pic, bio, seller) values ('wminchella4', 'hthiem4@hatena.ne.jp', 'http://dummyimage.com/168x100.png/ff4444/ffffff', 'Integrated modular initiative', true);
insert into users (user_name, email, profile_pic, bio, seller) values ('jmachent7', 'gmeddick7@goodreads.com', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'Decentralized executive moratorium', true);
insert into users (user_name, email, profile_pic, bio, seller) values ('ihaney9', 'mromagosa9@ustream.tv', 'http://dummyimage.com/242x100.png/ff4444/ffffff', 'Down-sized clear-thinking concept', true);
insert into users (user_name, email, profile_pic, bio, seller) values ('itreugee', 'lclellande@unblog.fr', 'http://dummyimage.com/161x100.png/5fa2dd/ffffff', 'Streamlined empowering software', true);
insert into users (user_name, email, profile_pic, bio, seller) values ('abortolussii', 'khavercrofti@angelfire.com', 'http://dummyimage.com/107x100.png/dddddd/000000', 'Organic multimedia definition', true);


