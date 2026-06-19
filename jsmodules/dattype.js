//Two types
//primitive->aisi saari values jinko copy krne par humein real copies mile mtlb actual m ek alg value
//eg boolean,number,string,null,undefined,symbol(bigint)
//non-primitive or references->aisi saari values jinko copy krne par humein reference mile mtlb actual m ek hi value dono variables point kr rahe hain
//eg array,object,function ye values bracket se shru hoti hain [] {} ()
//null is basically jab hum variable bnate hain or usme mention krte hain ki ye abhi null hai mtlb isme koi value nahi hai but humne isko explicitly mention kiya hai ki ye null hai
//undefined is when jab hum variable bnake k chordete hain eg let a; console.log(a); //undefined
const path=require("path");
console.log(path.dirname(__filename));
console.log(path.basename(__filename))
let a=Number.MAX_SAFE_INTEGER;
console.log(a);

//this is how we make bigint in js
let b=9007199254740991n;
b+=5n;
console.log(b);

let obj={
    name:"harsh",
}

let obj2=obj;
obj2.name="harshvardhan";
console.log(obj.name); //harshvardhan because obj and obj2 both are reference to same object in memory
//dynamic typing is when jab hum variable ko kisi bhi type ka value assign kar sakte hain aur usko change bhi kar sakte hain
//jaise cpp m hota hai int a=5 to baad m isko string m change nahi kar sakte hain but js m hum let a=5; a="harsh"; is tarah se change kar sakte hain
//truthy and falsy values
//falsy values->0,"",null,undefined,false,NaN
//truthy values->"0"," ",[],{},function(){},true,1,-1,Infinity,-Infinity