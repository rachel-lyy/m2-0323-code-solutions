SELECT "amount",
       "firstName",
       "lastName"
  from "payments"
  join "customers" using ("customerId")
  ORDER BY "amount" DESC
  LIMIT 10;
