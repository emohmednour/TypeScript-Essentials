function procces(val : unknown){

    //typing Narrowing
    if(typeof val === 'object' &&
        !!val &&
        'log' in val &&
        typeof val.log == 'function'){
            
            val.log("hi");
        }
    

}

//ex good
function Statement(val : unknown){
        val.toLowerCase();

    if(typeof val === 'string'){
        val.toLowerCase();

    }
}