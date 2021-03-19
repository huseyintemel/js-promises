new Promise(function(resolve,reject){
    setTimeout( ()=> resolve(5),2000)
}).then(function(result){
    console.log(result);
    return result * 4;
}).then(function(result){
    console.log(result);
    return new Promise((resolve, reject) => {
    setTimeout( ()=> resolve(result * 4),1000);
    });
}).then(function(result){
    console.log(result);
    return result * result;
}).then(function(result){
    console.log(result);
}).catch(err => console.log(err))