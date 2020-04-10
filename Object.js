//vars and functions should be defined in an Object
//Key:Value format

const circle =
{
    radius : 1,
    isVisible : true,
    location : {
        x:1,
        y:1
    },

    draw : function(){
        console.log('draw');
    }
}

console.log(circle.radius);
console.log(circle);