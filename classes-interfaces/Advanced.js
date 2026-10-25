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
export {};
// editor.firstName = 1; error
// editor.firstName = " "; // error while run time
// console.log(editor._firstName); // srror
