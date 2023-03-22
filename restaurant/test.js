function showDetails(e) {
    console.log(e)

    const myCollection = document.getElementsByClassName("col");
    if (e === 0) {
        let temp = myCollection[0].innerHTML;
        let newTemp = `<div class="restaurantAddress" id="restaurantAddress"> dataShowDetails1.address </div>
    <div class="restaurantDescription" id="restaurantDescription">dataShowDetails1.description </div>`;
        myCollection[0].innerHTML = temp + newTemp;

    }else if(e===1){
        let temp = myCollection[1].innerHTML;
        let newTemp = `<div class="restaurantAddress" id="restaurantAddress"> dataShowDetails2.address </div>
    <div class="restaurantDescription" id="restaurantDescription">dataShowDetails2.description </div>`;
        myCollection[1].innerHTML = temp + newTemp;
    }else if (e===2){
        let temp = myCollection[2].innerHTML;
        let newTemp = `<div class="restaurantAddress" id="restaurantAddress"> dataShowDetails3.address </div>
    <div class="restaurantDescription" id="restaurantDescription">dataShowDetails3.description </div>`;
        myCollection[2].innerHTML = temp + newTemp;
    }
}
// function showDetails(e) {
//     console.log(e)

//     let temp = "";
//     if (e === "restaurant1") {
//         temp = `<div class="restaurantAddress" id="restaurantAddress"> dataShowDetails1.address </div>
//     <div class="restaurantDescription" id="restaurantDescription">dataShowDetails1.description </div>`;
//         document.getElementById("restaurant1").appendChild(temp);
//     } else if (e === "restaurant2") {
//         temp = `<div class="restaurantAddress" id="restaurantAddress">` + dataShowDetails2.address + `</div>
//     <div class="restaurantDescription" id="restaurantDescription">` + dataShowDetails2.description + `</div>`;
//         document.getElementById("restaurant2").lastElementChild = temp;
//     } else if (e === "restaurant3") {
//         temp = `<div class="restaurantAddress" id="restaurantAddress">` + dataShowDetails3.address + `</div>
//     <div class="restaurantDescription" id="restaurantDescription">` + dataShowDetails3.description + `</div>`;
//         document.getElementById("restaurant3").lastElementChild = temp;
//     }

// }