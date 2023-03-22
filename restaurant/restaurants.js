// HOMEWORK 1:

// By using the given sample code, JS and AJAX, build a simple frontend APP, that will connect to some JSON files and display the data for users.
// The information is stored in JSON files, in the remote/ folder. It should be accessed with fetch.
// There is a file with all restaurants' data as well as files containing details of each restaurant and its menu.
// 1. First, fetch the data of all restaurants and let the list of items to be displayed as an HTML page.
// 2. You can add a simple search engine that will filter your data (for example by city and cuisine type).
// 3. Each restaurant should have a clickable element (a button or a link) with some JavaScript listener attached to it.
// When clicked, the link should display the restaurant's details, fetched from a JSON file (do it with DOM modification in the same HTML).
// 4. Then, the user may see the menu (also fetched from a JSON file), for example, by clicking a link to "see the menu" on the details page.
// Modify the styles of your app if you like.

//This function displays basic data of the restaurants

// datafilter();
// async function datafilter() {
//     const responseRestaurant = await fetch(`./jsno-files/restaurants.json`);
//     const dataRestaurants = await responseRestaurant.json();
//     const myJson = JSON.stringify(dataRestaurants);
//     console.log(myJson)
//     return myJson;

// }
// const filter = datafilter();
// console.log(filter);
getDataRestaurant();
async function getDataRestaurant() {
    const responseRestaurant = await fetch(`./jsno-files/restaurants.json`);
    const dataRestaurants = await responseRestaurant.json();
    // console.log(dataRestaurants);
    let length = dataRestaurants.length;
    let temp = "";
const restaurant = document.getElementById("firstRow")
    for (let i = 0; i < length; i++) {
        temp += `<div class="col" id="restaurant`+dataRestaurants[i].id+`">`;
        temp += `<div class="restaurantName" id="restaurantName">` + dataRestaurants[i].name + `</div>`;
        temp += `<div class="restaurantCity" id="restaurantCity">` + dataRestaurants[i].city + `</div>`;
        temp += `<div class="restaurantCuisine" id="restaurantCuisine">` + dataRestaurants[i].cuisine + `</div>`
        temp += `</div>`
        // console.log(restaurant)
        
    }
    restaurant.innerHTML = temp;

};
// this function displays detailed data for restaurant like address and description

async function showDetails(e) {
    console.log(e);
    
    //fetch first restaurant data
    const responseShowDetails1 = await fetch(`./jsno-files/restaurant1.json`);
    const dataShowDetails1 = await responseShowDetails1.json();
    //fetch second restaurant data
    const responseShowDetails2 = await fetch(`./jsno-files/restaurant2.json`);
    const dataShowDetails2 = await responseShowDetails2.json();
    // fetch third restaurant data 
    const responseShowDetails3 = await fetch(`./jsno-files/restaurant3.json`);
    const dataShowDetails3 = await responseShowDetails3.json();

    const myCollection = document.getElementsByClassName("col");
    // let length1 = dataShowDetails1.length;
    // let length2 = dataShowDetails2.length;
    // let length3 = dataShowDetails3.length;
    if (e === 0) {
        let temp = myCollection[0].innerHTML;
        let newTemp = `<div class="restaurantAddress" id="restaurantAddress">` + dataShowDetails1.address + `</div>
        <div class="restaurantDescription" id="restaurantDescription">` + dataShowDetails1.description + `</div>`;
        myCollection[0].innerHTML = temp + newTemp;
    } else if (e=== 1){
        let temp = myCollection[1].innerHTML;
        let newTemp = `<div class="restaurantAddress" id="restaurantAddress">` + dataShowDetails2.address + `</div>
        <div class="restaurantDescription" id="restaurantDescription">` + dataShowDetails2.description + `</div>`;
        myCollection[1].innerHTML = temp + newTemp;
    } else if (e=== 2){
        let temp = myCollection[2].innerHTML;
        let newTemp = `<div class="restaurantAddress" id="restaurantAddress">` + dataShowDetails3.address + `</div>
        <div class="restaurantDescription" id="restaurantDescription">` + dataShowDetails3.description + `</div>`;
        myCollection[2].innerHTML = temp + newTemp;
    }

};
// // search engine
// const searchInput = document.querySelector('.input');
// searchInput.addEventListener("input", (e) => {
//     let value = e.target.value;


//     if (value && value.trim().length > 0) {
//         value = value.trim().toLowerCase();
//         const lengthfilter = datafilter().length
//         for (let i = 0; i < lengthfilter; i++)
//             if (value === datafilter[i].city.value || value === datafilter[i].cuisine.value) {


//                 result();

//             }
//         return "No match found"

//     } else {
//         return `There is no Restaurant  in this city or with this cuicine`;

//     }

// });
// // clear button function
// const clearButton = document.getElementById('clear')

// clearButton.addEventListener("click", () => {
//     let searchBar = "";
//     document.getElementById("search").innerHTML = searchBar;
//     document.getElementById("list").innerHTML = searchBar;
// })
// let results = document.getElementById("results");
// function display(e) {
//     let temp3 = "";
//     let length = e.length
//     for (i = 0; i < length; i++) {
//         temp3 += `<div class="col" id="` + e[i].id + `>`;
//         temp3 += `<div`
//     }
//     document.getElementById("results-firstRow").innerHTML = temp3;
// }