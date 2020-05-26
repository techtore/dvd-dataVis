cube(`Actor`, {
  sql: `SELECT *  FROM public.actor LIMIT 5`,
  
  joins: {
    FilmActor: {
      sql: `${CUBE}.actor_id = ${FilmActor}.actor_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [lastName, firstName, lastUpdate]
    },
    // limit: 5,
    // order: {
    // 'actor.count': 'desc'
    // }
  },
  
  
  dimensions: {
    lastName: {
      sql: `last_name`,
      type: `string`
    },
    
    firstName: {
      sql: `first_name`,
      type: `string`
    },
    
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    },
    actorId: {
      sql: 'actor_id',
      type: 'number',
      primaryKey: true,
      shown: true

    }
  }
});
