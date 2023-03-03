const person = {
    // Properties
    firstName: "Jagan", // key and value or name and value
    lastName: "Javid",
    age: 25,
    email:"Jagan@gmail.com",
    haskids:true,
    hobbies: ["music", "sports"],
    address: {
        city:"chennai",
        state: "Tn"
    },
    // Methode
    getFullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

let val;

val = person;

// Get a Specific value

val = person.firstName; // ***
val = person["lastName"]; 
val = person.age;
val = person.email;
val = person.haskids;
val = person.hobbies[1];
val = person.address.city;
val = person.getFullName();

console.log(val);