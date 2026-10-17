function generateError(a?:string){
    console.log(a)
};

generateError();
generateError("error ");

//لباراميترات االختيارية الزم تيجي في اآلخ

function generateErro(a?:string, b:string){
    console.log(a)
};
function generateErr(a:string, b?:string){
    console.log(a)
};


//object type
type User = {
    name:string,
    role? : "admin" | "guset"
};


function setvalue(volume? :number){
    const v1 = volume || 77;
    const v2 = volume ?? 77;

}