/**
 * AVL tree
 */

class BinaryTreeNode {
    constructor(value){
        this.value =value;
        this.left =null;
        this.right =null;
        this.lostBalance = null; // ll rr lr rl
        this.parent =null;
        this.grand=null;

    }   
}

class BinaryTree{

    constructor(){
        const root = new BinaryTreeNode(null);
        this.root = root;

    }
    /**
     * after append or delete ,check  isLostBalance, if yes then ll or rr or lr or rl 
     * if yes then call ll_rotate, rr_rotate, lr_rotate , rl_rotate
     */


    
    _isLostBalance(curr){
      
        if(curr.parent!==null && curr.grand !==null) {

            if(curr.grand.right ==null){
                if(curr.parent.right ==null){
                    curr.grand.lostBalance ='ll';
                }
                if(curr.parent.left ==null){
                    curr.grand.lostBalance ='lr';
                }
            }
          

            if(curr.grand.left ==null){
                if(curr.parent.left ==null){
                    curr.grand.lostBalance='rr';
                }
                if(curr.parent.right ==null){
                    curr.grand.lostBalance='rl';
                }
            }

            if(curr.grand.parent!=null){
                if(curr.grand.left !=null){
                    const nodeLeft = curr.grand.parent.left;
                    if(nodeLeft.left ==null && nodeLeft.right ==null){
                        curr.grand.lostBalance='rr';
                    }
                }
            }
            
            

            curr = curr.grand;
        }
     
        return curr;
    }

    _llRotate_b(node){
        if(node.parent ==null){

            this.root = node.left;
            this.root.parent=null;

            node.left.right = node;
            node.parent =this.root;
            node.left=null;

        }else{
          

            
            const node_Left = node.left;
            const node_Left_Left = node.left.left;
        

            // 1: point relations:
            node.parent.left = node_Left;
            node_Left.right = node;
            // 2: update parent and grand and left and right
  

            node_Left.parent = node.parent;
            node_Left.grand = node.parent.parent;

            node_Left_Left.parent = node_Left;
            node_Left_Left.grand = node_Left.parent;

            node.left=null;
            node.parent = node_Left;
            node.grand = node_Left.parent;


        }
       

    }
    _rrRotate(node){
        //debugger;
        const node_R = node.right;
        const node_R_R = node.right.right;

        if(node.left ==null){
            
            // 1: pointer relations
            node_R.left = node;
            if(node.parent == null){
                this.root = node_R;
                node_R.parent = null;
                node.right =null;
                node.parent = node_R;  
                node_R_R.grand =null;

            }else{
                node.parent.right = node_R;

                node_R.parent= node.parent;
                node_R.grand =null;

                node.right =null;
                node.parent = node_R;
                node.grand = node.parent.parent;

                node_R_R.grand =node_R_R.parent.parent;
            }
        
        }else{
          //  debugger;
            const node_L =node.left;
            const node_P= node.parent;
            const node_P_L= node.parent.left;

            // 1: pointer relations
            this.root = node;
            node.left = node_P;
            node_P.right = node_L;

            // 2: l r p g
            node.parent =null;

            node_R.grand =null;
            node_P.parent = node;
            node_L.parent = node_P;
            node_L.grand = node_L.parent.parent;

            node_P_L.grand = node_P_L.parent.parent;




        }
    }

    _rrRotate_bb(node){
        //debugger;
        if(node.parent ==null){
            this.root = node.right;
            this.root.parent=null;

            node.right.left = node;
            node.parent = this.root;
            node.right=null;


        }else{
         
            if(node.left ==null){
            const node_Right = node.right;
            const node_Right_Right = node.right.right;
        

            // 1: point relations:
            node.parent.right = node_Right;
            node_Right.left = node;
            // 2: update parent and grand and left and right

            node_Right.parent = node.parent;
            node_Right.grand = node.parent.parent;


            node_Right_Right.parent = node_Right;
            node_Right_Right.grand = node_Right.parent;

            node.right=null;
            node.parent = node_Right;
            node.grand = node_Right.parent;

            }else{

                

            }

            


            
        }
   
    }
    _lrRotate(node){
        //
        const node_Left = node.left;
        const node_Left_Right =node.left.right;

        node.left= node_Left_Right;
        node_Left_Right.left =node_Left;
        node_Left.right =null;

        //
        this._llRotate(node);
    }
    _rlRotate(node){
        //
        const node_Right = node.right;
        const node_Right_Left =node.right.left;

        node.right= node_Right_Left;
        node_Right_Left.right =node_Right;
        node_Right.left =null;

        //
        this._rrRotate(node);

        
    }

    _appendHelp(point,item){
        if(point.value ==null && point.left ==null && point.right ==null){
            point.value = item;
            point.parent= null;
            point.grand= null;
            return point;
        }else{
            let node = new BinaryTreeNode(item);

            if(item < point.value ){
                if(point.left ==null){
                    point.left = node;
                    node.parent= point;
                    node.grand = node.parent.parent;
                    return this._isLostBalance(node);
                }else{
                    node = null;
                    return this._appendHelp(point.left,item);
                } 
            }else if(item > point.value){
                if(point.right ==null){
                    point.right = node;
                    node.parent= point;
                    node.grand = node.parent.parent;
                    return this._isLostBalance(node);
                }else{
                    node = null;
                    return this._appendHelp(point.right,item);
                } 
            }

        }
    }


    append(item){
      const node = this._appendHelp(this.root,item);

      if(node.lostBalance !== null){

            if(node.lostBalance === 'll'){
                this._llRotate(node);
            }
            if(node.lostBalance === 'rr'){
                this._rrRotate(node);
            }
            if(node.lostBalance === 'lr'){
                this._lrRotate(node);
            }
            if(node.lostBalance === 'rl'){
                this._rlRotate(node);
            }
      }

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
// tree.append(10).append(8).append(15).append(6).append(9).append(3).append(7).append(14).append(19).append(13)
//     .append(12).append(11);
// tree.delete(10);
//tree.append(4).append(3).append(5).append(2).append(1);

//tree.append(2).append(1).append(3).append(4).append(5);

//tree.append(10).append(5).append(15).append(2).append(3);

//tree.append(10).append(5).append(15).append(20).append(18);

//tree.append(5).append(10).append(15).append(18).append(20);
//tree.append(15).append(10).append(5).append(18).append(20);
//tree.append(15).append(10).append(5).append(18).append(20);
// tree.append(5).append(10).append(15).append(4).append(2).append(18).append(20);


//tree.append(2).append(4).append(20);
//tree.append(10).append(4).append(15).append(2).append(18).append(20);
tree.append(4).append(2).append(10).append(5).append(18).append(20);
console.log(tree.toString());
