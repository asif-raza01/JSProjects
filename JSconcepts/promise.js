//Promises are used to avoid callback hell(nested callbacks)

const simranPromise=new Promise((resolve,reject)=>{
    let dadAgree=true;
    setTimeout(()=>{
        if(dadAgree){
            resolve("Yay! Lets prepare for the celebration baby")
        }else{
            reject("sorry babe i got A proposal from IAS")
        }
    },3000)
})


//handling the promise

simranPromise.then((message)=>{
    console.log(`message from promise ${message}`);
    console.log("yay babyyy");
}).catch((message)=>{
    console.log(`message from promise ${message}`);
    console.log("i think i want Tinderrrr");
})
