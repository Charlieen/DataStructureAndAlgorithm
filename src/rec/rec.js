let counter =0;

function inception(){
   // console.log(counter);
    if(counter > 3 ){
        return 'done';
    }
    counter ++;
   return inception();
}

//console.log(inception());
// 4! = 4*3*2*1;
function factorial(n){
    let result=1;
    for(let i=n ;i>=1;i--){
        result =
         result*i;
    }
    return result;
}

function facHelp(n,acc){
    if(n==1) return acc;
    else return  facHelp(n-1,n * acc);
}

function fac(n){
    return this.facHelp(n,1);
}

console.log(factorial(4));
console.log(fac(4));

// fibonacci seq:
function fib(n){
    if(n==0) return 0;
    if(n==1) return 1;
    else return fib(n-1)+fib(n-2);
}

function printFibonacci(n){
    const result =[];
    for(let i=0;i<=n;i++){
        result.push(fib(i));
    }
    return result;
}
console.log(printFibonacci(10));