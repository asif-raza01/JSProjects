//IIFn
(function abc(){
    console.log("This is immediately invoke functiuon")
})();

//synchronous step by step procedure step 2 wont happen until step is accomplished - Blocking approach

//Asynchronous  - step 2 can happen if step 1 is time taking -Non blocking approach parallel execute

//js is single threaded programming language
//so if js want to multiple it has to go for asynchronous

//callback function - function inside a function which executes after it 

function greet(name,callback){
    console.log(`hello ${name}`);
    callback();
}

function goodbye(){
    console.log("Good Bye!")
}
