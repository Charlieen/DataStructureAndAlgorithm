class HashTable{
    constructor(size){
        this.data= new Array(size);
    }

    _hash(key){
        let hash=0;
        for(let i=1;i<key.length;i++) {
            hash = ( (hash + key.charCodeAt(i) * i ) % this.data.length);
        }
        
        return key;
    }
    set3(key,value){
        const hash = this._hash(key);
       // console.log(hash);
        this.data[hash] = value;

    }
    get(key){
        const hash = this._hash(key);
        const result = this.data[hash];
        if(result.length ===1 ) return result;
        else {
            return result.find(x => x[0] === key);
        }
    
    }

    set(key,value){
        let address = this._hash(key);
       //  console.log(key,address);
        if(!this.data[address]){
            this.data[address]=[];
        }
        this.data[address].push([key,value]);
        return this.data;
    }
    keys(){
        const keyArr=[]
        for(let i=0;i< this.data.length;i++) {
            if(this.data[i]){
                if(this.data[i].length==1) {
                    keyArr.push(this.data[i][0][0]);
                }else {
                    for(let j=0; j< this.data[i].length;j++){
                        keyArr.push(this.data[i][j][0]);
                    }
                }
            }
            
        }
        return keyArr;
    }
}

// 3000 3 
const myHashTable = new HashTable(300);

//myHashTable.set('grapes',1000); 
myHashTable.set('aa',41);
myHashTable.set('bb',43);
myHashTable.set('cc',45);
myHashTable.set('dd',1000);
myHashTable.set('ee','zhen niu bi');
myHashTable.set('ff',415);
myHashTable.set('gg',12000);
myHashTable.set('hh','hi,zhen niu bi');

console.log(myHashTable);
console.log(myHashTable.get('ee'));
console.log(myHashTable.get('bb'));
console.log(myHashTable.get('hh'));

console.log(myHashTable.keys());
//console.log(myHashTable);
//console.log( myHashTable.get('dzg') ) ;

//---exec--
/**
 * [2,5,1,2,3,5,1,2,4]
 * [2,1,1,2,3,4,]
 * [2,3,4,5]
 */

 


const  find = (arr=[]) =>
{
    let workset = new HashTable(4);
    debugger;
        for(let i=0; i<arr.length; i++){
            
            workset.set(arr[i],i);

            for(let j=0 ; j< workset.data.length;j++){
                if(workset.data[j]){
                   // console.log(workset.data[j]);
                    if(workset.data[j].length>1){
                        return workset.data[j][0][0];
                    }
                }
               
            }
        }
        console.log(workset);
        return undefined;

}

function firstRecurringCharacter(input){
    
    for(let i=0;i<input.length;i++){
        for(let j=i+1;j<input.length-i; j++){ 

            for(let k= j+1; k < input.length -j; k++){
                if(input[k]==input[j]){
                    return input[j]
                }
            }

            if(input[i] === input[j]){
                return input[i];
            }
        }
    }
    return undefined;
} //O(n*(n-1)(n-2))  => O(n^3)

/**
 * so hashTable is not just a took, but also is a strategy ;  save value by key ,
 * 
 */
function firstRecurringCharacter3(input){
    let map={};
    debugger;
    for(let i=0; i< input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i]
        }else{
            map[input[i]]=i;
        }
    }
    return undefined;
}// O(n) 


console.log(firstRecurringCharacter([2,5,1,2,3]));

console.log(firstRecurringCharacter([2,1,1,2,3,4]));

console.log(firstRecurringCharacter([2,5,1,5,6]));