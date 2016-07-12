<h1>My Weather App</h1>

http://dreamthink.github.io/myweatherapp

This simple web app will determine the user's geolocation and return the current weather forecast. The user can toggle between Fahrenheit and Celsius.

<h3>Challenges</h3>
Because browser geolocation has been deprecated on non-secure origins (non-HTTPS) on Chrome 50, I utilized a workaround because my GitHub is served by dreamthinkstudios.com which is non-HTTPS. I used the Google Map API as a fallback option to obtain the latitude and longitude coordinates of the browser (Google Map API is not affected by this deprecation). Then these coordinates were fed into the Open Weather Map API.

Please read the below article for more information on Chrome geolocation deprecation:
https://developers.google.com/web/updates/2016/04/geolocation-on-secure-contexts-only?hl=en