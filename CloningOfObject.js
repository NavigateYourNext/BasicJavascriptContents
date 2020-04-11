const circle = {

    radius : 2,
    draw()
    {
        console.log("Draw Function");
    }
}

//1. for-in loop

const anotherCircle = {};
console.log(anotherCircle);

for(let key in circle)
{
    anotherCircle[key] = circle[key];
}

console.log(anotherCircle);

console.log("--------------------");

//2. using Object.assign method

const anotherCircle1 = Object.assign({},circle);
console.log(anotherCircle1);

console.log("--------------------");

const anotherCircle2 = Object.assign({color:'red'},circle);
console.log(anotherCircle2);

console.log("--------------------");

//3. using spread ... opertator

const anotherCircle3 = {...circle};
console.log(anotherCircle3);