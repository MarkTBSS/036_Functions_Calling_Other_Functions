"use strict";

// Define the percentageOfWorld1 function
const percentageOfWorld1 = function (population) {
    const worldPopulation = 7900;
    return ((population / worldPopulation) * 100).toFixed(2);
};

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
};

// Log the returned values to the console
console.log(describePopulation("Portugal", 10));
console.log(describePopulation("China", 1441));
console.log(describePopulation("USA", 332));
