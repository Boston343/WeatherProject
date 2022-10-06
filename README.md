# Weather Project

Weather App using an API. Used while learning Express.js and interacting with APIs.

## Dependencies

-   OpenWeatherMap API
    -   You will need to create an account and generate a free API key. https://home.openweathermap.org/api_keys.
    -   Next create a file in the `WeatherProject` folder called `apikeys.js` and put in it the line 
    ```javascript
    export const weatherApiKey = "your api key here";
    ```
-   Express.js
    -   Inside project run `npm install express`
-   Body Parser
    -   Inside project run `npm install body-parser`

## Includes

-   API
    - OpenWeatherMap API usage example
-   JS includes
    -   express
    -   body-parser
    -   path
    -   url
-   Data retreival and manipulation
    -   Serving up HTML files
    -   Retreive data from form, manipulate, and respond to user
    -   Minimal error handling
