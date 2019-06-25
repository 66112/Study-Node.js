"use strict"
const x = "this is math!";
//x = "...";          //错误
const test = {name: "张三"};
test.name = "李四";
//console.log(test);

const num = [2,6,7,8,1];

//如果为真，则成立把元素放在一个新数组中
//const even = num.filter(function(x){return x%2 === 0});

//箭头函数
//特性一：
//const even = num.filter(x=>x%2 === 0);    //一行语句不用return
//console.log(num);
//console.log(even);

// const even = num.filter(x => {
//     if(x%2 === 0){
//         console.log(x + ' is even!');
//         return true;        //之后才能将元素返回
//     }
// });
// console.log(even);

//特性二：
function DelayedGreeter(name){
    this.name = name;
}
DelayedGreeter.prototype.greet = function(){    //加入greet方法
    setTimeout( (function cb(){
          console.log('Hello ' + ' ' + this.name);
    }).bind(this),500);     //500ms,绑定this后，
    //setTimeout( ()=>console.log('Hello ' + ' ' + this.name),500 );
    //如果是对象调用了该方法，则this指针指向该对象,包括下面的构造函数；
    //如果没有明确的对象，则指向window
};

const greeter = new DelayedGreeter('World');    //this指向greeter
console.log(greeter.name);   
greeter.greet();
