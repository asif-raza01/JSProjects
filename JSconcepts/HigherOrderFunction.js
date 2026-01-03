//Higher Order Function

function hof(a,b,fn){
    return fn(a,b)
}

function fn(a,b){
    return a*b;
}

console.log(hof(10,5,fn))

arr=[1,2,3,4,5,6,7,8]

function hof(arr){
    return function fn(res){
        return res.filter(num=>num%2==0);
    }
}


console.log(hof(arr)(arr))

better way

function filtered(arr,fn){
    return arr.filter(fn)
}



console.log(filtered(arr,num=>num%2==0))

composite function 

function compose(f,g){
    return function(x){
        return f(g(x));
    }
}

const double=(x)=>x*2;

const increment=(x)=>x+1;

console.log(double(increment(10)))





