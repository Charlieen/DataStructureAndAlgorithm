/**
 *  10 ->5-->17
 */

 class Node{
     constructor(item) {
         this.value = item;
         this.next = null;
     }
 }

 class LinkList{

     constructor(){
         this.head = null;
         this.trail = null;
     }

     preAppend(item){
       const node = new Node(item);
        let preNode;
       //1: head and trail all point null;
       if(this.head  == null && this.trail == null){
            this.head = node;
            this.trail = node;
       }else{
           preNode = this.head;
           this.head= node;
           node.next = preNode;
       }
       return this;
     }

      append(item){
        const node = new Node(item);

        let preNode;
        //1: head and trail all point null;
        if(this.head  == null && this.trail == null){
             this.head = node;
             this.trail = node;
        }else{
            preNode = this.trail;
            this.trail= node;
            preNode.next = node;
        }
        return this;
      }

      insert(index,item) {
          let node = this.head;
          let i=0;
          let preNode=null;
          const newNode = new Node(item);
//debugger;
        while(i <= index) {
            if(i == index-1){
                preNode = node;
            }

            if(i === index){
                preNode.next= newNode;
                newNode.next = node; 
                break;
            }else{
                node = node.next;
                i++;
            }
        }

        return this;
      }

      update(index,item){
        let i=0;
        let node = this.head;

        while(i<=index){
            if(i == index){
                node.value = item;
                break;
            }else{
                node = node.next;
                i++;
            }
        }
        return this;

      }

      delete(index,item){

        let i=0;
        let node = this.head;
        let preNode ;

        while(i<=index) {
            
            if(i === index-1 ){
               preNode =node;
            }

            if(i == index){
                preNode.next = node.next;
                break;
            }
            
                node = node.next;
                i++;

        }
        return this;

      }

      find(item){
        
        let node = this.head;
        let result= undefined;

        while(node.next){
            if(node.value === item){
                return node;
            }
            node= node.next;
        }

        return result;
      }


      toString(){
          const result=[];
        
          let node = this.head;

          while(node.next){
              result.push(node.value);
              node = node.next;    
          }
          result.push(this.trail.value);

          return result.join('');
      }

      reverse(){

          const  result = new LinkList() ;

          let iterNode = this.head;

          while(iterNode !== null ){
            result.preAppend(iterNode.value);
            iterNode = iterNode.next;
          }
          return result;
      }

      reverse2(){

        debugger;

          if(!this.head.next){
              return this.head;
          }

          let first = this.head;
          let second = this.head.next;
          
          this.trail = first;
          this.trail.next =null;

          while(second.next){
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp; 
          }

          second.next =first;
          this.head = second;

          return this;
      }
      
 }

 const ll = new LinkList();

//  ll.preAppend('A');
//  ll.append('Z');
//  ll.append('C').append('D');
//  ll.preAppend('z');
//  ll.insert(1,'b').insert(2,'c').insert(3,'d').insert(4,'-');
//  console.log(ll.toString());
//  ll.update(1,'dzg');
//  ll.delete(1);
//  ll.delete(1);
//  console.log(ll.toString());

//  console.log(ll.toString());

ll.preAppend('16').preAppend('5').preAppend('10').preAppend('9');
console.log(ll.toString());

console.log(ll.reverse2());



 