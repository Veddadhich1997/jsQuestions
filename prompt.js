// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

function getReady(){
    var age = prompt("Please enter your age",00);
    if(age != null){
        if(age>=18){
            return "You are now eligible to drive your vehicle";
        }
        else{
            var a = 18-age;
            return `Please wait for ${a} years to drive your vehcile`;
        }
    }
}

var b = getReady();
console.log(b);