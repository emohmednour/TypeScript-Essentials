let hobbies : (boolean| string | number)[] = ["Sport","reading",10]

hobbies=["writing" ,"walking"];
hobbies=[1,7,true];

hobbies.push(10);
hobbies.push("10");
hobbies.push(true);
hobbies.push({});

let user : Array<boolean| string | number>; // array 
// let user : Array<string | number>[]; // array of array = matrix


user=["ali",'omer',1]
user=["ali",'omer']
user=[7,1, true]


//Tuple: array
let possibleResult : [number,number] ;
possibleResult =[1,-1];
possibleResult =[1,-1,1];//error as we need 2 number only




//Object Types

let user1: {
    name:string,
    age:number | string;
    hobbies:string[],
    role:{
        description: string;
        id: number
    }
}={
    name:"ali",
    age:"4",
    hobbies: ['cookig','playing'],
    role:{
        description: "dddd",
        id: 44
    }

}

user1.hobbies.push("fishing");


//Empty obj
let val :{};
val ="maz";
val =["ww",8];
val={name:"ali",age:99};
val =true;


val =null;
val =undefined;


//Record

let data :Record<string, string| number | boolean>;

data={};
data={entry:1 , 1:1, entry2:"max"}; 
//في JavaScript، أسماء الخصائص هي في الحقيقة نصوص، حتى لو كتبتها من غير علامات تنصيص:
//  = "1":1
data={entry:true};
data=0;
data="hallo";

let scores :Record<string,number> = {};
scores["max"] = 23;
scores["aliax"] = 53
scores["moSAlaoah"] = "23" // error









