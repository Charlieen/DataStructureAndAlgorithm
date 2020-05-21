class BinaryTreeNode {
    constructor(value){
        this.value =value;
        this.left =null;
        this.right =null;

    }   
}

class BinaryTree{

    constructor(){
        const root = new BinaryTreeNode(null);
        this.root = root;

    }

    _appendHelp(point,item){
        debugger;
        if(point.value ==null && point.left ==null && point.right ==null){
            point.value = item;
        }else{
            let node = new BinaryTreeNode(item);

            if(item <= point.value ){
                if(point.left ==null){
                    point.left = node;
                }else{
                    node = null;
                    return this._appendHelp(point.left,item);
                } 
            }else if(item > point.value){
                if(point.right ==null){
                    point.right = node;
                }else{
                    node = null;
                    return this._appendHelp(point.right,item);
                } 
            }

        }
    }


    append(item){
        this._appendHelp(this.root,item);
        return this;        
    }

    _removeChild(node,item){
        if(item == node.left.value){
            node.left =null;
            return node;
        }
        if(item == node.right.value){
            node.right =null;
            return node;
        }
    }

    _findLeftLeaf(node){
   
        let iter=node;

        while(iter.left !==null){
            iter = iter.left;
        }
        return iter;

    }

    delete(item){

        let node = this._find(item);

        if(node ==='error'){
            return `${item} not in the tree`;
        }else {
            const {p,curr} = node;
            if(curr.left ==null && curr.right ==null){
               this._removeChild(p,item); 
            }else{
                if(curr === this.root){
                 
                    const leftLeaf = this._findLeftLeaf(curr.right);
                    leftLeaf.left = curr.left;
                    this.root = curr.right;
                }else{
                    if(curr.right !==null){
                        const temp = curr.left;
                        p.left = curr.right;
                        curr.right.left = temp;
                    }else{
                        p.left = curr.left;
                    }
                }
                
            }
        }
        
    }

    _findHelp(point,item,parent){

        if(point.value === item){
            return {p:parent,curr:point};
        }else{
            if(item < point.value){
                if(point.left ==null && point.right ==null && point.value !== item){
                    return undefined;
                }
                return this._findHelp(point.left,item,point);
            }
            if(item > point.value){

                if(point.left ==null && point.right ==null && point.value !== item){
                    return undefined;
                }
                return this._findHelp(point.right,item,point);
            }
        }

    }

    _find(item){
        const result = this._findHelp(this.root,item,this.root);
        if(result == undefined){
            return 'error';
        }else {
            return result;
        }
    }

    toString() {

      const result =[];
      let layerItems =[];
      layerItems.push(this.root);
      
      while(layerItems.length>0) {

        const newLayer =[];

        for(let i =0;i <layerItems.length;i++){

            const point = layerItems[i];

            if(point.left ==null && point.right ==null){
                const temp ={left:null,value:point.value,right:null};
                result.push(temp);
    
            }else{
                if(point.left !== null && point.right !== null){
                    const temp ={left:point.left.value,value:point.value,right:point.right.value};
                    result.push(temp);
                    newLayer.push(point.left);
                    newLayer.push(point.right);
    
                }else{
                    if(point.left !== null && point.right == null){
                        const temp ={left:point.left.value,value:point.value,right:null};
                        result.push(temp); 
                        newLayer.push(point.left);
                    }
                    if(point.left == null && point.right !== null){
                        const temp ={left:null,value:point.value,right:point.right.value};
                        result.push(temp); 
                        newLayer.push(point.right);
                    }
                }
            }
        }

        layerItems = newLayer;
       
      }

      return result;
    }

}

const tree = new BinaryTree();
//tree.append(7).append(9).append(8).append(6).append(5).append(4).append(19);
tree.append(10).append(8).append(15).append(6).append(9).append(3).append(7).append(14).append(19).append(13)
    .append(12).append(11);
tree.delete(10);
console.log(tree.toString());