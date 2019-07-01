const x = 22;
const y = 27;
const obj = {x, y};

module.exports = {
    square (x){
        return x*x;
    },
    cube (x){
        return x*x*x;
    }
};

const person = {
    name: 'George',
    surname: 'Boole',
    get fullname(){
        return this.name + ' ' + this.surname + ' 123';
    },
    set fullname(fullname){
        let parts = fullname.split(' ');
        this.name = parts[0];
        this.surname = parts[1];
    }
};
console.log(person.fullname);
console.log(person.fullname = 'Alan Turing');       //set方法返回的值是get方法返回的相同属性的值    
console.log(person.name);

