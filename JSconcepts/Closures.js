function outer(){
    let outerVar='I am from outer Function'
    return function innerFunction(){
        console.log(outerVar)
    }
}

const innerFunc=outer();
//low logically the outer function got executed so the variable inside it should be dead but innerFunc still remembers it this called closure which uses lexical scope
innerFunc();
