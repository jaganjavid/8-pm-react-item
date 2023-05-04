const http = new ourHTTP();

// GET POSTs

http.get("https://jsonplaceholder.typicode.com/users", function(err, posts){
    if(err){
        console.log(err)
    } else {
        console.log(posts);
    }
})

// GET single post

http.get("https://jsonplaceholder.typicode.com/users/10", function(err, posts){
    if(err){
        console.log(err)
    } else {
        console.log(posts);
    }
})

const data = {
    name:"JaganJavid"
}

// Post

http.post("https://jsonplaceholder.typicode.com/users", data, function(err, post){
    if(err){
        console.log(err)
    } else {
        console.log(post);
    }
})

// Update

http.put("https://jsonplaceholder.typicode.com/users/2", data, function(err, post){
    if(err){
        console.log(err)
    } else {
        console.log(post);
    }
})

http.delete("https://jsonplaceholder.typicode.com/users/5", function(err, post){
    if(err){
        console.log(err)
    } else {
        console.log(post);
    }
})


