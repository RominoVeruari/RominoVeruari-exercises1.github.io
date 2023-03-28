// function showDetails(e) {
//     console.log(e)

//     const myCollection = document.getElementsByClassName("col");
//     const myButtons = document.getElementsByClassName("showDetails");


//     if (e === 0) {
//         let temp = myCollection[0].innerHTML;
//         let newTemp = `<div class="restaurantAddress" id="restaurantAddress"> dataShowDetails1.address </div>
//     <div class="restaurantDescription" id="restaurantDescription">dataShowDetails1.description </div>`;
//         myCollection[0].innerHTML = temp + newTemp;
//         myButtons[0].setAttribute("onclick","showLess(0)")


//     }else if(e===1){
//         let temp = myCollection[1].innerHTML;
//         let newTemp = `<div class="restaurantAddress" id="restaurantAddress"> dataShowDetails2.address </div>
//     <div class="restaurantDescription" id="restaurantDescription">dataShowDetails2.description </div>`;
//         myCollection[1].innerHTML = temp + newTemp;
//         myButtons[1].setAttribute("onclick","showLess(1)")
//     }else if (e===2){
//         let temp = myCollection[2].innerHTML;
//         let newTemp = `<div class="restaurantAddress" id="restaurantAddress"> dataShowDetails3.address </div>
//     <div class="restaurantDescription" id="restaurantDescription">dataShowDetails3.description </div>`;
//         myCollection[2].innerHTML = temp + newTemp;
//         myButtons[2].setAttribute("onclick","showLess(2)")
//     }
// }

// // function showDetails(e) {
// //     console.log(e)

// //     let temp = "";
// //     if (e === "restaurant1") {
// //         temp = `<div class="restaurantAddress" id="restaurantAddress"> dataShowDetails1.address </div>
// //     <div class="restaurantDescription" id="restaurantDescription">dataShowDetails1.description </div>`;
// //         document.getElementById("restaurant1").appendChild(temp);
// //     } else if (e === "restaurant2") {
// //         temp = `<div class="restaurantAddress" id="restaurantAddress">` + dataShowDetails2.address + `</div>
// //     <div class="restaurantDescription" id="restaurantDescription">` + dataShowDetails2.description + `</div>`;
// //         document.getElementById("restaurant2").lastElementChild = temp;
// //     } else if (e === "restaurant3") {
// //         temp = `<div class="restaurantAddress" id="restaurantAddress">` + dataShowDetails3.address + `</div>
// //     <div class="restaurantDescription" id="restaurantDescription">` + dataShowDetails3.description + `</div>`;
// //         document.getElementById("restaurant3").lastElementChild = temp;
// //     }

// // }

showMenu();
async function showMenu(e) {
    //fetch menu1
    const responseMenu1 = await fetch(`./jsno-files/menu1.json`);
    const dataMenu1 = await responseMenu1.json();
    console.log(dataMenu1)
    //fetch menu2
    const responseMenu2 = await fetch(`./jsno-files/menu2.json`);
    const dataMenu2 = await responseMenu2.json();
    console.log(dataMenu2)
    //fetch menu3
    const responseMenu3 = await fetch(`./jsno-files/menu3.json`);
    const dataMenu3 = await responseMenu3.json();
    console.log(dataMenu3)


    let newTemp = "";
    let data = ""

    if (e === 0) {
        data = dataMenu1;
        for (let i = 0; i < data.length; i++) {
            newTemp += `<div class="col">`
            newTemp += `<div>` + data[i].name + `</div>`;
            newTemp += `<div>` + data[i].kind + `</div>`;
            newTemp += `<div>` + data[i].price + `</div></div>`;


        }
        document.getElementById("results").innerHTML = newTemp;
    } else if (e === 1) {
        data = dataMenu2;
        for (let i = 0; i < data.length; i++) {
            newTemp += `<div class="col">`
            newTemp += `<div>` + data[i].name + `</div>`;
            newTemp += `<div>` + data[i].kind + `</div>`;
            newTemp += `<div>` + data[i].price + `</div></div>`;


        }
        document.getElementById("results").innerHTML = newTemp;
    } else if (e === 2) {
        data = dataMenu3;
        for (let i = 0; i < data.length; i++) {
            newTemp += `<div class="col">`
            newTemp += `<div>` + data[i].name + `</div>`;
            newTemp += `<div>` + data[i].kind + `</div>`;
            newTemp += `<div>` + data[i].price + `</div></div>`;


        }
        document.getElementById("results").innerHTML = newTemp;
    }

}