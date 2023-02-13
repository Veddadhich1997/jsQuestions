// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const arr = ["India", "UK", "Canada", "Spain", "USA", "Ethiopia"];
var a = arr.find(function(e){
    return e == "Ethiopia";
});
if(a){
    var b = a.toUpperCase();
    console.log(b);
}
else{
    arr.push("Ethiopia");
    console.log(arr);
}

