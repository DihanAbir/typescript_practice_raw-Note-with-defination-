// starter basic informations: 
// 1. add a ts file 
// 2. to convert ts to js, use this command : tsc file names 
// 3. if both ts file and js file same, then convert ts to js by typing this command: "tsc filenam.ts" 
// 4. for auto start when press the save key without reload, use watch flag after all the necessary command: tsc sandbox.ts -w
// -----------------******************-----------------
// author description: 
// Name: Dihan Abir
// Main Stack: JavaScript
// github: /DihanAbir
// basic starter to typescript to javascript 
var character = 'dihan';
console.log(character);
var input = document.querySelectorAll('input');
console.log(input);
console.log('ok');
input.forEach(function (value) {
    console.log(value);
});
// arrays 
// array should be plural nameing otherwise get errors;  
var names = ['dihan', 'abir', 'nahid'];
names.push("dihanabir");
//  need to be same value type to push otherwise get error  
// names.push(10);
// push mixed valu type
var mixNames = ['dihan', 21, true];
mixNames.push(12);
// object
var named = {
    name: "dihan",
    age: 12,
    address: "mirpur"
};
// not allow to add new item on main object manually 
// named.dihan = "dihan abir";
//  named = {
//     name: "murag",
//     age: 29,
// }
// also not alow to manipulate default key value, you have to add all the value in object on referanced oobject 
// here re-create new object of named object which is a new object on behalf referanced name object 
// to manipulate this objenct you have a pass same key , and ot allow to add new key ot not remove any keyof, both will give you error 
// explicit type 
var car;
var age;
var isLoading;
// age = 'dihan '  get arror  cz age is not a string!
// so on
// arrays
var ninjas;
var ninjasEmpty = []; //to initialize as a empty array
// ninjas = ['dihan', 12] -> not all the value are string ; 
ninjas = ['dihan', 'murad']; //->  all the value are string ; 
// if we initialize with a empty array then we can push otherwisr will get error 
ninjas.push("dihanabir");
ninjasEmpty.push("dihanabir");
// union types 
// -> to add a mixed value on array then we can use unior 
var mixed = [];
mixed = ["dihan abir", 21, 'mirpur-14'];
// random variable 
var ran;
// objects 
var ranobj;
ranobj = { name: 'dihan', age: 21 };
// for future initialization
var ranobh2;
ranobh2 = {
    name: "dihan abir",
    age: 21,
    isLoading: false
};
