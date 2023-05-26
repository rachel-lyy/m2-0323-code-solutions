SELECT "c"."firstName",
       "c"."lastName"
FROM "customers" as "c"
JOIN "rentals" using ("customerId")
JOIN "inventory" using ("inventoryId")
JOIN "films" as "f" using ("filmId")
WHERE "f"."title" = 'Magic Mallrats';

-- firstName from "customers"
-- lastName from "customers"
-- rental id from "rentals"

-- customerId from "rentals"

-- rented Magic Mallrats' -> filmId from "films"
