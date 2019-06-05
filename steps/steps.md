1. npx knex init

2. npx knex migrate:make (name) // for each table

3. npx knex migrate:latest

4. npx knex seed:make (name)

5. npx knex seed:run

-- order information with the shippper's name
select o.\*, s.shippername, s.phone,
(e.firstname || ' ' || e.lastname) as Employee
, c.customerName
from orders as o
join shippers as s on o.shipperid = s.shipperid
