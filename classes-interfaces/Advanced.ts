// Getter
class Customer{
    constructor(private FirstName : string,private LastName : string){}

    get FullName(){
        return this.FirstName + ' ' + this.LastName; 
    }
}
const max = new Customer("ali","xxx");
console.log(max.FullName);
