// Getter
class Customer{
    constructor(private FirstName : string,private LastName : string){}

    get FullName(){
        return this.FirstName + ' ' + this.LastName; 
    }
}
const max = new Customer("ali","xxx");
console.log(max.FullName);
//
// Setter

class  Editor{
    private _firstName : string = "";
    private _lastName : string = "";

    set firstName(name : string){
        if(name.trim() === ""){
            throw new Error("inValid Input");
        }
        
        this._firstName = name;

    }
    get firstName(){
        return this._firstName;
    }
    set lastName(name : string){
        if(name.trim() === ""){
            throw new Error("inValid Input");
        }
        
       this._lastName=name;

    }

    get FullName(){
        return this._firstName + " " + this._lastName;
    }


}

const editor = new Editor();
editor.firstName = "mo";
editor.lastName = "ali";

console.log(editor.FullName);

// editor.firstName = 1; error
// editor.firstName = " "; // error while run time
// console.log(editor._firstName); // srror


// ststic
class User2{
    constructor(public fist :string ){}

    static aid ='user';
    static greed(){
        console.log("hii");
    }
}

console.log(User2.aid);
User2.greed();


class Employee extends Editor{
    constructor(public JobTitel : string){
        super();
        super.firstName = "max";
        

        
    }
    work(){
       console.log(super.firstName + " job:" + this.JobTitel)
    }
}

const emp = new Employee( "Developer");
emp.firstName = "max";
emp.lastName = " alimax";

// console.log(emp.FullName);   // موروث
emp.work();