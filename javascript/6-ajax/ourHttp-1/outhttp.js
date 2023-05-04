function ourHTTP(){
    this.http = new XMLHttpRequest();
}


// MAKE AN HTTP GET REQUEST

ourHTTP.prototype.get = function(url, callback){

    this.http.open("GET", url, true);

    let self = this;

    this.http.onload = function(){
       if(self.http.status === 200){
         callback(self.http.responseText);
       } else {
          callback("Error: " + self.http.status);
       }
    }

    this.http.send();
}


// MAKE A POST

ourHTTP.prototype.post = function(url, data, callback){
    this.http.open("POST", url, true);

    this.http.setRequestHeader("Content-type", "application/json");

    let self = this;

    this.http.onload = function(){
        callback(self.http.responseText);
     }

     this.http.send(JSON.stringify(data));
}


ourHTTP.prototype.put = function(url, data, callback){
    this.http.open("PUT", url, true);

    this.http.setRequestHeader("Content-type", "application/json");

    let self = this;

    this.http.onload = function(){
        callback(self.http.responseText);
     }

     this.http.send(JSON.stringify(data));
}


ourHTTP.prototype.delete = function(url,callback){
    this.http.open("DELETE", url, true);

    this.http.setRequestHeader("Content-type", "application/json");

    let self = this;

    this.http.onload = function(){
        if(self.http.status === 200){
            callback("POST DELETED");
          } else {
             callback("Error: " + self.http.status);
          }
     }

     this.http.send();
}


// var obj = {
//     name: "Jagan",
//     x:function(){
//         console.log(this);
//         let self = this;

//         function y(){
//             console.log(self);
//         }

//         y();
//     }
// }



// obj.x();