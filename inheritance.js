class Car
{
    setname(name)
    {
        this.name = name;
    }

    startEngine()
    {
        console.log ("Car Engine Starts " +this.name);
    }

    stopEngine()
    {
        console.log ("Car Engine Stop "+this.name);
    }
}

class BMW extends Car
{
    topSpeed(speed)
    {
        console.log("Speed of "+this.name+" is : "+speed); 
    }
}

let myCar = new BMW(); // Static Polymorphism
myCar.setname ("BMW M3");
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200);

let myCar1 = new Car(); //Dyamic Polymorphism
myCar1.setname("Audi");
myCar1.startEngine();
myCar1.stopEngine();
myCar1.topSpeed(200); //It can't call topSpeed method of child class