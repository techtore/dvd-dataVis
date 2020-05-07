Tpo 5 actors in rentals:

SELECT actor.first_name, actor.last_name,
Count(*) maximum FROM actor
	JOIN film_actor ON film_actor.actor_id = actor.actor_id
		JOIN film ON film.film_id = film_actor.film_id
GROUP BY actor.actor_id 
ORDER BY maximum DESC 
LIMIT 5;

Top ten rented movies:
select distinct film.title, rental.rental_id, rental.inventory_id, inventory.film_id from rental
join inventory ON inventory.inventory_id = rental.inventory_id
join film ON film.film_id = inventory.film_id
where rental.inventory_id in (select rental.inventory_id 
					  from rental
					  group by rental.inventory_id having count(*) >= 5)
LIMIT 10;

-- Top rental locations pie chart:

SELECT city.city, 
COUNT(*) maximum FROM city
GROUP BY city.city_id
ORDER BY maximum DESC 
LIMIT 5;

-- Top 5 languages:

 SELECT language.name, 
 COUNT(*) maximum FROM language
 GROUP BY language.language_id
 ORDER BY maximum DESC
 LIMIT 5;