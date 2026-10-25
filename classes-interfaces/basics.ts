class User{
    name :string;
    constructor(name : string , age :number) {
        this.name = name;
    }
}

class Client{
     hobbies  : string[] = []; // its default public so that we cant omit public
    constructor(public name : string ,private age :number) { } //but public here must be writen  
}
const  client  = new Client("max" , 4)

client.name = "ali";
client.hobbies.push("mo");
// client.age= 4/  error as age is private
console.log(client)
