cube(`Actor`, {
  sql: `SELECT * FROM public.actor`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [lastName, firstName, lastUpdate]
    }
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
    }
  }
});
