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


let multiply=(a,b)=>{
    return a*b;
}

function total(...args){
    let sum=0;
    for(let i=0;i<args.length;i++){
        sum+=args[i];
    }
    return sum;
}

let ans=total(1,2,3,4,5,6,7,8,9,10);
console.log(ans); //55 because we are passing 10 arguments to the function and it is returning the sum of all the arguments


function discountCalculator(discount){
    return function(price){
        return price-(price*discount/100);
    }
}

let discount10=discountCalculator(10);
console.log(discount10(1000)); //900 because we are passing 1000 as price and 10 as discount to the function and it is returning the discounted price
let discount20=discountCalculator(20);
console.log(discount20(1000)); //800 because we are passing 1000 as price and 20 as discount to the function and it is returning the discounted price


let arr=[2,5,1,8,4];
arr.sort(function(a,b){
    return a-b;
})

let arr2=[2,3,4,5,67,8,10];
 arr2.forEach(function(val,index){
    console.log(`the value at index ${index} is ${val}`);
 })

 //map kiya krta hai ek naya array return krta hai jisme ki humne jo function pass kiya hai uske according values hoti hain
 let newarr2=arr2.map(function(val){
    return 12;
 })
 console.log(newarr2); //[12, 12, 12, 12, 12, 12, 12] because we are returning 12 for each element in the array
 //map dhikte hi dimaag m ajana chahiye ki naya array bnega

 //filter nye array me filtered value return krta hai true or false k according
 let newarr3=arr2.filter(function(val){
    if(val>4) return true;
 })
 console.log(newarr3); //[5, 67, 8, 10] because we are returning true for values greater than 4

 //reduce now we use reduce jab humein ek array ki saari values to milakr ek single value return krni hoti hai
 let newarr4=arr2.reduce(function(accumulator,val){
    return accumulator+val;//yhn se jo return value hai wo accumulator m store hogi
 },0); // ab dekh yhn accumalator ek variable hai jo baar baar chlne pr apmni value yaad rkhta hai 
 //and val array ki current value hai jo ki humare function m pass ho rhi hai
 //or ye jo hummne 0 pass kiya hai wo initial value hai accumulator ki like accumulator=0(kuch b bhi ho skta hai) and then accumulator=accumulator+val


 let va=arr2.find(function(val){
    return val>4;
 })
 console.log(va); //5 because find returns the first value that satisfies the condition

 let any=arr2.some(function(val){
    return val>4;
 })
 console.log(any); //true because some returns true if at least one value satisfies the condition

 let all=arr2.every(function(val){
    return val>4;
 })
 console.log(all); //false because every returns true only if all values satisfy the condition

 //destructuring
 let [p,r,,q]=arr2; //array destructuring
 console.log(p,r,q); //2 3 5 because we are destructuring the array and assigning the values to variables p, r and q

 let arr5=arr2;//now arr5 and arr2 are pointing to the same array in memory mtln copy nhi but reference create hogya
 let arr6=[...arr2];//now arr6 is a new array with the same values as arr2 but it is a copy of arr2 and not a reference to arr2

 //splice original array se values ko remove krta hai or usi array m krta hai but it does not return a new array
 //slice original array se values ko remove krta hai aur new array return krta hai but it does not change the original array

 let obj={
    name:"Asif",
    rollno: 7,
    place:"Delhi",
    Height:6.1
 }

 console.log(obj.name); //Asif because we are accessing the name property of the object
 console.log(obj.rollno); //7 because we are accessing the rollno property of the object using bracket notation

//dekh ab hum ye  hi krskte
let aa="name";
console.log(obj.aa); //undefined because we are trying to access the property aa of the object which does not exist
console.log(obj[aa]); //Asif because we are accessing the property name of the object using bracket notation and the value of aa is "name"