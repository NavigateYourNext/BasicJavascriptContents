function Employee(name,age,baseSalary) // We can create a construtor without a class in Javascript
{
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    
    let monthlyBonus = 2000; // The scope of this variable is in this function only and make it Abstract

    let calculateFinalSalary = function() // The scope of this function is in this function only and make it Abstract
    {
        let finalSalary = monthlyBonus + baseSalary;
        console.log ("Final Salary Is : "+finalSalary);
    }

    this.getEmployeeDetails = function()
    {
        console.log ("Name : "+this.name+" and Age Is :"+this.age);
        calculateFinalSalary();
    }



}

let emp = new Employee("Akshay",24,25000);
emp.getEmployeeDetails();
