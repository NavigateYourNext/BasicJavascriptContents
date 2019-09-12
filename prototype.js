let EmpDetails = function(name,age) //This creates a construtor for class
{
    this.name = name;
    this.age = age;


 
   
};

EmpDetails.prototype.getName = function() //This is called as Prototype Based Inheritance In Javascript
{
    return this.name;
}

EmpDetails.prototype.getAge = function()  //This is called as Prototype Based Inheritance In Javascript
{
    return this.age;
}

let emp = new EmpDetails("Akshay",24);
console.log (emp.getName());
console.log (emp.getAge());

