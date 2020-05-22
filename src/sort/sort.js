/**
 * 1: Bubble Sort 
 * 1 ,8 ,3,2,4,5,6,7 
*/

function bubbleSort(arr){
    let changeTimes=1;
    while(changeTimes>0){
        changeTimes =0;
        for(let i=0 ;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                const temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1] =temp;
                changeTimes++;
            }
        }
    }
    return arr;
}
function selectSort(arr){

    let minPoint;
    for(let j=0;j<arr.length-1;j++){
        minPoint =j;
        for(let i=j+1 ;i<arr.length-1;i++){
            if(arr[i]<arr[minPoint]){
                minPoint=i;
            }
        }
        const temp = arr[j];
        arr[j]=arr[minPoint];
        arr[minPoint]=temp;
    }   
    return arr;
}

function _insertHelp(arr,item){
   // debugger;
    for(let i = arr.length -1; i>=0;i--) {

        if( item< arr[i] && item >arr[i-1]){
            arr.splice(i,0,item);
            return arr;
        }else if(item< arr[i] && i==0){
            arr.splice(i,0,item);
            return arr;
        }
    }
    arr.push(item);
    return arr;
}

function insertSort(arr){
    //debugger;
    let arrSort=[];

    for(let i =0; i<arr.length; i++){
        if(i==0){
            arrSort.push(arr[i]);
            arrSort = this._insertHelp(arrSort,arr[i+1]);
        }else if(i>1){
            arrSort = this._insertHelp(arrSort,arr[i]);
        }
     
    }
    return arrSort;
}
/*
*   
*/
function _mergeRec(arr1,arr2,acc){

    const length1 = arr1.length;
    const length2 = arr2.length;

    if(length1 < length2){
        if(length1 ==0) {
            return acc.concat(arr2)
        }else {
            if(arr1[0]<= arr2[0]){
                acc.push(arr1[0]);
                return _mergeRec(arr1.slice(1,length1),arr2,acc);
            }else if(arr2[0]<arr1[0]){
                acc.push(arr2[0]);
                return _mergeRec(arr1,arr2.slice(1,length2),acc);
            }
        };
    }else if(length2 <= length1){
        if(length2 == 0) {
            return acc.concat(arr1);
        }else {
            if(arr2[0]<= arr1[0]){
                acc.push(arr2[0]);
                return _mergeRec(arr2.slice(1,length2),arr1,acc);
            }else if(arr1[0]<arr2[0]){
                acc.push(arr1[0]);
                return _mergeRec(arr1.slice(1,length1),arr2,acc);
            }
        };
        
    }

}

function _divRec(arr,acc){
   // debugger;
    if(arr.length >2){

        const leftCount= Math.floor(arr.length/2);
        const rightCount = arr.length-leftCount;

        let leftArr = arr.slice(0,leftCount);
        let rightArr = arr.slice(leftCount,arr.length);
        
        _divRec(leftArr,acc);
        _divRec(rightArr,acc);

    }else {
        acc.push(this._change(arr));       
    }
    return acc;  

}



function _change(arr){
    if(arr[0]>arr[1]){
        const temp = arr[0];
        arr[0]= arr[1];
        arr[1]= temp;
    }
    return arr;
}

function _reduce(arr){
    let result=[];
    const length = arr.length;

    if(length % 2 ==0){
        let count = length/2;
        let first=0;
        while(count>0){
            result.push(this._mergeRec(arr[first],arr[first+1],[]));
            count--;
            first +=2;
        }
    }else{
        let count = Math.floor(length/2);
        let first=0;
        while(count>0){
            result.push(this._mergeRec(arr[first],arr[first+1],[]));
            count--;
            first +=2;
        }
        result.push(arr[length-1]);
    }
    return result;
}

function mergeSort(arr){
    debugger;

    const arrTwoGroup= this._divRec(arr,[]);

    let result = this._reduce(arrTwoGroup);

    while(result.length>1){
        result = this._reduce(result);
    }

    return result[0];

}




// const arr =[1,8,3,2,0];
 const arr =[1,8,3,2,7,4,5,8,11,19,20,51,61,55,71,65];

 
//const arr =[1,8,3,2,7,4,6,5];
// console.log(bubbleSort(arr));
//console.log(selectSort(arr));
//console.log(insertSort(arr));

//console.log(_divRec(arr,[]));

// const arr1=[5,6,7,30];
// const arr2=[2,4,6,9];

//console.log(_mergeRec(arr1,arr2,[]));

console.log(mergeSort(arr));
console.log(arr);