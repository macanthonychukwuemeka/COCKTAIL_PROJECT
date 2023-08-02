import presentDrinks from './src/presentDrinks.js';
import './src/searchForm.js';
import fetchDrinks from './src/fetchDrinks.js';
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007




window.addEventListener("DOMContentLoaded", ()=> {
    presentDrinks(URL);
})