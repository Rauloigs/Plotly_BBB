// Define URL to the SpaceX
const url = "https://api.spacexdata.com/v2/launchpads";
// Calling SpaceX's API with d3.json().then() method
// d3.json(url).then(receivedData => console.log(receivedData));
// Return the Vandenberg Air Force Base:
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
// Print only latitude and longitude coordinates of each station with map()
d3.json(url).then(spaceXResults => console.log(spaceXResults.map(lat => lat.location.latitude)));
// d3.json(url).then(spaceXResults.map(lat => lat.location) => console.log(spaceXResults));
d3.json(url).then(spaceXResults => console.log(spaceXResults.map(lat => lat.location.longitude)));