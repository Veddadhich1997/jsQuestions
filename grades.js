// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F


function getGrades(number){
   if(number>=80 && number<=100){
    return "You got A grade";
   }
   else if(number>=70 && number<80){
    return "You got B grade";
   }
   else if(number>=60 && number<70){
    return "You got C grade";
   }
   else if(number>=50 && number<60){
    return "You got D grade";
   }
   else{
    return "You are failed";
   }
}

var a = getGrades(52);
console.log(a);


