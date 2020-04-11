const now = new Date();
console.log(now);
console.log("-------------------------");

const date1 = new Date('June 9 2019 08:00');
console.log(date1);
console.log("-------------------------");

const date2 = new Date(2020,00,31,10,00);
console.log(date2);
console.log("-------------------------");

console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());