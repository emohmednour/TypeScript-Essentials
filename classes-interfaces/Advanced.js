// Getter
class Customer {
    FirstName;
    LastName;
    constructor(FirstName, LastName) {
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
    get FullName() {
        return this.FirstName + ' ' + this.LastName;
    }
}
const max = new Customer("ali", "xxx");
console.log(max.FullName);
export {};
