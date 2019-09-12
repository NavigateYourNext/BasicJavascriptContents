let number = 10;

for(let i = 1; i <= number; i++)
{
    console.log (i);
}

let fruits = ['Apple', 'Mango', 'Jackfruit'];

for(i in fruits)
{
    console.log (fruits[i]);  //for in loop
}

for(x of fruits)
{
    console.log (x);  //for of loop
}