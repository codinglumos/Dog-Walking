import { getPets, getWalkers, getCities, getWalkerCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()

// Function whose responsibility is to find the walker assigned to a pet
export const findPetWalker = (pet, allWalkers) => {
    let petWalker = ""

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

// The function need the walker information, so define a parameter
export const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty array to store all of the assignment objects
    const assignments = []

    // Iterate the array value of walkerCities
    for (const city of walkerCities) {

        // Check if the primary key of the walker equals the foreign key on the assignment
        if (walkerCities.walkerId === city.id) {
            // If it does, add the current object to the array of assignments
            city.push(assignments)
        }
    }

    // After the loop is done, return the assignments array
    return assignments
}

// Define a function that builds a string of city names. Needs a paramter for assignments array.
export const assignedCityNames = (assignments) => {
    // Define an empty string that will get appended with matching cities
    let cityNames = ""

    // Iterate the array of assignment objects
    for (const assignment of assignments) {

        // For each assignment, iterate the cities array to find the match
        for (const city of cities) {
            if (city.id === walkerCities.cityId) {
                // Add the name of the matching city to the string of city names
                cityNames = `${cityNames} and ${city.name}`
            }
        }
    }

    // After the loop is done, return the string
    return cityNames
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findPetWalker(currentPet, walkers)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}