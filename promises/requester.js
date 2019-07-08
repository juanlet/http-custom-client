class Requester {
    // Make an http get request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data =>resolve(data))
            .catch(err => reject(err));    
        });
    }

    // make an HTTP POST Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'POST',
                headers: {
                   'Content-type': 'application/json'
                },
               body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
      });
    }

     // make an HTTP PUT Request
     put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'PUT',
                headers: {
                   'Content-type': 'application/json'
                },
               body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
      });
    }

    // Make an HTTP DELETE Request
    delete(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'DELETE',
                headers: {
                   'Content-type': 'application/json'
                },
               body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(() => resolve("Resource Deleted..."))
        .catch(err => reject(err));
      });
    }

}