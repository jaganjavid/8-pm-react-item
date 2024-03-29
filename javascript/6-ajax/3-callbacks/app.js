const posts = [
    {
        title:"Post one", body: "This is post one"
    },
    {
        title:"Post two", body: "This is post two"
    },
];

// Sync

// function createpost(post){
//     setTimeout(function(){
//        posts.push(post)
//     }, 3000)
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = "";

//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         })

//         document.body.innerHTML = output;
//     }, 1000)
// }

// createpost({ title:"Post three", body: "This is post three" });

// getPosts();

// Async

function createpost(post, callback){
    setTimeout(function(){
       posts.push(post);
       callback();
    }, 3000)
}


function getPosts(){
    setTimeout(function(){
        let output = "";

        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        })

        document.body.innerHTML = output;
    }, 1000)
}

createpost({ title:"Post three", body: "This is post three" }, getPosts);