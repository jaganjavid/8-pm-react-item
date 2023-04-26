function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName
}

// Greeting 

Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`
}


const javid = new Person("Jagan", "Javid");

// console.log(javid);
// console.log(javid.greeting());

// Customer object

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership
}


// Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make a customer prototype reaturn customer

Customer.prototype.constructor = Customer;

const javidCustomer = new Customer("Jagan", "Javid", "111-111-1111", "standard");

Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to my company`
}



console.log(javidCustomer);




