class Student
{
    setStudentDetails(name,id,phoneNumber)
    {
        this.name = name;
        this.id = id;
        this.phoneNumber = phoneNumber;
    }

    getStudentName()
    {
        return this.name;
    }

    getStudentId()
    {
        return this.id;
    }

    getPhoneNumber()
    {
        return this.phoneNumber;
    }

}


let stu = new Student();
stu.setStudentDetails("Akshay",1,"879666123");



console.log(stu.getStudentId());
console.log(stu.getStudentName());
console.log(stu.getPhoneNumber());