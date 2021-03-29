function test(){
    return true;
}

console.log(test()); //returns true

function test1(){
    return false;
    return true;
}

console.log(test1()); //only executes first command

function double(x){
    return x*2;
}

console.log(double(40)); // returns two times given number 

function count(num){
    if(typeof num != 'number'){
        return false;
    }
    for(let i = 1 ; i <= num ; i++ ){
        console.log(i);
    }
}
count(4); // returns 1,2,3,4
console.log(count('x')); // returns false


function stop(x){
    if(x == 3){
        return;
    }
    console.log(x);
}
stop(3); // returns false
stop(5); // returns true


function outer(a){
    function inner(){
        console.log(a);
    }
    return inner(); // returning a function
}

outer(7); // returns 7 