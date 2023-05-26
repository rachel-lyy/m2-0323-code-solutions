SELECT "g"."name" AS "genres",
      COUNT(*) AS "totalMovies"
FROM "actors"
JOIN "castMembers" using ("actorId")
JOIN "filmGenre" using ("filmId")
JOIN "genres" AS "g" using ("genreId")
  WHERE "firstName" = 'Lisa'
  AND "lastName" = 'Monroe'
GROUP BY "genreId";
