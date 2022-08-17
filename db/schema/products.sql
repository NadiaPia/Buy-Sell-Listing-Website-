create table products (
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(50) NOT NULL,
	photo VARCHAR(255) NOT NULL,
	country VARCHAR(50) NOT NULL,
	city VARCHAR(50) NOT NULL,
	seller_id INT REFERENCES users(id) ON DELETE CASCADE,
  description VARCHAR(255) NOT NULL,
  prompts VARCHAR(255) NOT NULL,
	available_sizes VARCHAR(100) NOT NULL,
	sold BOOLEAN DEFAULT false
);
