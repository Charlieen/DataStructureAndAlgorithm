function addTo80(a){
    console.log('long time');
    return 80+a;
}
/**
 * Dynamic programming  the pattern is usually always the same 
 * Just think of caching of optimizing something using a cache.
 * 
 * 
 * use cache and avoid use global variable , we can use javascript basic  mechanism closure.
 * 
 */

function memoizedAddTo80(){
    
    let cache={};

    return function(n){
        if(n in cache){
            return cache[n];
        }else{
            console.log('long time')
            cache[n]= 80+n;
        }
    }

}

const  memized = memoizedAddTo80();
memized(5);
memized(5);

// 0,1,1,2,3,5,8,13,21,34,55,89,144,233..

function fibonacci(){

    let cache={};
    
    function fibHelp(n){
        if(n<2) {
            cache[n]=n;
            return n;
        }
        else {
            let fibHelpn_1 = undefined ;
            let fibHelpn_2 = undefined ;

            if(cache[n-1]){
                fibHelpn_1 = cache[n-1];
            }
            if(cache[n-2]){
                fibHelpn_2 = cache[n-2];
            }
            if(fibHelpn_1 !== undefined && fibHelpn_2 !== undefined ){
                return fibHelpn_1+ fibHelpn_2;
            }
            if(fibHelpn_1 !== undefined && fibHelpn_2 == undefined ){
                return fibHelpn_1+ fibHelp(n-2);
            }
            if(fibHelpn_1 == undefined && fibHelpn_2 !== undefined ){
                return fibHelp(n-1)+ fibHelpn_2;
            }else if(fibHelpn_1 == undefined && fibHelpn_2 == undefined){
                return fibHelp(n-1)+ fibHelp(n-2);
            }      
        }

    }

    return function(n){
        debugger;
        const temp = fibHelp(n);
        if(cache[n]){
            return cache[n];
        }else{
            cache[n]= temp;
            return temp;
        }
    }

}
const fib = fibonacci();

const a1 = performance.now();
console.log(fib(20));
const a2 = performance.now();
console.log('no cache:',a2-a1);

const fib2 = fibonacci();
const b1 = performance.now();
for(let i=0;i<200;i++){
    fib2(i);
}
console.log(fib2(200));
const b2 = performance.now();
console.log('with cache:',b2-b1);
