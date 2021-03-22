let myCar = {
    company: 'Ford',
    model: 'Mustang',
    year: 1969,
    fullModel(){
        return console.log(this.company + " " + this.model);
    }
};

myCar.company="BMW";
myCar.fullModel();
console.log(myCar.company,myCar.model,myCar.year);

//constructor function
function Car(company,model,year){
    this.company=company;
    this.model=model;
    this.year=year;
}

let car1 = new Car("Mercedes","Benz","2008");//yeni obje üretme
console.log(car1);

let Animal = {
    type : "Fish",
    displayType(){
        console.log(this.type);
    }
}

var animal1 = Object.create(Animal);//Object.create() methodu
animal1.type = "Bird";
animal1.displayType();