cube(`Rental`, {
  sql: `SELECT * FROM public.rental`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [lastUpdate, returnDate, rentalDate]
    }
  },
  
  dimensions: {
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    },
    
    returnDate: {
      sql: `return_date`,
      type: `time`
    },
    
    rentalDate: {
      sql: `rental_date`,
      type: `time`
    }
  }
});
