let beasts =['Centaur','Godzilla','Mosura','Hydra'];

beasts.indexOf('Godzilla');

beasts.findIndex(item=> (item === 'Godzilla'));

beasts.find(item => item=== 'Godzilla');

beasts.includes('Godzilla');


//
class Node {
    constructor(value){
        this.value =value;
        this.list =[];
        this.parent =null;
        this.flag=false;
    }
    addChild(value){
      const  node = new Node(value);
        if(!this.list.join('').includes(value)){
            this.list.push(node);
            node.parent = this;
        }
    }
}
class Tree{

    constructor(node){
        node.parent =null;
        this.root= node;

    }

    _getNextLayer(node,list){

        if(!list.join('').includes(node.value)){
            node.list.forEach(x=>list.push(x));
        }
       
        return list;
    }

    _getIndex(node,list){
        let index =0;
        for(let i=0;i<list.length;i++){
            if(list[i].value === node.value){
                index=i;
                break;
            }
        }
        return index;
    }

    

    _searchHelp(pNode,plist,index,nList,value,acc) {

        if(pNode.value == value){
            acc.push(pNode);
            return acc;
        }else {
            if(plist.length ==0){
                return acc;
            }else{
            
                
            if(index == plist.length-1) {
                
                if(acc.length ==0 && nList.length >0){
                    return this._searchHelp(nList[0],nList,-1,[],value,acc);
                }else {
                    return acc;
                }

            }   
                for(let i=0;i < plist.length;i++) {

                    if(index == plist.length-1) {
                        return acc;
                    }   

                    if(acc.length>0){
                        return acc;
                    }
                    if(index == -1){
                        nList = this._getNextLayer(plist[i],nList);
                      
                       return this._searchHelp(plist[i],plist,i,nList,value,acc); 
                        
                    }else if(index> -1){
                        if(i>index){
                            nList = this._getNextLayer(plist[i],nList);
                
                         return   this._searchHelp(plist[i],plist,i,nList,value,acc); 
                        }
                    }            
                }

                if(acc.length ==0 && nList.length >0){
                    return this._searchHelp(nList[0],nList,-1,[],value,acc);
                }
                
            }
        }
    }

    search(value){
       // debugger;
        const result = this._searchHelp(this.root,this.root.list,-1,[],value,[]);

        if(result.length ==0){
            return 'not found';
        }else if(result.length ==1){
            return result[0];
        } 
        return undefined;
    }

    addNode(pNodeValue,nodeValue){
      //  debugger;
        const pNode = this.search(pNodeValue);
        if(pNode){
            pNode.addChild(nodeValue);
        }else {
            throw `can not find ${pNodeValue}` ;
        }
      
    }

    traversals_BFS(){
        let result=[];
        let currLayer= this.root.list;
        result.push(this.root.value);

        while(currLayer.length>0){
            let nextLayer =[];
            for (let i=0; i< currLayer.length;i++){
                result.push(currLayer[i]);
                nextLayer = this._getNextLayer(currLayer[i],nextLayer);
            }
            currLayer = nextLayer;
        }
        return result;
    }

    _isOk(node){

        let result = true;

        for(let i=0;i<node.list.length;i++){
            if(!node.list[i].flag){
                result = false;
                break;
            }
        }
        return result;
    }

    _dfsHelp(cNode,cLayer,acc){
        debugger;
        if(cNode.parent ==null && this._isOk(cNode)){
            cNode.flag = true;
            acc.push(cNode.value);
            return acc;
        } 
        else{
            if(cNode.list.length ==0 || this._isOk(cNode)){
                cNode.flag =true;
                acc.push(cNode.value);
                return this._dfsHelp(cNode.parent,cNode.parent.list,acc);
            }else{
                for(let i=0;i<cNode.list.length;i++){
                    const temp =cNode.list[i];
                    if(!temp.flag){
                        return this._dfsHelp(temp,temp.list,acc);
                    }
                }
            }

        }

    }

    traversals_DFS(){
        return this._dfsHelp(this.root,this.root.list,[]);
    }
}

/**              1
 *          /   |       \
 *       2      3        4   
 *      / \    /  \     /  \
*     5   20  6   7     8    40
 *    / \      |
 *  9  100     10 
 *           /  \ 
 *         11   12
 *  
 */

const tree = new Tree(new Node(1));
tree.addNode(1,2);
tree.addNode(1,3);
tree.addNode(1,4);
tree.addNode(2,5);
tree.addNode(2,20);
tree.addNode(3,6);
tree.addNode(3,7);
tree.addNode(4,8);
tree.addNode(4,40);
tree.addNode(5,9);
tree.addNode(5,100);
tree.addNode(6,10);
tree.addNode(10,11);
tree.addNode(10,12);
console.log(tree);
debugger;

// console.log(tree.traversals_BFS())
// console.log(tree.search(3));
console.log(tree.traversals_DFS());
