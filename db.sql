CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL
);
CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC NOT NULL,
    available TEXT NOT NULL
);
select * FROM product
CREATE TABLE order(
order_id SERIAL PRIMARY KEY,
user TEXT NOT NULL,
store TEXT NOT NULL,
orderdate DATE NOT NULL,
status TEXT NOT NULL
);