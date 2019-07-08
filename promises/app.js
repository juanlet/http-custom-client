const requester = new Requester();

// Get Users
requester.get(`https://jsonplaceholder.typicode.com/users`)
    .then(data => console.log(data))
    .catch(err=> console.log(err));

// User Data
const data = {
    name : 'Carl Doe',
    username : 'carldoe',
    email: 'cdoe@gmail.com'
}  

//Create User
requester.post(`https://jsonplaceholder.typicode.com/users`, data)
.then(data => console.log(data))
.catch(err=> console.log(err));

// Update Post

requester.put(`https://jsonplaceholder.typicode.com/users/2`, data)
.then(data => console.log(data))
.catch(err=> console.log(err)); 

// Delete User
requester.delete(`https://jsonplaceholder.typicode.com/users/2`)
    .then(data => console.log(data))
    .catch(err=> console.log(err));