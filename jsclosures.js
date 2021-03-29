let isim = "Ahmet"; // global scope

function merhaba(){
    console.log('Merhaba' + " " +isim);
}

isim = "Mehmet";

merhaba(); //returns Merhaba Mehmet


function calisan(){
    let employeer = "Mehmet"; // local scope
    console.log(employeer);
}

let employeer = "Ali";

calisan(); // returns Mehmet


function adder(x){
    return function(y){
        return x+y;
    };
}

var add5 = adder(5); // add5 is a function
var add10 = adder(10); // add10 is a function

console.log(add5(2)); // returns 7
console.log(add10(2)); // returns 12


function createObject(){
    let x = 12;
    return{
        log(){
            console.log(x);
        },
        increment(){
            x++;
        },
        update(value){
            x = value;
        }
    }
}

let a = createObject();
a.increment(); // increments 1 value of x
a.log(); // returns 13
a.update(20);
a.log(); //returns 20
let b = createObject();
b.update(47);
b.log(); // returns 47