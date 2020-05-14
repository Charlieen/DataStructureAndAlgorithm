let user = {
    age:54,
    name:'kylie',
    magic:true,
    scream:function(){
        console.log('ahhh');
    }
}

user.age //O(1)
user.spell='abar kadabr'; // O(1)
user.scream(); //  O(1)

const set = new Set();
const map = new Map();
