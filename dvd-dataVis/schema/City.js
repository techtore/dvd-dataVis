cube(`City`, {
  sql: `SELECT * FROM public.city LIMIT 10 `,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [city, lastUpdate]
    }
  },
  
  dimensions: {
    city: {
      sql: `city`,
      type: `string`
    },
    
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    },
    cityId: {
      sql: `city_id`,
      type: `number`,
      primaryKey: true,
      shown: true
    }
  }
});
