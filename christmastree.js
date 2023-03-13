// Write a function, outputting a christmas tree of a given height, made of asterisk * characters.


// christmasTree(4);

// /*

// *
// **
// ***
// ****

// */

let star='*' ;
function christmasTree(n){
    for(var i=0;i<=n;i++){
        console.log(star.repeat(i)+"\n")
    }

}
christmasTree(6);