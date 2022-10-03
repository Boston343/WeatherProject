
import express from 'express';          // npm install express
import bodyParser from 'body-parser';   // npm install body-parser
import path from 'path';
import https from 'https';              // for forming external get requests
import { fileURLToPath } from 'url';
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true})); // this is for parsing data from html form

// __dirname is only available with CJS. Since I am using ESM I need to get it another way
// const __dirname = path.resolve();  // method 1.. apparently not totally correct? https://stackoverflow.com/questions/8817423/why-is-dirname-not-defined-in-node-repl
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This uses the openweathermap api (https://home.openweathermap.org/api_keys). You will need to create an account and generate an API key.  
import { weatherApiKey } from "./apikeys.js";

// -------------------------------------------------------------
// ---------------------- Listening ----------------------------
// -------------------------------------------------------------
app.listen(port, () => {
    console.log(`Server is listening on port ${port} at \"localhost:${port}\"`);
});

// -------------------------------------------------------------
// --------------------- Get Requests --------------------------
// -------------------------------------------------------------
// Server /
app.get('/', (req, res) => {
    console.log("Server is up and running.");

    const weatherRequest = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=Miami&appid=" + weatherApiKey;
    https.get(weatherRequest, (weatherResponse) => {
        console.log('statusCode:', weatherResponse.statusCode);
        console.log('statusMessage:', weatherResponse.statusMessage);
        console.log('headers:', weatherResponse.headers);

        weatherResponse.on('data', (d) => {
            var weatherData = JSON.parse(d);
            console.log(weatherData);
            var temp = weatherData.main.temp;
            console.log("temperature: " + temp + "F");
            var desc = weatherData.weather[0].description;
            console.log("description: " + desc);
        });

    }).on('error', (e) => {
        console.error(e);
    });
});