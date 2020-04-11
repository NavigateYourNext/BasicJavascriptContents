const mesg = 'This is my first java script code';
console.log(mesg);

const mesg1 = 'This is my first \n java script code';
console.log(mesg1);

const mesg2 = 'This is my first\n'
+'\'java\' script code';
console.log(mesg2);

console.log("--------------------------------------------");

//Literals
//ES6: Template Literals  ->>>>> Back Tick Chars ->>> ``

let name = "Tom";
const mailbody  = `Hi ${name}${2+4},
Thanks for adding me here
It's my 'pleasure' to be with you.

Have a great day !!

Thanks & Regards,
Akshay Shete`;

console.log(mailbody);
