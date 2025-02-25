//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.

//Menu Cars

//class Car
    //make
    //model
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model; 
    }
}

//class Menu
class Menu {
    constructor() {
        this.cars = []; //Array to store car objects.
    }



//add cars
addCar(){
    let carMake = prompt("Enter car make:");
    let carModel =prompt("Enter car model:");

    if(carMake && carModel) { //Make sure inputs are not empty
        this.cars.push(new Car(carMake, carModel));
        alert("Car added: ${carMake} ${carModel}");
    } else {
        alert("Invalid input. Please add car.");
    }
}


//delete cars
deleteCar(){
    let carIndex = prompt("Enter car index to DELETE:");
    this.cars.splice(carIndex, 1);
}
//view cars
viewCars() {
    if (this.cars.length === 0) {
        alert("No cars in inventory.");
        return;
    }

    let displayCars = ""; // Initialize empty string
    for (let i = 0; i < this.cars.length; i++) {
        displayCars += `${i}) ${this.cars[i].make} ${this.cars[i].model}\n`;
    }

    alert(`Car Inventory:\n\n${displayCars}`);
}
//see a menu
showMainMenu() {
    return prompt(`
    Main Menu:
    ------------------------------------
    0) Exit Menu
    1) Add Car
    2) Delete Car
    3) View All Cars
    `);
}
//start the memu
    start(){
        let selection = this.showMainMenu();

        while(selection != 0){

            switch(selection) {
            
                case "1": this.addCar();
                break;

                case "2": this.deleteCar();
                break;

                case "3": this.viewCars();
                break;

                default: selection = 0;
            }
        selection = this.showMainMenu();
        }
        alert("Exiting Menu...goodbye!");
    }
}

//instantiate the menu and invoke the start method

let menu = new Menu();

menu.start();
