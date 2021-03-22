let double = n => n * 2;

console.log(double(1560));


//Multiline Arrow Functions
/*
let sum = function (a,b){
    let result = a + b;
    return result;
}


*/
let sum=(a,b) =>{
    let result = a + b;
    return result;
}

console.log(sum(12,18));

//foreach with arrow functions

let data = ["data1","data2","data3","data4","data5","data6","data7"];

data.forEach((element,index) => {
    console.log(index+". data =",element);
});
