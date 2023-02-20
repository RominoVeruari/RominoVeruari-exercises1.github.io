// Create an array, containing 10 numbers.
// Remove the last element from the array and log it in console.
// Add a new element to the end of the array.
// Change the value of the array's second element to zero.
// Change the value of every third array's element to one. Use loops to do it.
// After each of the operations, you can output your whole array in console to see what happens.

let tab = [0,1,2,3,4,5,6,7,8,9]

let tab1=tab.pop();
console.log(tab1);
tab.push(11);
tab[1]= 0;
console.log(tab);
function thirdEle (){
    
for(var i = 0 ; i<10 ;i+=3){
    tab[i]= 1
    
}
return console.log(tab);
};

thirdEle();