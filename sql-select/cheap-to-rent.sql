SELECT "filmId",
       "title",
       "rentalRate"
  from "films"
WHERE "rentalRate" < 1.00
LIMIT 50;
