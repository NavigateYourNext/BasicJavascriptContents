//Factory functions means  : it produced number of objects


function createCircle(radius)
{

    //Method - 1
    
    // const circle = {
        
    //     radius : radius,

    //     draw : function()  // or you can defined like this also draw(){ }
    //     {
    //         console.log("Draw");
    //     }

    // }

    // return circle;


    //or you can define function like this also - Method 2

    return {
        radius,
        draw()
        {
            console.log("Draw Function")
        }
    }
}

const c1 = createCircle(1);
console.log(c1.radius);
c1.draw();

const c2 = createCircle(5);
console.log(c2.radius);
c2.draw();
