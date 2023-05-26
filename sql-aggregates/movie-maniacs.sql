SELECT "c"."firstName" as "First Name",
       "c"."lastName" as "Last Name",
      sum("amount") AS "Total Paid"
FROM "customers" as "c"
JOIN "payments" using ("customerId")
GROUP BY "customerId"
ORDER BY "Total Paid" DESC
