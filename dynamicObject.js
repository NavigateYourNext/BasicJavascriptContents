const circle = 
{
    radius : 1,
    color : 'red',
    log()
    {
        console.log("Log");
    }
}

console.log(circle);

//Add attributes to circle object
circle.price = 100;
circle.draw = function()
{
    console.log("Draw");
}

console.log(circle);

//Delete attributes of circle object
delete circle.price;

console.log(circle)