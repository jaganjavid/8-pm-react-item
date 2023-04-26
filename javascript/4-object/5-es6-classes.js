class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `Hello there my name ${this.firstName} ${this.lastName}`
    }
}


class Customer extends Person{
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }
    getFullName(){
        return `Hello there my name ${this.firstName} ${this.lastName} welcome`
    }
}


const javid = new Person("Jagan", "Javid");
const javidCustomer = new Customer("Jagan", "Javid", "111-111-1111", "PRO");

console.log(javid);
console.log(javidCustomer);
console.log(javidCustomer.getFullName());