// create a function that filters the city and cuisine of the three restaurants
// create an array of objects with cit and cuisine as Parameters
// compare the value of the keyword with every Parameter
// if no match , show mesage no restaurant was found in this city or cuisine
// if match show results 
// cl
async function getKeywords(){
    
    const responseRestaurant = await fetch(`./jsno-files/restaurants.json`);
    const dataRestaurants = await responseRestaurant.json();
    console.log(dataRestaurants);
    let length1 = dataRestaurants.length;
}