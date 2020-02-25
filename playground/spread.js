function add(a,b){
  return a+b;
}
console.log(add(3,1));
var groupa=[1,2];
console.log(add(...groupa));

var groupA=['kanth','JK'];
var groupB=['Jyo','JK'];
var final=[...groupA,'Mammu','Kanna',...groupB];
console.log(final);


var person=['Kanth',20];
var persontwo=['Jyo',20];

function greet(name,age){
  console.log('Hi '+name+' your age is '+age);
}
greet(...person);
greet(...persontwo);

var names=['kammu','pandu'];
var final=['lucky',...names];
final.forEach((name) => {
  console.log('Hi '+name);
});
