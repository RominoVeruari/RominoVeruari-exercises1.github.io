// christmasTreeByNight(5);

// /*

// *******
// *** ***
// **   **
// *     *
// *******

// */

let star = "*";
let space = " ";
function christmasTreeByNight(n) {
    for (var i = 0; i <= n; i++) {
        switch (i) {
            case 0:
                if (i == 0) {
                    console.log(star.repeat(7) + "\n")
                } break;
            case 1:
                if (i == 1) {
                    console.log(star.repeat(3) + space + star.repeat(3) + "\n")
                } break;
            case 2:
                if (i == 2) {
                    console.log(star.repeat(2) + space.repeat(3) + star.repeat(2) + "\n")
                } break;
            case 3:
                if (i == 3) {
                    console.log(star + space.repeat(5) + star + "\n")
                } break;
            case 4:
                if (i == 4) {
                    console.log(star.repeat(7))
                } break ;
            default:
        }
    }
}
christmasTreeByNight(5);