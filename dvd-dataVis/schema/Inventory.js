cube(`Inventory`, {
  sql: `SELECT * FROM public.inventory`,
  
  joins: {
    
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
      type: `time`
    }
  }
});
