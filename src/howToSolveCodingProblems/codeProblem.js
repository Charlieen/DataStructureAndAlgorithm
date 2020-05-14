/**
 * Analytic skills
 * Coding skills
 * Technical Skills
 * Communication Skills
 */

 const array1= ['a','b','c','x','x','b'];
 const array2 =[ 'z','y','i','c'];

 function isContain3(arr1,arr2)
{
    return arr1.some(item => arr2.includes(item));
}
/**
 * O(n) time complexity
 * O(a) space complexity
 */
function isContain2(arr1,arr2){
  // array to object;
    let obj = {};
    array1.forEach (x=> obj[x]= true); //O(n)

    for(let i in array2){      //O(n)
           if(obj[array2[i]]){
            return true
        }
    }

    return false;
  
}

isContain2(array1);


/**
 * O(a*b)
 */
 function isContain(array1,array2){

        for(let i in array1) {

            if(array2.includes(array1[i])){
                return true
            }
        }
        for(let i in array2) {
            console.log(i);
            if(array1.includes(array2[i])){
                return true
            }
        }

        return false;
 };


//  console.log(isContain(array1,array2));
 console.log(isContain3(array1,array2));