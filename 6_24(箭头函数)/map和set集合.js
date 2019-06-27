
//Map
const tests = new Map();
tests.set( ()=>2+2, 4);       //key为箭头函数，value为值
tests.set( ()=>1+2, 0);
for(const e of tests){
    console.log( e[0]() === e[1] );
}


//Set
const s = new Set([0,1,2,3]);
s.add(-1);
console.log(s);
s.delete(2);
console.log(s);
console.log(s.has(3));