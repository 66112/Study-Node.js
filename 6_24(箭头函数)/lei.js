
 function Person(name,surname,age){
     this.name = name;              
     this.surname = surname;
     this.age = age;
 }
 Person.prototype.getFullName = function(){     //普通方法
     return this.name + this.surname;
 };
 Person.older = function(person1,person2){      //静态方法
     return (person1.age > person2.age) ? person1 : person2;
 };

 class Person1{
     constructor(name,surname,age){
        this.name = name;              
        this.surname = surname;
        this.age = age;
     }
     getFullName(){
        return this.name + this.surname;
     }
     static older(person1,person2){     //不能访问成员变量
        //this.name = '张三';
        return (person1.age > person2.age) ? person1 : person2;
     }
 }

 //两种实现方法结果一样，采用第二种
 var person1 = new Person1('1','2','3');
 var person2 = new Person1('4','5','6');
 console.log(Person1.older(person1,person2));

 class PersonWithMiddlename extends Person1{
     constructor(name,middlename,surname,age){
         super(name,surname,age);           //调用父类
         this.middlename = middlename;
     }
     getFullName(){         //重写这个方法
         return this.name + ' ' + this.middlename + ' ' + this.surname;
     }
 }

 var test1 = new PersonWithMiddlename('7','8','9','10');
 var test2 = new PersonWithMiddlename('j','q','k','a');
 console.log(PersonWithMiddlename.older(test1,test2));
