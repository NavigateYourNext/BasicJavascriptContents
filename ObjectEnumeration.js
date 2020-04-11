//Enumeration properties of an object: Get all the properties of an object


const circle = {
    radius : 1,
    draw(){
        console.log("Draw Function");
    }
};

//1. for-in loop
for(let key in circle)
{
    console.log(key, circle[key]);
}

console.log("--------------");

//2. for-of loop
for(key of Object.keys(circle))
{
    console.log(key);
}

console.log("--------------");

for(key of Object.entries(circle))
{
    console.log(key);
}

console.log("--------------");

//3. in operator
//check a property in an object

if('radius' in circle)
 console.log("Available");
else
 console.log("Not Available");

 console.log("--------------");