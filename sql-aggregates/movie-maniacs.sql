-- List the first and last name of all customers, plus the total amount they've spent on rentals. Order them by total paid, descending.

-- customers: customerId, firstName, lastName
-- payments: customerId, paymentId, amount
-- rentals: rentalId, customerId, inventoryId


SELECT "c"."firstName" as "First Name",
       "c"."lastName" as "Last Name",
      sum("amount") AS "Total Paid"
FROM "customers" as "c"
JOIN "payments" using ("customerId")
GROUP BY "customerId"
ORDER BY "Total Paid" DESC
