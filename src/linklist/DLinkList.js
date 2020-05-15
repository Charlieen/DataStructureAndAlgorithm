class Node {
    constructor(item){
        this.pre=null;
        this.next=null;
        this.value=item;
    }
}

class DLinkList{

    constructor(){
        this.head =null;
        this.tail=null;
    }

    preAppend(item){
        const node  = new Node(item);
        if(this.head == null && this.tail== null){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.pre= node;
            this.head = node;
        }
        return this;
    }

    append(item){

        const node  = new Node(item);
        if(this.head == null && this.tail== null){
            this.head = node;
            this.tail = node;
        }else{
            node.pre = this.tail;
            this.tail.next= node;
            this.tail = node;
        }
        return this;
    }

    insert(beforeItem,item){
        debugger;
        const node = new Node(item);
        
        let iterNode = this.head;

        while(iterNode.next){
            if(iterNode.value === beforeItem){
                iterNode.pre.next = node;
                node.pre = iterNode.pre;

                node.next = iterNode;
                iterNode.pre = node;
                break;

            }else{
                iterNode = iterNode.next;
            }
        }

        return this;
    }
    update(){

    }
    delete(){

    }
    find(item){
        const node = new Node(item);
        
        let iterNode = this.head;

        while(iterNode.next){
            if(iterNode.value === item){
                
                return iterNode;

            }else{
                iterNode = iterNode.next;
            }
        }

        return undefined;
    }

    toString(){

    }
    toDemo(){
        let node = this.head;
        const result =[];

        while(node.next) {

            const temp ={};

            if(node.pre){
                temp[0]=node.pre.value;
            }else if (node.pre == null){
                temp[0]=null;
            }

            temp[1]= node.value;

            if(node.next){
                temp[2]=node.next.value;
            }else if(node.next ==null){
                temp[2]=null
            }

            result.push(temp);

            node = node.next;


        }

        return result;
    }
}

const demo = new DLinkList();

demo.preAppend('A').preAppend('A1').preAppend('A2').preAppend('A3')
.append('B').append('B1').append('B2').insert('A','A0').insert('B1','B1_0');

//console.log(demo);

console.log(demo.toDemo());

console.log(demo.find('B1').next);