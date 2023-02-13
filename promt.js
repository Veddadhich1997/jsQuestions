// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

function getArea(b,h){
    let area = 0.5*b*h;
    return area;
}

var a = getArea(10,5);
console.log(a);