//import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

//const walkers = getWalkers()
const cities = getCities()

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}



//New changes to allow walkers to work in more than one city
    //~delete the city property in the walker table and make a new table for cities in the CityList module
    //There can be more than one walker in a city, but only one city per walker
        //~add a cityId property to the walker table
        //~WE NEED TO ADD A WalkerCities table to the modules to store the many to many relationship of city to walker
        //Then define a function that iterates the walker and city tables and determines whether or not they match
            //IF they do then assign the walker to that city (more than one walker can be in the city at a time)
        //~Step One: remove cityID property from each walker object AND copy the data given to the database module 
        //~Step Two: create getter functions in the database to export the new data in the module
        //~Step Three: update the CityList module to invoke the getCities function and store the value returned in cities
            //~update the for loop to iterate the array of cities
            //~interpolate the name proterty of city between list item tags


            // Red (!)
            // Blue (?)
            // Green (*)
            // Yellow (^)
            // Pink (&)
            // Purple (~)
            // Mustard (todo)
            // Grey (//)

        