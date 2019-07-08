class Requester {
    // Make an http get request
   async get(url) {
       try{
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
       } catch(err){
           throw new Error('Something went wrong', err);
       }
    }

    // make an HTTP POST Request
    async post(url, data) {
     try{
        const response = await fetch(url,{
                method: 'POST',
                headers: {
                   'Content-type': 'application/json'
                },
               body: JSON.stringify(data)
        })
        const resData = await response.json();
        return resData;
    }
        catch(err){
            throw new Error('Something went wrong', err);
        }
     
    }

     // make an HTTP PUT Request
     async put(url, data) {
        try{
          const response = await fetch(url,{
                method: 'PUT',
                headers: {
                   'Content-type': 'application/json'
                },
               body: JSON.stringify(data)
        });
         const resData = response.json();
         return resData;
    } catch(err){
        throw new Error('Something went wrong', err);
    }
    }

    // Make an HTTP DELETE Request
    async delete(url, data) {
        try{
        const response = await fetch(url,{
                method: 'DELETE',
                headers: {
                   'Content-type': 'application/json'
                },
               body: JSON.stringify(data)
            });
        
        const resData =  await "Resource Deleted...";
        return resData;
        } catch(err){
            throw new Error('Something went wrong', err);
        }
    }

}