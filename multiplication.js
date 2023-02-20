// Write a function that will output a multiplication table with the size of a given argument.


// multiplicationTable(3);

// /*
// 1 2 3
// 2 4 6
// 3 6 9
// */


var line = ""
function multiplicationTable(n) {
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            line += (i * j) + " ";
        }
        console.log(line)
        line = ""
    }

}
multiplicationTable(3);