// the function return type
//-value type
function add(a:number,b:number) : string{
    return a+b
}
//2-void 
function log(message: string){
    console.log(message);
}

let x:void;
function print(message: string):void {
    console.log(message);
    return message; //error
}

//3-never

function logandThrow(Errormassage: string) :never{ 
    console.log(Errormassage);
    throw new Error(Errormassage);

}

let msg = logandThrow("oops....");
//function as type

function log2(cb : Function){ // مش افضل حل لانه بيقبل اي نوع وبيرجع اي نوع 
    //code...
    cb();
}
 
function LOg (msg : string){console.log(msg)}

const logmassage  = (msg : string) => console.log(msg)


function perfirmJob(cb: (ms : string)=> void){

cb("Job complate");
}

perfirmJob(LOg); // ok
perfirmJob(logmassage); //ok
perfirmJob((x: number)=>{});  // error , must take a string



type User ={
    name:string,
    age: number,
    greet:(msg:string)=>string
};

let user:User={
    name:"max",
    age:33,
    greet: ()=>"hallow"
}

let user1:User={
    name:"max",
    age:33,
    greet(){
        console.log("hallow");
        return this.name;
    }
}