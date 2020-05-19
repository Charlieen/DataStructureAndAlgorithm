/**
 * Stack
 */

 class Stacks{
     constructor1(){
         this.data=[];
         this.length = 0;
     }

     push(item){
        this.data.push(item);
        this.length++;
        return this;
     }

     pop(){
         if(this.length > 0){
             const result = this.data[this.length-1];
             this.length --;
             return result;
         }else{
            throw 'stack empty!'; 
         }
     }

 }
class Node {
    constructor(value){
        this.value= value;
        this.next =null;
    }
}

class LinkList{

    constructor(){
        this.head =null;
        this.tail=null;
        this.length=0;
    }

    prepend(item){
        const node  = new Node (item);
        if(this.head == null && this.tail ==null){
            this.head = node;
            this.tail= node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    append (item){
        const node  = new Node (item);

        if(this.head == null && this.tail ==null){
            this.head = node;
            this.tail= node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    get(){
        if(this.length>0){
          const result = this.head;
          const temp = this.head.next;
          this.head =temp;
          this.length--;
          return result;
        }else{
            return undefined;
        }

    }
    

}

 class Stacks_l{

     constructor(){
        this.data = new LinkList();
     }

     push(item){
        this.data.prepend(item);
        return this;
     }

     pop(){
       const result = this.data.get();
       if(result !== undefined ){
           return result.value;
       }else{
           return "stack is empty";
       }
     }  
 

 }

 class Queue{

     constructor(){
        this.data = new LinkList();
     }
     
     push(item){
         this.data.append(item);
         return this;
     }
     pop(){

        const result = this.data.get();
        if(result !== undefined ){
            return result.value;
        }else{
            return "queue is empty";
        }
     }
 }

 const stack = new Queue();
 stack.push('1').push('2').push('3').push('4');



 console.log(stack);
 console.log(stack.pop());
 console.log(stack.pop());
 console.log(stack.pop());
 console.log(stack.pop());
