const s = new Set([0,1,2,3]);
let obj = {};
const map = new WeakMap();
map.set(obj,{key: "some_value"});       //只允许对象作为主键,为obj中添加属性
console.log(map.get(obj));      //{key: 'some_value'}
console.log(obj);       //{}

let obj1 = {key: "val1"};
let obj2 = {key: "val2"};
const set = new WeakSet([obj1,obj2]);
console.log(set.has(obj1));     
obj1 = undefined;
console.log(set.has(obj1));         //从set中删除