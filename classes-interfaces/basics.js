class User {
    name;
    constructor(name, age) {
        this.name = name;
    }
}
class Client {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const client = new Client("max", 4);
console.log(client);
export {};
