async function yval(link) {
    try {
      const response = await fetch(link);
      const data = await response.json();

      const yValues = [];


      
        Object.values(data)
          yValues.push(JSON.stringify(data['20230524']));

        
    
      
      return yValues;

    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }


  