/**
  *     2 -  0
  *  /   \
 *  1  - 3
 */

 //Edge List
 const graph0 = [[0,2],[2,3],[2,1],[1,3]];

 // Adjacent List
               // 0   1      2      3
 const graph2 =[[2],[2,3],[0,1,3],[1,2]];

 // Adjacent Matrix
 /*

 */
 const graph3 = [
     [0,0,1,0],   //0
     [0,0,1,1],   //1
     [1,1,0,1],   //2
     [0,1,1,0]    //3
 ];

 const graph3_1 = {

     0:[0,0,1,0],   //0
     1:[0,0,1,1],   //1
     2:[1,1,0,1],   //2
     3:[0,1,1,0]    //3
 }

 /**
  *     3 -  4  -   5
  *     |    |
  *     1 -  2    6  
  *      \  / 
  *       0
  */

  class graphNode{

      constructor(value){
          this.value=value;
          this.edges={};
      }

      addEdge(node){
       // debugger;
          if(Object.keys(this.edges).map(x=>Number(x)).includes(node.value)){
              return this;
          }else{
                this.edges[node.value]=node;
            return this;
          }
      }

  }

  class graph{

      constructor(){
          this.data={};
      }

      _isNodeInGraph(value){

       const finder =  Object.keys(this.data).map(x=>Number(x)).includes(value);
       if(finder){
           return this.data[value];
       }else {
           const node = new graphNode(value);
            this.data[value]=node;
           return node;
       }

      }

      linkTwoNode(v1,v2){
        const node1 = this._isNodeInGraph(v1);
        const node2 = this._isNodeInGraph(v2);
        node1.addEdge(node2);
      }

      _getAllEdges(node) {
       
       const edges =  Object.keys(node.edges).reduce((acc,item)=> acc + node.edges[item].value ,'');
       return node.value + '=>' + edges;
      }

      toString(){
        
        const result =  Object.keys(this.data).map(x=> this._getAllEdges(this.data[x]));
        return result;
      }
  }

  const g = new graph();

  g.linkTwoNode(0,1);
  g.linkTwoNode(0,2);

  g.linkTwoNode(1,0);
  g.linkTwoNode(1,2);
  g.linkTwoNode(1,3);

  g.linkTwoNode(2,0);
  g.linkTwoNode(2,1);
  g.linkTwoNode(2,4);

  g.linkTwoNode(3,1);
  g.linkTwoNode(3,4);

  g.linkTwoNode(4,2);
  g.linkTwoNode(4,3);
  g.linkTwoNode(4,5);

  g.linkTwoNode(5,4);
  g.linkTwoNode(5,6);

  g.linkTwoNode(6,5);

  console.log(g);
  console.log(g.toString());


