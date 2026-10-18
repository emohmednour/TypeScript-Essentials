//Enums

enum Role{
    Admin,
    Editor,
    Guest
}

let user : Role = Role.Admin;
//....

user= Role.Guest;
user = 0;
user = 3; // error
user = "admin"; //serror


enum Role1{
    Admin = 2,
    Editor, // 3
    Guest //4
}

enum Role2{
    Admin = "admin",
    Editor ="editor",
    Guest="guest"
}
//?Literal Type
//1-نصوص
let userrole  :"admin" | "guest" = "admin";

userrole = "guest";
userrole = "editor"; /// error

let Numberuser  :1 | 9 = 1;

Numberuser = 9;
Numberuser = "10"; /// error



let possibleResults :[number,number];

possibleResults=[4,5];
//2- ارقام
let possibleResult :[1|-1,1|-1];
possibleResult=[1,-1];
possibleResult=[1,1];
possibleResult=[1,12];


//type aliases or Custom types
type RoleUser = "admin" | "guest" |"edotot";

type USER = {
    name: string,
    age:number;
    role: RoleUser,
    permission:string[]
};
let user2 : USER = {
    name:"max" ,
    age:90,
    role:"admin",
    permission:["read","write"]

}

function access(u:USER){

}