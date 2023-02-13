// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

var evenNum = (value)=>{
    if(value%2==0){
        return `${value} is even number`;
    }
    else{
        return `${value} is odd number`;
    }
}

var c = evenNum(7);
console.log(c);