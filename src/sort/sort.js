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

// quick sort code...

class Arr {
    constructor(arr){
        this.data =arr;
        this.left =0;
        this.right =arr.length-1;
    }
    setBorder(left,right){
        this.left =left;
        this.right =right;
    }
}


function _getPivot(arr){

    const pivot ={index:0, value:0};
        pivot.index = arr.right;
        pivot.value=arr.data[pivot.index];

    return pivot;
}

function _pivotNext(pivot,arr){
    const _pNext ={index:0, value:0,to:''};
    if(pivot.index == arr.left ){
        _pNext.to='r';
        _pNext.index= arr.right;
        _pNext.value= arr.data[_pNext.index];

    }else if(pivot.index == arr.right){

        _pNext.to='l';
        _pNext.index= arr.left;
        _pNext.value = arr.data[_pNext.index];

    }else if(pivot.index < arr.right){
         _pNext.to='m';
         _pNext.index= pivot.index+1;
         _pNext.value= arr.data[_pNext.index];
    }
    return _pNext;
}

function _change(pivot,next,arr){

   // debugger;
    if(next.to == 'r'){
        if(next.value >= pivot.value){

            next.index = next.index -1;

            if(next.index < arr.left){
                next.value = -1;
            }else{
                next.value = arr.data[next.index];
            }
            

            return _change(pivot,next,arr);
        }
    }else if(next.to == 'l'){
        
        if(next.value <= pivot.value){

            next.index= next.index+1;
            if(next.index >= arr.right){
                return arr;
            }else{
                next.value = arr.data[next.index];
            }

            return _change(pivot,next,arr);
        }

    }else if(next.to == 'm'){

        if(next.value >= pivot.value){
              
            if( next.index < arr.right){
                next.index = next.index +1;
                if(next.index<= arr.right){
                    next.value = arr[next.index];
                }else{
                    next.index = pivot.index-1;
                    if(next.index>= left){
                        next.value = arr[next.index];
                    }else {
                        next.value= -1;
                    }
                }
            }

            return _change(pivot,next,arr);
        }
    }

    if(Math.abs(pivot.index - next.index) ==1 ){

        
        const temp = next.value;
        arr.data[next.index]=pivot.value;
        arr.data[pivot.index]= temp;

        if(next.to === 'r'){
            pivot.index= pivot.index+1; 
            pivot.value= arr[pivot.index];
            if(pivot.index+1 <= arr.right){
                next.index = next.index+1;
                next.value = arr.data[next.index];
            }else{
                next.index = -1; // stop 
            }
        }else if (next.to ==='l'){

            pivot.index= pivot.index-1; 
            pivot.value = arr.data[pivot.index];

            if(pivot.index-1 >= arr.left){
                next.index = next.index-1;
                next.value = arr.data[next.index];
            }else{
                next.index = -1; // stop 
            }

        }
    } else {

   
        if(next.to === 'r' || next.to ==='m'){

            const temp = arr.data[pivot.index+1];
            arr.data[pivot.index+1] = pivot.value;
            arr.data[pivot.index]= next.value;
            arr.data[next.index]= temp;
    
            pivot.index= pivot.index+1;
            pivot.value =arr.data[pivot.index];

            if(pivot.index+1 <= arr.right){
              //  next.index = next.index+1;
                next.value = arr.data[next.index];
            }else{
                next.index = -1;
            }


        }else if (next.to ==='l'){
            
            const temp = arr.data[pivot.index-1];
            arr.data[pivot.index-1] = pivot.value;
            arr.data[pivot.index]= next.value;
            arr.data[next.index]= temp;

            pivot.index= pivot.index- 1;
            pivot.value =arr.data[pivot.index];

            if(pivot.index-1 >= arr.left){
               // next.index = next.index+1;
                next.value = arr.data[next.index];
            }else{
                next.index = -1;
            }
        }
    }

    if(next.to == 'r'|| next.to =='l'){
        if(Math.abs(pivot.index- next.index)==1){
            return {pivot:pivot,arr:arr};
        }
    }else if (next.to== 'm'){
        if(next.index ==0){
            return {pivot:pivot,arr:arr};
        }
    }
    if(next.index == -1){
        return {pivot:pivot,arr:arr};
    }

    return _change(pivot,next,arr);
}



 function _isFinish(pivot,arr){
    let result =false;

    if(Math.abs(arr.right- arr.left)<=3){
        if(arr.data[arr.left] == arr.data[arr.right]){
            result =true;
        }else if(Math.abs(arr.right-arr.left) ==1 && arr.data[arr.left] < arr.data[arr.right]){
            result =true;
        }else if(arr.data[arr.left]<pivot.value && pivot.value< arr.data[arr.right]){
            result = true;
        }
    }   
     return result;

}

function quickSort(arr){
    debugger;
    const pivot = this._getPivot(arr);
    const next = this._pivotNext(pivot,arr);
    
    if(this._isFinish(pivot,arr)) return arr.data;

    const r = this._change(pivot,next,arr);
    if(this._isFinish(r.pivot,r.arr)) return arr.data;
    
    const arrLeft =  new Arr(r.arr.data);
    arrLeft.left = r.arr.left;
    arrLeft.right = r.pivot.index-1;

    const arrRight =  new Arr(r.arr.data);
    arrRight.left =  r.pivot.index+1;
    arrRight.right = r.arr.right;
    
    quickSort(arrLeft);
    quickSort(arrRight);
 
}



// const arr =[1,8,3,2,0];
// const arr =[1,8,3,2,7,4,5,8,11,19,20,51,61,55,71,65];
 const arr= [3,7,8,5,2,1,9,5,4];
// const arr= [5,8,9,5,7];
// const arr= [3,1,2];

// const arr=[5,5];
//const arr=[9,5];
 
//const arr =[1,8,3,2,7,4,6,5];
// console.log(bubbleSort(arr));
//console.log(selectSort(arr));
//console.log(insertSort(arr));

//console.log(_divRec(arr,[]));

// const arr1=[5,6,7,30];
// const arr2=[2,4,6,9];

//console.log(_mergeRec(arr1,arr2,[]));

//console.log(mergeSort(arr));
//console.log(arr);

let a = new Arr(arr);
quickSort(a);
console.log(a);