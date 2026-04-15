//var let const
//declare and initialize 

var a = 12;
//var is added in window object
//it is function scoped
//it can be redeclare and reassign and no error will come and that why we should use let and const
//and we use const if we dont want our value to be changed throughout the program
function abcd() {
    if (true) {
        //now this is function scoped and we are able to use this outside if block which is not the case with let and const and with other programming languages    
        //kyunki var dont follow block it ignores this {}
        var a = 100;
        console.log(a);
    }
    console.log(a);
}

abcd();
//Reassignment is possible with var and let both 
var b=100;
var b=300;
console.log(b);
//TDZ-Temporal Dead Zone wo area hai jis area me hum let and const ko access nahi kar sakte hai jab tak ki unka declaration na ho jaye
//mtlb pta to hai ki wo exist karte hai but unko access nahi kar sakte jab tak ki unka declaration na ho jaye
//console.log(c); //ReferenceError: Cannot access 'c' before initialization

// console.log(c);
// let c=200;

//hoisting->hum jab js m ek variable ko bnate hain to wo do hisson m divide ho jata hai ek hota hai declaration aur dusra hota hai initialization
//var ke case me declaration aur initialization dono ho jate hain but let and const ke case me sirf declaration hota hai initialization nahi hota hai
//isliye hum var ko access kar sakte hain uske declaration ke pehle bhi but let and const ko access nahi kar sakte hain unke declaration ke pehle
console.log(d); //undefined
var d=300;

console.log(e); //ReferenceError: Cannot access 'e' before initialization
let e=20;