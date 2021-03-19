async function getUsers(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response.json());
}
getUsers();


function promiseGetUsers(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            console.log(element.name);
        });
    });
}    
promiseGetUsers("https://jsonplaceholder.typicode.com/users")