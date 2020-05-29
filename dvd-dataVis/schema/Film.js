cube(`Film`, {
  sql: `SELECT * FROM public.film LIMIT 10`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [title, lastUpdate]
    },
    
    replacementCost: {
      sql: `replacement_cost`,
      type: `sum`
    },
    
    rentalDuration: {
      sql: `rental_duration`,
      type: `sum`
    }
  },
  
  dimensions: {
    description: {
      sql: `description`,
      type: `string`
    },
    
    specialFeatures: {
      sql: `special_features`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    fulltext: {
      sql: `fulltext`,
      type: `string`
    },
    
    rating: {
      sql: `rating`,
      type: `string`
    },
    
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    },

    filmId: {
      sql: `film_id`,
      type: `number`,
      primaryKey: true,
      shown: true
    }
  }
});
