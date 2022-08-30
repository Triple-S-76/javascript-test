/*

console.log("hi it worked")

let message = "testing the message";

console.log(message);

let user = "John"
let age = 25
message = "Hi I am John";

console.log(message);

message = user + " " + age;

console.log(message);

let admin, named;
named = "John";
admin = named;
console.log(admin);

let ourPlanetName = "Earth";
let currentUserName = "John";

console.log(currentUserName + " is from " + ourPlanetName)

let x = 8;
let y = 3;
let z = x % y;

console.log(z);

let x = 5;
let z = x ** 2;

console.log(z);

let a = Math.pow(5,3);

console.log(a);



let x = (100 + 50) * 3;

console.log(x);

let x = 123;
let y = new Number(123);

console.log(x);
console.log(y);

console.log(typeof x)
console.log(typeof y);

console.log(x==y);
console.log(x===y);


let x = new Number(123);
let y = new Number(123);

console.log(x==y);

let myInt = 5;
let myFloat = 6.667;
console.log(myInt);
console.log(myFloat);
console.log(typeof myInt);
console.log(typeof myFloat);

let x = myFloat.toFixed(5);
console.log(x);

let x = "557";
console.log(x);
console.log(x + 3);
console.log(Number(x) + 3);


let x = 6;
x /= 1.5;
console.log(x);

let a = 8;
let b = 16;
let c = 9;
let d = 7;

let e = a + b;
console.log(e);

let f = c - d;
console.log(f);

let g = e * f;

console.log(g);

let a = (true + true) * (true + true + true);
let b = false + false;
console.log(a);
console.log(b);

console.log(39 + 32);

console.log(1+2+3+4+5+6);

console.log((4 + 6 + 9) / 77);

let a = 10;

console.log(9 * a);

let b = 7 * a;

console.log(b);

const max = 57;

console.log(max);

let actual = max - 13;

console.log(actual);

let percentage = actual / max;

console.log(percentage);

const string = "Not on TV";

console.log(string);

const badString = string;

console.log(badString);

const bigmouth = `I've got no right to take my place... ${1+2}`

console.log(bigmouth);

const myString = '123';
console.log(myString);
console.log(typeof myString);

let myNum = Number(myString);

console.log(myNum);
console.log(typeof myNum);

let txt = "Apple, Banana, Kiwi";

let text= txt.length;
console.log(txt);
console.log(text);

let part = txt.slice(-12);
console.log(part.length);
console.log(txt);
console.log(part);

let txt = "Apple, Banana, Kiwi";
let part1 = txt.slice(7, 13);
let part2 = txt.substring(7, 13);

console.log(part1);
console.log(part2);

console.log(txt);

let text = "555";
let padded = text.padEnd(4, "0");
console.log(padded);

let text = "hello";

let char = text.charCodeAt(4)
console.log(char);

let text = "hello";

let char = text.indexOf();

console.log(text.charAt(1));

let a = "a";
let b = "b";

if (a < b) {
    console.log("a is less")
} else if (b < a) {
    console.log("b is less")
} else {
    console.log("equal")
}

console.log("z" <= "G");

let random = 123;

if (random = true || false) {
    console.log("it was true or false");
} else {
    console.log("this will never run");
}

let a = "";
let b = "b";
let c = "";

console.log(a || b || c || "hi");

let hour = 2;
let min = 30;

if (hour == 2 && min == 30) {
    console.log("its 2:30")
}

console.log( 1 && 2 && "a" );

let age = 13;

if (age >= 14 && age <= 90) {
    console.log("the age of " + age + " is good to go")
}

if (age < 14 || age > 90) {
    console.log("the age of " + age + " is no good")
}

if (!(age >= 14 && age <= 90)) {
    console.log("nope");
}

let userName = prompt("Login Please");

if (userName === null || userName === "") {
    alert("Cancelled");
} else if (userName !== "Admin") {
    alert("I don't know you");
} else if (userName === "Admin") {

    let password = prompt("Password Please");

    if (password === "TheMaster") {
        alert("Welcome Master");
    } else if (password === null || password === "") {
        alert("Cancelled");
    } else {
        alert("Wrong Password");
        console.log("Red Alert, Hacker!!")
    }
}

let num = 4;

if (num < 5) {
    console.log("1");
} else {
    console.log("2");
}

let misc = "";

if (misc) {
    console.log("yes")
} else {
    console.log("no")
}

let misc = 5;

switch(misc) {
    case 2:
        console.log(22);
        break;
    case 3:
        console.log(33);
        break;
    case 4:
        console.log(44);
        break;
    case 5:
        console.log(55);
        break;
    case 6:
        console.log(66);
        break;
    case 7:
        console.log(77);
        break;
    default:
        console.log("default");
        break;    
}

let misc = "test2";

if (misc == "test") {
    console.log("run test");
    
    } else if (misc == "test1") {
        console.log("run test 1");

    } else {
        console.log("stop all tests")
    }

let test = true ? console.log('yes') : console.log('no');

let age = prompt('age?', 18);

let message = (age < 3) ? 'baby':
  (age <= 17) ? 'hey kid':
  (age == 18) ? 'right on':
  (age >= 19) ? 'too old':

console.log(age);
console.log(message);

let javascript = prompt('What is the official name of Javascript');

if (javascript == "ECMAScript") {
    console.log('You got it');
    } else {
        console.log('You are wrong');
    }

let num = prompt('number?');

if (num > 0) {
    console.log(1);
} else if (num < 0) {
    console.log(-1);
} else {
    console.log(0)
}

(1 + 2 < 4) ? console.log('below') : console.log('over');

let login = 'me';

let message;

message = (login == 'me') ? 'hello':
    (login == 'you') ? 'hey':
    (login == '') ? 'no login':
    '';

console.log(message);

let info = 'test4';

switch(info) {
    case 'test':
        console.log('test')
        break;
    case 'test2':
        console.log('test2')
        console.log('test2')
        break;
    case 'test3':
        console.log('test3')
        console.log('test3')
        console.log('test3')
        break;
    default:
        console.log('default');
}

// const day = new Date().getDay();

let day = 0;

switch (day) {
    case 0:
        console.log('Sunday')
        break;
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    default:
        console.log('huh?')
}

console.log(day);

let grade = 100;

switch(true) {
    case grade == 100:
        console.log('Cheater')
        break;
    case grade >= 90:
        console.log('A')
        break;
    case grade >= 80:
        console.log('B')
        break;
    case grade >= 70:
        console.log('C')
        break;
    case grade >= 60:
        console.log('D')
        break;
    case grade >= 50:
        console.log('E')
        break;
    default:
        console.log('F');
}

let month = 5;

switch (month) {
    case 0:
    case 1:
    case 2:
        console.log('Winter');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Fall');
}

let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');

console.log(myText);
console.log(newString);

let myArray = ['I', 'Love', 'chocholate', 'frogs'];

console.log(myArray);
console.table(myArray);

let madeAString = myArray.join(' ! ') + '???';
console.log(madeAString);

myFunction();
myFunction();
myFunction();

function myFunction() {
    console.log('all-right');
    test();
}

test();
test();
test();

function test() {
    console.log('test');
}

let test = 'I love Megadeth';

console.log(test);

let test2 = test.replace('Megadeth', 'Metallica');

console.log(test2);
console.log(test);

let myArray = ['1', '2', '3', '4'];

console.log(myArray);
console.table(myArray);

let test = myArray.join(', ');

console.log(test);

let test2 = myArray.join();

console.log(test2);

let misc = 'realname1';
let name1 = 'test';
let test1 = 'test1';
let different = 'different';

function hello(misc123, test123, testing = 'testing', different) {
    console.log(`hello ${misc}`);
    console.log(`Hello ${test1}`);
    console.log(`hello ${misc123}`);
    console.log(`hello ${test123}`);
    console.log(`hello ${test1}`);
    console.log(`hello ${testing}`);
    console.log(`hello ${different}`);
}

hello(1, 2, 3, 4);

(function () {
    console.log('anon');
})

let originals = [1, 2, 3];

let doubled = originals.map((a) => a * 2);

console.log(originals);
console.log(doubled);

console.log(typeof originals);
console.log(typeof doubled);


const x = 1;

    function a() {
      const y = 2;
      output(z);
    }

    function b() {
      const z = 3;
      output(y);
    }

    function output(value) {
      const para = document.createElement('p');
      document.body.appendChild(para);
      para.textContent = `Value: ${value}`;
    }

let a = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

let a2 = a.map(function(s) { return s.length; });

console.log(a2);

let a3 = a.map((s) => s.length);

console.log(a3);


let obj = {
    i: 10,
    b: () => console.log(this.i, this),
    c() {
        console.log(this.i, this);
    },
}

obj.b();
obj.c();

function random(number) {
    return Math.floor(Math.random() * number);
}

console.log(random(3000));

function squared(num) {
    return num * num;
}

console.log(squared(5));

function cubed(num) {
    return num * num * num;
}

console.log(cubed(5));

function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
        num *= x;
        x--;
    }
    return num;
};

console.log(factorial(5));

function favAnimal(animal) {
    console.log(animal + ' is my fav');
}

favAnimal('kitten');

function showMessage(from = 'No name', text = 'No text') {
    console.log(from + ': ' + text);
}

showMessage('Real Name');

function test(a) {
    console.log('it ran');
    return 'something';
}

console.log(test('did it run?'));

  
function checkAge(age) {
    return (age > 18) ? true : 'Did your parents allow?';
}

console.log(checkAge(22));

function checkAge2(age) {
    return (age > 18) || 'Did your parents allow?';
}

console.log(checkAge2(19));

function minNumber(a,b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
};

console.log(minNumber(5,3));

function minNumber2 (a, b) {
    return a < b ? a : b;
}

console.log(minNumber2(2,1));

let hi = function() {
    console.log('hey');
    return 'something';
};

hi();

console.log(hi());

let test = hi();

console.log(test);

function add7(num) {
    console.log(num + 7);
    return num + 7;
}

console.log(add7(4));

function multiply(num1, num2) {
    console.log(num1 * num2 + " test")
    return num1 * num2;
}

console.log(multiply(2, 4));

function capitalize(firstCap) {
    console.log(firstCap.charAt(0).toUpperCase() + firstCap.slice(1));
}

capitalize('testTEST');


function lastLetter(string) {
    console.log(string.slice(-1));
}

lastLetter('testing');

function run() {
    var foo = 'Foo';
    let bar = 'Bar';

    console.log(foo, bar);

    {
        var moo = 'Mooo'
        let baz = 'Bazz';
        console.log(moo, baz);
    }

    console.log(moo);
    console.log(baz);
}

run();

var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = function() {
        console.log('My value is ' + i);
    };
}

for (var j = 0; j < 3; j++) {
    funcs[j]();
}

function run() {
    console.log(foo);
    var foo = 'Foo';
    console.log(foo);
}

run();

var foo = 'Foo';
let bar = 'Bar';

console.log(foo);
console.log(bar);

console.log(window.foo);
console.log(window.bar);

'use strict';

var foo = 'foo1';
console.log(foo);
var foo = 'foo2';
console.log(foo);

let bar = 'bar1';
//let bar = 'bar2';

// let answer = parseInt(prompt('Enter a number'));

let answer = 30;


// console.log(answer);

for (let i = 1; i <= answer; i++) {    
    
    let result = ''
    
    if (i % 3 === 0 && i % 5 === 0) {
        result = 'FizzBuzz';
    } else if (i % 3 === 0) {
        result = 'Fizz';
    } else if (i % 5 === 0) {
        result = 'Buzz';
    } else {
        result = i;
    }
    console.log(result);
}

function FirstFactorial(num) {
    let result = num
    for (i = num; i > 1; i--) {
       result = result * (i-1);
    }
    return result;
}

console.log(FirstFactorial(9) + " is the result");

let a = '3';
let b = '4'

function add () {
    let c = parseInt(a) + parseInt(b);
    console.log(c);
}

function print() {
    add();
}

print();

let test = 123;

let str1 = 'a';
let str2 = 'b';

let message = str1.concat(str2);

console.log(message);

*/






















































