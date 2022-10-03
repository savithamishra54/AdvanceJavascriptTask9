//1.Write a function and use 'call' to call the function

var obj ={num:2};

var addToThis = function(a)

{

  return this.num+a;

};

 console.log(addToThis.call(obj,3));





//2.Write a program using apply

var obj ={num:2};

var addToThis = function(a,b,c)

{

  return this.num+a+b+c;

};

var arr=[1,2,3];

console.log(addToThis.apply(obj,arr));





//3.Write a program using bind

 var obj ={num:2};



var addToThis = function(a,b,c)



{



  return this.num+a+b+c;



};



var arr=[1,2,3];



var bond = addToThis.bind(obj);



console.log(bond(1,2,3));







//4.Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.

Dont pass in args. Read from 'this' and use BIND

 var student ={age:20};



var printsAge = function()



{



  return this.age;



};







var bond = printsAge.bind(student);



console.log(bond());

//Write down the code like the way the youtuber does
let multiply = function(x,y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5);

let multiply = function(x) {
    return function(y) {
        console.log(x*y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByThree(5);