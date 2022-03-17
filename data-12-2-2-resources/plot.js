// Sort the cities by increased population. 
// var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.increase_from_2016);

// var topFiveCities = sortedCities.slice(0,5);

// var topFiveCityNames = topFiveCities.map(city => city.City);
// // The data is all strings so parseInt converts strings to integers.
// var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// // Render arrays in Plotly.
// var trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
// };

// var data = [trace];
// var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: {title: "City"},
//     yaxis: {title: "Population Growth, 2016-2017"}
// };
// Plotly.newPlot("bar-plot", data, layout);

// Sort the cities by increased population. 
var sortedCities = cityGrowths.sort((a,b) => a.population - b.population).reverse();

var topSevenCities = sortedCities.slice(0,7);

var topSevenCityNames = topSevenCities.map(city => city.City);
// The data is all strings so parseInt converts strings to integers.
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.population));

// Render arrays in Plotly.
var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
};

var data = [trace];
var layout = {
    title: "Largest Population Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}
};
Plotly.newPlot("bar-plot", data, layout);