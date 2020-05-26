cube(`FilmActor`, {
  sql: `SELECT * FROM public.film_actor`,
  
  joins: {
    Film: {
      sql: `${CUBE}.film_id = ${Film}.film_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [lastUpdate]
    }
  },
  
  dimensions: {
    lastUpdate: {
      sql: `last_update`,
      type: `time`,
    },
    filmId: {
      sql: 'film_id',
      type: 'number',
      primaryKey: true,
      shown: true

    },
    actorId: {
      sql: 'actor_id',
      type: 'number',
      primaryKey: true,
      shown: true

    }
  }
});
