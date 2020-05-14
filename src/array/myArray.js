 class MyArray{

    constructor() {
        this.length=0;
        this.data= {};
    }
 
    fromStrings(strings){
        const count = strings.toString().length;
        for(let i=0;i<count;i++){
            this.push(strings.toString().charAt(i));
        }
        return this;
    }

    fromArray(arr){
        for(let i=0;i<arr.length;i++){
            this.push(arr[i]);
        }
        return this;
    }

    
    get(index){
        return this.data[index];
    }
    push(item){
 
         this.data[this.length]= item;
         this.length ++; 
       return this;
    }

    /**
     * The delete keyword deletes both the value of the property and the property itself.

After deletion, the property cannot be used before it is added back again.

The delete operator is designed to be used on object properties. It has no effect on variables or functions.

The delete operator should not be used on predefined JavaScript object properties. It can crash your application.
     */
    pop(){
        const temp  = this.data[this.length - 1];
        delete this.data[this.length-1];
        this.length --;
        return temp;
    }

    delete(index){
        delete this.data[index];
        this.length --;
        return this;
    }

    delete2(index){
        const item = this.data[index];
        this.shiftItems(index);
        this.length -- ;
        return item;
    }
    shiftItems(index){
        const range =this.length-1 - index;
        if( range > 0 ){
            for(let i=0;i<range;i++) {
               this.data[i+index] = this.data[1+i+index]; 
            }
            delete this.data[this.length-1];
        } else{
            delete this.data[index];
        }
    }
}

const newArray = new MyArray();
newArray.push('a').push('b').push('c').push('d').push('e');
newArray.delete(2);

//newArray.delete2(2);
// console.log(newArray.pop());
// newArray.delete(10);

// console.log(newArray);

///---

function reverse(str) {
    debugger;
    const array = new MyArray().fromStrings(str);
    const strArr = array.data;

    let temp;
    const count = array.length-1;

    for(let i=0; i < Math.floor(count/2) ; i++) {
        temp = strArr[i];
        strArr[i]=strArr[count-i];
        strArr[count-i]= temp;
    }
   // console.log(strArr);
    return strArr;

 }

 //console.log( reverse('abcde')) ;

 // mergeSortedArray([0,3,4,31],[4,6,30]);

function mergeSortedArray(arr1,arr2) {
     debugger;
    let array1 =  new MyArray().fromArray(arr1);
    let array2 =  new MyArray().fromArray(arr2);

    const  type1 = array1.data[array1.length-1] - array1.data[array1.length-2] >0 ; // 递增
    const  type2 = array2.data[array2.length-1] - array2.data[array2.length-2] >0 ; // 递减

    if(type1 == type2  && type1 ==false ){
        for(let i=0; i< array1.length; i++){       
            array2 = insertOneValueIntoSortedArray(array1.data[i],array2,false);
        }
        return array2;

    }else {
        if(type1){
            for(let i= array2.length -1; i >=0 ; i-- ){       
                array1 = insertOneValueIntoSortedArray(array2.data[i],array1,true);
            }
            return array1;
        }else {
            for(let i= array1.length -1; i >=0 ; i-- ){       
                array2 = insertOneValueIntoSortedArray(array1.data[i],array2,true);
            }
            return array2;
        }
        
    }


}

 // [1,5,10,15]  [2,3,6,7] 单调增 
function insertOneValueIntoSortedArray(item, sortedArr,flag){
     debugger;
    sortedArr = sortedArr.push(item);

    const length = sortedArr.length;


    let temp

    for(let i =0; i < length ; i++){

        if(flag){
            if (item <= sortedArr.data[i] )
            {
    
                temp= sortedArr.data[i];
                sortedArr.data[i]=sortedArr.data[length-1];
    
                let index = length -1;
    
               for(let j=1; j <= length - i-2 ; j++ ){
                    sortedArr.data[index]= sortedArr.data[index-1];
                    index= index-1;
               }
    
               sortedArr.data[index]= temp;
               break;
            }
        }else{
            if (item >= sortedArr.data[i] )
            {
    
                temp= sortedArr.data[i];
                sortedArr.data[i]=sortedArr.data[length-1];
    
                let index = length -1;
    
               for(let j=1; j <= length - i-2 ; j++ ){
                    sortedArr.data[index]= sortedArr.data[index-1];
                    index= index-1;
               }
    
               sortedArr.data[index]= temp;
               break;
            }
        }
      
    }

    return sortedArr;
}
 // [171,62,42,11] 
console.log( mergeSortedArray([1100,422,62,11],[112,84,70,25]));


