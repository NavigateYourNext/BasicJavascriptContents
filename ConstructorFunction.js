//It is also used to create objects
function circle (radius)
{
    this.radius = radius;
    this.draw = function()
    {
        console.log("Draw Radius : "+radius);
    }
}


//To call a constructor use a new keyword.

const a = new circle(5);
console.log(a);
console.log(a.radius);
a.draw();