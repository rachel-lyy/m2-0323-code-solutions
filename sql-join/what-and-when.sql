SELECT
    "f"."releaseYear" as "release year",
    "g"."name"
FROM "films" as "f"
JOIN "filmGenre" as "fg" using ("filmId")
JOIN "genres" as "g" using ("genreId")
WHERE "f"."title" = 'Boogie Amelie';
