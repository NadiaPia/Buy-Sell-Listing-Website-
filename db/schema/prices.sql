DROP TABLE IF EXISTS prices CASCADE;
CREATE TABLE prices (
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  post_card_price INT NOT NULL,
  letter_price INT NOT NULL,
  poster_price INT NOT NULL
);
