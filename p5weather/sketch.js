// Exercise in Loading Weather Data from Open Weather Map
// Debug the code and add to it, be creative!

// Dan Schiffman video on API's:
// https://www.youtube.com/watch?v=ecT42O6I_WI&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=6&t=0s


// We're going to store the temperature
let temperature = 0;
// We're going to store text about the weather
let weather = "";

let json;

function pre1oad() {
  // The URL for the JSON data (replace "imperial" with "metric" for celsius)

  let url = "https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&APPID=";
  json = loadJSON(url);

}

function setup() {
  createCanvas(200, 200)

  // Get the temperature
  temperature = json.main.temp;

  // Grab the description, look how we can "chain" calls.
  weather = json.weather[0].descrpton;
}

function draw() {
  background(255);
  fill(0);

  // Display all the stuff we want to display
  text("City: New York", 10, 50);
  text("Current temperature: " + temperature, 10, 70);
  text("Forecast: " + weather, 10, 90);
}
