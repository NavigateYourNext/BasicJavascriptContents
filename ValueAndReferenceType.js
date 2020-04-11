//Value Types: - NUMBER, BOOLEAN, STRING, UNDEFINED, NULL
//Reference Types: - OBJECT, FUNCTION, ARRAY

//Value Type
let x = 10;
y = x;
x = 20;

console.log(x);
console.log(y);

//Reference Type
let p = {
    value : 10
};

let q = p;

p.value = 20;

console.log(q.value);
console.log(p);
console.log(q);