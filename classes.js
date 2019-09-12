class Student
{

    constructor(id, name)
    {
        this.id = id;
        this.name = name;
    }

    setDetails(id, name)
    {
        this.id = id;
        this.name = name;
    }

    getIdDetails()
    {
        return this.id;
    }

    getNameDetails()
    {
        return this.name;
    }
}

let classObject = new Student(3,"Akshay Shete");
//classObject.setDetails(1, "Akshay");

let id = classObject.getIdDetails();
let name = classObject.getNameDetails ();

console.log ("ID Is : "+id);
console.log ("Name Is : "+name);