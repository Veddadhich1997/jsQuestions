// 28. Use for loop to iterate from 0 to 100 and print only prime numbers
var lowerNumber = 0;
var higherNumber = 100;
function isPrime(){
    console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
        for (let i = lowerNumber; i <= higherNumber; i++) {
            let flag = 0;
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if (i > 1 && flag == 0) {
                console.log(i);
            }
        }
}

isPrime();






