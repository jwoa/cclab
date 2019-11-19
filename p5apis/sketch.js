let weather;
let input;

let weatherapi = 'http://api.openweathermap.org/data/2.5/weather?q=';
let apiKey = '&APPID=6f584c3905e12ffcae9d30f2f168582c'
let units = '&units=imperial';

function setup() {
  createCanvas(400, 300);
  let button = select('#submit');
  button.mousePressed(runWeather);
  input = select('#city');
}

function runWeather() {
  let url = weatherapi + input.value() + apiKey + units;
  loadJSON(url, weatherData);
}

function weatherData(data) {
  print(data);
  weather = data;
}

function draw() {
  background(0)
  if(weather) {
    let temp = weather.main.temp;
    let humidity = weather.main.humidity;
    fill(123, 212, 179)
    ellipse(100, 100, temp, temp);
    ellipse(10, 50, humidity, humidity)
  }
}