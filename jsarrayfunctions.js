const data=[
    {"userId": 1,"id": 1,"title": "title 1","body": "body 1"},
    {"userId": 1,"id": 2,"title": "title 2","body": "body 2"},
    {"userId": 3,"id": 3,"title": "title 3","body": "body 3"},
    {"userId": 1,"id": 4,"title": "title 4","body": "body 4"},
    {"userId": 5,"id": 5,"title": "title 5","body": "body 5"},
    {"userId": 1,"id": 6,"title": "title 6","body": "body 6"},
    {"userId": 7,"id": 7,"title": "title 7","body": "body 7"},
    {"userId": 8,"id": 8,"title": "title 8","body": "body 8"},
];

let ages = [12,16,20,24,28,34,84,16,78,42,1,4,45,98];

//foreach
data.forEach(items => {
    console.log(items);  //tüm datayı yazdırır
});

//filter
let greaterThanTwenty = ages.filter(function(age){
    if(age > 20){
        return true;
    }
});

console.log(greaterThanTwenty); // 20'den büyük sayıların dönme


let titles = data.filter(data => data.userId == "1");

console.log(titles); // userId 1 olan datalar

//map
let agesSquare = ages.map(age => age * age);

console.log(agesSquare); // yaşların karesi

//sort
let sortedAges = ages.sort((a,b) => b - a); 

console.log(sortedAges);//büyükten küçüğe yazma

//shift
let shifted = ages.shift();
console.log(ages);//ilk elemanı çıkarır


//Copy an array
let arr=[1,2,3];
let newArray = arr.map(x => x);
console.log(newArray);

//reduce
let letters = ["a","b","c","d","e","f"];
let add = (x,y) => x + y ;
console.log(letters.reduce(add));//hepsini birleştirir.

//key
let iterator = data.keys();
for ( let key of iterator ){
    console.log(key + " ");
}

//join
console.log(ages.join("-"));

//includes
console.log(ages.includes(4));
console.log(ages.includes(121));

//splice
ages.splice(0,1,77)//ilk indexdeki değeri verilen değerle değiştirir
console.log(ages);