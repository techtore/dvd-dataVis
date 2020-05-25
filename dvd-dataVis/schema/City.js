cube(`City`, {
  sql: `SELECT * FROM public.city`,
  
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
    }
  }
});
