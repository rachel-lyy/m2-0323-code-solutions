SELECT "co"."name" AS "cities",
       COUNT(*) AS "totalCities"
  FROM "countries" AS "co"
  JOIN "cities" AS "ci" using ("countryId")
  GROUP BY "co"."countryId";
