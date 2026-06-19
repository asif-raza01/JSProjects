//function declaration

function print(){
    console.log("Hello World1");
}
print();
//function expression
let print2=function(){
    console.log("Hello World2");
}
print2();

//arrow function
let print3=()=>{
    console.log("Hello World3");
}
print3();

let animal="horse";
function dance(){
    console.log(`${animal} is dancing`)
}
dance(); //horse is dancing because horse is defined before the function declaration and execution

function dance2(animal2){
    console.log(`${animal2} is dancing`)
}
dance2("dog"); //dog is dancing because we are passing dog as an argument to the function and it is being used inside the function
//parameters are the variables that we use in the function declaration and arguments are the values that we pass to the function when we call it
//jab humein arguments bht saare bhejne hote hain to uske liye ye make sure krna zruri hai ki hum utne hi parameters declare karein function m jitne arguments bhejne hain varna humein error milega ki argument is not defined
//isse bachne k lie hum rest operator ka use kar sakte hain jisse hum bht saare arguments bhej sakte hain bina kisi error ke
//agr ... function k parameter m use hota hai to wo rest operator hota hai jisse hum bht saare arguments bhej sakte hain bina kisi error ke
//lekin agr yhi ... kisi array y object m use hota hai to wo spread operator hota hai jisse hum array ya object ko spread kar sakte hain

//first class functions ->functions ko value ki trh treat kiya jata hai mtlb hum functions ko variables m assign kar sakte hain, functions ko arguments m pass kar sakte hain, functions ko return kar sakte hain
function abcd(val){
    val();
}

abcd(function(){
    console.log(" eg for first class function");
})

//higher order function are functions jo ki ya to return kre ek function ya to accept kre ek function apne parameters m
//jaise upr abcd ek hof hai kyunki wo ek function ko accept krta hai apne parameters m

//hof that returns a function
function efgh(){
    console.log("hiee")
    return function(){
        console.log("hof that returns a function");
    }
}

efgh(); //hiee because we are calling the outer function and it is being executed
efgh()(); //hiee and hof that returns a function because we are calling the outer function and then calling the inner function that is being returned by the outer function

//pure function-> aisa function jo ki bhri state ko change na kare aur jo ki same input par hamesha same output de
let a=12;
function pureFunction(){
    console.log("koi change nahi")
}

//impure function-> aisa function jo ki bhri state ko change kare ya jo ki same input par different output de
function impureFunction(){
    a++;
    console.log(a);
}
pureFunction(); //koi change nahi because pure function does not change any state
impureFunction(); //13 because impure function changes the state of variable a
console.log(a);

//closures-> ek function jo ki apne outer function ke variables ko access kar sakta hai chahe outer function ka execution complete ho chuka ho
function outer(){
    let b=10;
    return function inner(){
        console.log(b);
    }
}

//immediately invoke function
(function hey(){
    console.log("hey");
})();