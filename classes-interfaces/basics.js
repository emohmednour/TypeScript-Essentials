class User {
    name;
    constructor(name, age) {
        this.name = name;
    }
}
class Client {
    name;
    age;
    hobbies = []; // its default public so that we cant omit public
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } //but public here must be writen  
}
const client = new Client("max", 4);
client.name = "ali";
client.hobbies.push("mo");
// client.age= 4/  error as age is private
console.log(client);
//readonly 
class Activities {
    hobiies = ["reading"];
}
const act = new Activities();
console.log(act.hobiies); // ok
// act.hobiies = ["sport"] ;// error = read only property
act.hobiies.push("aport"); // ok!
console.log(act.hobiies); // ok
export {};
