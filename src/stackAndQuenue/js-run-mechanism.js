/**
 *                                 Javascript Run-Time Environment :  J-RTE
 *           JS  Engine                                
 *                                                  Web APIS
 *                                          DOM
 *                                          AJAX
 *                                          Timeout
 * 
 * 
 *                                   Event Loop    Callback Queue     
 * 
 *Memory Heap    call stacks                   OnClick OnLoad  OnTimeout  ... 
    
 * 
 * 
 * 1: we should understand the js code to be execute must be in JS Engine; 
 * 2: the js code can be classic into two  group : one is normal code  naturally  be   in JS Engine scope 
 * 3: Web APIS  DOM AJAX  Timeout , these code will do some other things which(not belong the JS Engine) and then  
 *    these APIs all have callback  function,  
 * 4: The  J-RTE  offer an Callback Queue and manage these  Web APIs's callback function,
 * 
 * 5: The J-RTE also have an Event Loop mechanism  to link the JS Engine and Event Loop
 * 
 * 6: when the JS Engine is empty  then the Event Loop will pop the callback function from the Callback Queue to JS Engi ne  
 * 
 */
const a =1;
const b=10;
const c =100;

console.log('1');

setTimeout(() => {
    console.log('2'); 
}, 0);

console.log('3');



const one1 = ()=> {

    const two = ()=>{
        console.log('4');
    }
    console.log('in one before two()')
    two();
    console.log('in one after two()')
}
/**  if i call one() then you can see follow call process;
 *  
 * console.log('in one after two()')
 * console.log('4)
 * two
 * console.log('in one before two()')
 * one
 */