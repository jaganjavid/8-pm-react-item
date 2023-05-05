const HTTP = new OurHTTP();

HTTP.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data))
.catch(function(err){
    console.log(err);
});

const data = {
    name:"Jaganjavid"
}


HTTP.post("https://jsonplaceholder.typicode.com/users", data)
.then(data => console.log(data))
.catch(function(err){
    console.log(err);
})


HTTP.put("https://jsonplaceholder.typicode.com/users/5", data)
.then(data => console.log(data))
.catch(function(err){
    console.log(err);
})
HTTP.delete("https://jsonplaceholder.typicode.com/users/8")
.then(data => console.log(data))
.catch(function(err){
    console.log(err);
})