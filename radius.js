// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.


function getRadius(){
  var r = prompt("Please enter the radius",0);
  if(r != null){
    var a = 3.14*r*r;
    return a;
  }  
}

var b = getRadius();
console.log(b);