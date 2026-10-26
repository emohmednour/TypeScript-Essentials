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
//
// Setter
class Editor {
    _firstName = "";
    _lastName = "";
    set firstName(name) {
        if (name.trim() === "") {
            throw new Error("inValid Input");
        }
        this._firstName = name;
    }
    get firstName() {
        return this._firstName;
    }
    set lastName(name) {
        if (name.trim() === "") {
            throw new Error("inValid Input");
        }
        this._lastName = name;
    }
    get FullName() {
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
class User2 {
    fist;
    constructor(fist) {
        this.fist = fist;
    }
    static aid = 'user';
    static greed() {
        console.log("hii");
    }
}
console.log(User2.aid);
User2.greed();
class Employee extends Editor {
    JobTitel;
    constructor(JobTitel) {
        super();
        this.JobTitel = JobTitel;
        super.firstName = "max";
    }
    work() {
        console.log(super.firstName + " job:" + this.JobTitel);
    }
}
const emp = new Employee("Developer");
emp.firstName = "max";
emp.lastName = " alimax";
// console.log(emp.FullName);   // موروث
emp.work();
export {};
