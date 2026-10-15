function add(a:number,b:number) : string{
    return a+b
}

//void 
function log(message: string){
    console.log(message);
}

let x:void;
function print(message: string):void {
    console.log(message);
    return message; //error
}