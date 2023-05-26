SELECT "addresses"."line1" as "address",
       "cities"."name" as "city",
       "addresses"."district" as "district",
       "countries"."name" as "country"
FROM "addresses"
JOIN "cities" using ("cityId")
JOIN "countries" using ("countryId");
