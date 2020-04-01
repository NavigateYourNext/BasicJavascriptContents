let numbers = [1,2,3,4,5];

for(x of numbers)
{
    console.log (x);
}

console.log (numbers);

let cars = new Array('Porsche', 'Lamborgini', 'BMW');
console.log (cars);

cars.push ('Maruti');
console.log (cars);


let fruits = ["Apple","Mango","Cherry","Orange","Papaya"];
console.log (fruits);

fruits.pop(); // it will remove last element of an array
console.log (fruits);

fruits.shift(); // it will remove first element of an array
console.log(fruits);

fruits.push("Banana"); //it will add element in an array
console.log (fruits);

fruits.unshift("Strawberry"); //it will add element to first position in an array
console.log(fruits);

delete fruits[1]; //delete element of mentioned position but position remains at it is
console.log (fruits);

fruits.splice(0,2); //it will remove elements from 1st mentioned parameter till number of deleteions mentioned in 2nd parameter
console.log (fruits);

fruits.splice(2,0,"Jackfruit","Grapes"); //it will add elements from mentioned position '0' stands for no deletion
console.log (fruits);

let citrusFruits = fruits.slice(0,2); //it will store elements from 1st mentioned position till 2nd mentioned position
console.log ("Hi"+citrusFruits);

citrusFruits.concat(fruits); //concat arrays if more arrays are present use ',' to seperate it
console.log (citrusFruits);