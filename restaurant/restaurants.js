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





getDataRestaurant(); //we initialaze the page with restaurants standart data
async function getDataRestaurant() {
    // we fetch and populate the restaurants data
    const responseRestaurant = await fetch(`./jsno-files/restaurants.json`);
    const dataRestaurants = await responseRestaurant.json();
    let length = dataRestaurants.length;
    let temp = "";
    const restaurant = document.getElementById("firstRow")
    for (let i = 0; i < length; i++) {
        temp += `<div class="col" id="restaurant` + dataRestaurants[i].id + `">`;
        temp += `<div class="restaurantName" id="restaurantName">` + dataRestaurants[i].name + `</div>`;
        temp += `<div class="restaurantCity" id="restaurantCity">` + dataRestaurants[i].city + `</div>`;
        temp += `<div class="restaurantCuisine" id="restaurantCuisine">` + dataRestaurants[i].cuisine + `</div>`
        temp += `</div>`


    }
    restaurant.innerHTML = temp;

};

const myCollection = document.getElementsByClassName("col");
const myButtons = document.getElementsByClassName("showDetails");
//we declare 3 variables to store the restaurants standart data
let standartInfo0 = "";
let standartInfo1 = "";
let standartInfo2 = "";

// this function displays detailed data for restaurant like address and description

async function showDetails(e) {
    // console.log(e);

    //fetch first restaurant data
    const responseShowDetails1 = await fetch(`./jsno-files/restaurant1.json`);
    const dataShowDetails1 = await responseShowDetails1.json();
    //fetch second restaurant data
    const responseShowDetails2 = await fetch(`./jsno-files/restaurant2.json`);
    const dataShowDetails2 = await responseShowDetails2.json();
    // fetch third restaurant data 
    const responseShowDetails3 = await fetch(`./jsno-files/restaurant3.json`);
    const dataShowDetails3 = await responseShowDetails3.json();
    if (e === 0) {
        let temp = myCollection[0].innerHTML;
        let newTemp = `<div class="restaurantAddress" id="restaurantAddress">` + dataShowDetails1.address + `</div>
        <div class="restaurantDescription" id="restaurantDescription">` + dataShowDetails1.description + `</div>`;
        standartInfo0 = temp; //we store the restaurants standart data
        myCollection[0].innerHTML = temp + newTemp; //we add the details 

        myButtons[0].setAttribute("onclick", "showLess(0)")
        myButtons[0].innerHTML = "Show Less"
    } else if (e === 1) {
        let temp = myCollection[1].innerHTML;
        let newTemp = `<div class="restaurantAddress" id="restaurantAddress">` + dataShowDetails2.address + `</div>
        <div class="restaurantDescription" id="restaurantDescription">` + dataShowDetails2.description + `</div>`;
        standartInfo1 = temp;
        myCollection[1].innerHTML = temp + newTemp;
        myButtons[1].setAttribute("onclick", "showLess(1)")
        myButtons[1].innerHTML = "Show Less"
    } else if (e === 2) {
        let temp = myCollection[2].innerHTML;
        let newTemp = `<div class="restaurantAddress" id="restaurantAddress">` + dataShowDetails3.address + `</div>
        <div class="restaurantDescription" id="restaurantDescription">` + dataShowDetails3.description + `</div>`;
        standartInfo2 = temp;
        myCollection[2].innerHTML = temp + newTemp;
        myButtons[2].setAttribute("onclick", "showLess(2)")
        myButtons[2].innerHTML = "Show Less"
    }


};

function showLess(e) {

    if (e === 0) {
        myCollection[0].innerHTML = standartInfo0 // we call the standart data and remove the details
        myButtons[0].setAttribute("onclick", "showDetails(0)")
        myButtons[0].innerHTML = "Show Details"
    } else if (e === 1) {
        myCollection[1].innerHTML = standartInfo1
        myButtons[1].setAttribute("onclick", "showDetails(1)")
        myButtons[1].innerHTML = "Show Details"
    } else if (e === 2) {
        myCollection[2].innerHTML = standartInfo2
        myButtons[2].setAttribute("onclick", "showDetails(2)")
        myButtons[2].innerHTML = "Show Details"
    }
};


async function dataSearch() {
    // e.preventDefault();
    const responseRestaurant = await fetch(`./jsno-files/restaurants.json`);
    const dataRestaurants = await responseRestaurant.json();
    // const dataFilter = JSON.stringify(dataRestaurants);
    console.log(dataRestaurants)
    // console.log(dataFilter)
    const searchInput = document.getElementById("search");

    let value = searchInput.value;
    let results = document.getElementById("results-firstRow");
    let temp = ""
    
    if (value && value.trim().length > 0) {
        value = value.trim();

        const lengthFilter = dataRestaurants.length

        for (let i = 0; i < lengthFilter; i++)
            if (value === dataRestaurants[i].city || value === dataRestaurants[i].cuisine) {
                // add data to results
                temp += `<p>` + dataRestaurants[i].name + `</p>`;
                temp += `<p>` + dataRestaurants[i].city + `</p>`;
                temp += `<p>` + dataRestaurants[i].cuisine + `</p>`;
                

            }
            results.innerHTML = temp;
    }
    else {
        results.innerHTML = `<p> What are you looking for ? </p>`; // add to results
    }
}

function dataClear() {
    document.getElementById("search").setAttribute("placeholder", "search by city or cuisine...");
    document.getElementById("results-firstRow").innerHTML = "";
}