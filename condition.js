// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

function checkSeason(value){
    if(value == "September" ||value == "October" ||value == "November"){
        return "The Season is Autumn";
    }
    else if(value == "December" ||value == "January" ||value == "February"){
        return "The Season is Winter";
    }
    else if(value == "March" ||value == "April" ||value == "May"){
        return "The Season is Spring";
    }
    else{
        return "The Season is Summer";
    }
}

var a = checkSeason("January");
console.log(a);