"use strict";
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
ranobj = { name: 'dihana', age: 21 };
// for future initialization
var ranobh2;
ranobh2 = {
    name: "dihan abir",
    age: 21,
    isLoading: false,
};
// any type \\ or dynamic type
var year = 25;
// array
var mix;
// mix.push("Dihanabir");
// obj
var anyobj;
anyobj = { name: "banglaesh", age: 'sadas', year: true };
// function typed in ts 
var demofun;
demofun = function () {
    console.log("this is a demo function!");
};
var add = function (a, b, /* optional argument*/ c, /* default argument*/ d) {
    if (d === void 0) { d = 20; }
    console.log(a + b);
    console.log(d);
};
add(2, 4, 4);
// classes
var invoice = /** @class */ (function () {
    function invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    invoice.prototype.formate = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return invoice;
}());
var invoiceOne = new invoice("dihan", "for make a website", 1500);
console.log(invoiceOne);
var invoiceTwo = new invoice("abir", "for make a application", 3700);
console.log(invoiceTwo);
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);
