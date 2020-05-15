/**
 *  10-->5--->16
 */

 let myLinkedList2 ={
     head:{
         value:10,
         next:{
             value:5,
             next:{
                 value:16,
                 next:null
             }
         }
     }
 };

 class LinkedList{
     constructor(value){
        this.head ={
            value:value,
            next:null
        }
        this.tail = this.head;
        this.length =1;
     }

     append(value){
         // check if head and tail point some node;
         const item = { value:value,next:null};
         
        this.tail.next = item;
        this.tail = item;
        this.length++;   
        return this;
     }

     prepend(value){
         const item = {value:value,next:null};

            item.next = this.head;
            this.head = item;
            this.length++; 
            return this;
     }

 }
 const myLinkList = new LinkedList(10);

 myLinkList.append(5).append(16).prepend(9).prepend(8);

 console.log(myLinkList);

