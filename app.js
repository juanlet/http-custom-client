const requester = new Requester();
// Usage example
// Get Multiple Posts
requester.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
    if(err){
      console.log(err);
    } else {
   // console.log(posts);
    }
});

// Get Single Post
requester.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
    if(err){
      console.log(err);
    } else {
    //console.log(post);
    } 
});

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// Create Post
requester.post('https://jsonplaceholder.typicode.com/posts', data, function(err,res){
    if(err){
      console.log(err);
    }else{
      console.log(res);
    }
});

// Update Post
requester.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err,post){
if(err){
  console.log(err);
} else {
  console.log(post);
}
});

// Delete Post
requester.delete('https://jsonplaceholder.typicode.com/posts/1', function(err,response){
    if(err){
        console.log(err);
    } else {
        console.log(response);
    }

});