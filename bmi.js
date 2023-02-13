// 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more


function getBMI(w,h){
   let a = w/(h*h);
   console.log(a);
   if(a<18.5){
    console.log("Underweight: BMI is less than 18.5");
   }
   else if(a>=18.5 && a<=24.9){
    console.log("Normal weight: BMI is 18.5 to 24.9");
   }
   else if(a>=25 && a<=29.9){
    console.log("Overweight: BMI is 25 to 29.9");
   }
   else{
    console.log("Obese: BMI is 30 or more");
   }
}

getBMI(81,1.76);