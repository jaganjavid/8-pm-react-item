function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName
}

// Get Full name 

Person.prototype.getFullName = function(){
    return this.firstName + this.lastName;
}

const javid = new Person("Jagan", "Javid");
const jagan = new Person("Jaga", "Javid");

console.log(jagan);
console.log(jagan.getFullName())


