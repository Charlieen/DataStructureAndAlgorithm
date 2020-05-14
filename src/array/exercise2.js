function reverse(str){
    //check input

    if(!str || str.length <2 || typeof str !== 'string'){
        return 'hmm that is not good';
    }
    const backward = [];
    const totalItems = str.length-1;
    for(let i= totalItems; i>=0;i--){
        backward.push(str[i]);
    }
    return backward.join('');
}

function reverse2(str){
    console.log(str.split(''));
    return str.split('').reverse().join('');
}

const reverser3 = str => [...str].reverse().join('');

 
console.log(reverser3('hi my name is charlie ding'));

///--- [0,3,4,31] [4,6,30]

/**
 * 
 */
function mergeSortedArrays(array1,array2){

    const mergeSortArr=[];

    if(array1[1]-array1[0]<0){
        array1= array1.reverse();
    }

    if(array2[1]-array2[0]<0){
    array2= array2.reverse(); 
    }

    let array1Item = array1[0];
    let array2Item = array2[0];
    let i=1;
    let j=1;


    while(array1Item || array2Item){

            if( ! array2Item || array1Item < array2Item){
                mergeSortArr.push(array1Item);
                array1Item = array1[i];
                i++;
            }else{
                mergeSortArr.push(array2Item);
                array2Item= array2[j];
                j++
            }
        }
        
    
    return mergeSortArr;
}
// console.log(mergeSortedArrays([1,2,3,4,5],[11,91,117,522]));
/**
 *  1 2 3 4 5  -- 7 8 9 10 11 
 *  1 2 3 4 5  -- 11  9 0 
 */
console.log(mergeSortedArrays([1,2,3,4,5],[11,9,7,5]));

console.log(mergeSortedArrays([1,2,3,4,5],[11,9,0]));