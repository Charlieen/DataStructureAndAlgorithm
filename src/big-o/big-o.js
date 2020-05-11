/**
 * Readable 
 * 
 * Scalable  Speed  time complexity
 *           Memory  space complexity
 * sacrifice more memory to  save time
 * 
 * What cause Space complexity?
 * 
 * Variables,
 * Data Structure;
 * Function Call
 * Allocations  
 * 
 * 
 */

 const nemo =['nemo'];
 const everyone =['a','b','c','d','e','f','g','h','i','nemo'];
 const large = new Array(10).fill('nemo');

 function findNemo(array){
     let t0 = performance.now();
     for(var i=0; i<array.length; i++){
         if(array[i] === 'nemo'){
             console.log("Found NEMO");
         }
     }
     let t1 = performance.now();
     console.log('use time is :'+ (t1-t0) + 'milliseconds');
 };

 findNemo(large); // O(n) --> Linear Time

 //-- 
 const boxes =[0,1,2,3,4,5,6,7];

 // O(1) Constant Time
 function logFirstTwoBoxes(boxes){
     console.log(boxes[0]);
     console.log(boxes[1]);
 }

 function logFirstTwoBoxes(boxes){
    console.log(boxes[0]);
    console.log(boxes[1]);
    console.log(boxes[2]);
}

//Exercise 1 step by step  is basic but some 

function funChallenge(input){
    let a =10;  // O(1)
    a= 50+3 ;  // O(1)

    for (let i =0;i< input.length;i++){  //O(n)
        anotherFunction(); //O(n)
        let strange =true; //O(n)
        a++;  //O(n)
    }
    return a;  //O(1)
} // 3+ n+n+n+n  => BIG(n)


//Exercise 2 

function anotherFunChallenge(input) {
    let a = 5;  // O(1)
    let b = 10; //O(1)
    let c = 50;  //(1)
    for (let i = 0; i < input; i++) {
      let x = i + 1;  //O(n)
      let y = i + 2;  //O(n)
      let z = i + 3;  //O(n)
  
    }
    for (let j = 0; j < input; j++) {
      let p = j * 2;  //O(n)
      let q = j * 2;  //O(n)
    }
    let whoAmI = "I don't know"; //O(1)
  } // BIG(4+ 5n) = > BIG(n)

  // Log all pairs of array

  //const boxes= [1,2,3,4,5,6,7];

  // boxes.map(x=> console.log(`${x}-${boxes.map(y=>y)}`));

  // 
  boxes.forEach(x=> {
      boxes.forEach(y=>  console.log(`${x}-${y}`) );
  })

  // space complexity

  function boooo(n){
      for(let i=0;i <n.length;i++){
          console.log('booooooo');
      }
  }

  'helofefa;da;jadfa;dajdfiefjei'.length //O(1);




